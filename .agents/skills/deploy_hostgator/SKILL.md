# SKILL: Deploy Next.js to HostGator via GitHub Actions

## OBJETIVO
Tu objetivo como agente (@devops / @architect) es configurar un pipeline de CI/CD automatizado en GitHub Actions para el repositorio `https://github.com/merolhack/servicio-pineda.com`. El pipeline debe ejecutarse al recibir un `pull_request` o un `push` en la rama `main` y desplegar la aplicación en un entorno cPanel/HostGator.

## CONTEXTO Y MEJORES PRÁCTICAS (BEST PRACTICES)
Debes adherirte estrictamente a las siguientes prácticas arquitectónicas para evitar fallos de recursos y asegurar un despliegue sin tiempo de inactividad (Zero-Downtime):

1. **Construcción Externa (Off-Server Build):** Los servidores compartidos de HostGator tienen límites estrictos de CPU y memoria (RAM) que causan errores de "Recurso temporalmente no disponible" o matan el proceso al intentar ejecutar `npm run build`. **Toda la construcción debe realizarse en el runner de GitHub Actions**.
2. **Modo Standalone:** Asegúrate de que el archivo `next.config.js` de la aplicación tenga configurado `output: 'standalone'`. Esto crea un servidor Node.js mínimo y rastrea dependencias, ideal para integrarse con Phusion Passenger en el cPanel de HostGator.
3. **Preparación de Artefactos:** La carpeta `.next/standalone` no incluye por defecto los archivos estáticos. **Debes agregar un paso en el pipeline para copiar las carpetas `public` y `.next/static` dentro de `.next/standalone`** antes de transferir los archivos.
4. **Despliegue vía SCP Nativo:** ¡PROHIBIDO usar acciones como `easingthemes/ssh-deploy` o `appleboy/scp-action`! El Jailshell de HostGator causa bugs severos: interrumpe el flujo binario de `rsync` ("protocol mismatch") debido a mensajes interactivos ocultos en `.bashrc`, y confunde la detección de OS a las acciones escritas en Go (asumiendo que es Windows). **Se debe usar siempre comandos bash nativos (`scp -r` puro)**.
5. **Configuración SSH Estricta para cPanel:** OpenSSH ha deshabilitado el uso de claves RSA antiguas (SHA-1) por defecto, pero HostGator aún suele requerirlas en sus conexiones. Por lo tanto, debes forzar el algoritmo legacy mediante el archivo `~/.ssh/config` (`PubkeyAcceptedAlgorithms ssh-rsa`) para evitar el error silencioso de firma rechazada ("Too many authentication failures").
6. **Reinicio Graceful con Phusion Passenger:** En HostGator, las aplicaciones Node.js son administradas por Phusion Passenger. Para aplicar los cambios sin tirar el servidor, debes ejecutar el comando nativo `ssh` para crear el archivo `tmp/restart.txt` (`mkdir -p tmp && touch tmp/restart.txt`). Passenger lo detectará y reiniciará Node.js automáticamente.

## INSTRUCCIONES DE EJECUCIÓN PARA EL AGENTE

### Paso 1: Verificación de next.config.js y entry point
- Verifica o modifica el archivo `next.config.js` para asegurar que `output: "standalone"` esté presente.
- Si es necesario, asegúrate de que existe un `server.js` en la raíz (generado por Next.js en la carpeta standalone) que actuará como punto de entrada para Phusion Passenger.

### Paso 2: Creación del Workflow de GitHub Actions
Crea el archivo `.github/workflows/deploy.yml` con la siguiente estructura exacta:

```yaml
name: Deploy Next.js to HostGator

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20' # Requerido para Next.js >= 15. Cambiar a 20 o 22 en cPanel.
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Next.js App
        run: npm run build

      - name: Prepare Standalone Directory
        run: |
          cp -r public .next/standalone/
          cp -r .next/static .next/standalone/.next/

      - name: Setup SSH
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        run: |
          mkdir -p ~/.ssh
          cat << 'EOF' > ~/.ssh/id_rsa
          ${{ secrets.HOSTGATOR_SSH_PRIVATE_KEY }}
          EOF
          chmod 600 ~/.ssh/id_rsa
          cat << 'EOF' > ~/.ssh/config
          Host *
            StrictHostKeyChecking no
            IdentitiesOnly yes
            IdentityFile ~/.ssh/id_rsa
            PubkeyAcceptedAlgorithms ssh-rsa
            PubkeyAcceptedKeyTypes ssh-rsa
            HostKeyAlgorithms +ssh-rsa
            BatchMode yes
          EOF
          chmod 600 ~/.ssh/config

      - name: Deploy to HostGator via native SCP
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        run: |
          shopt -s dotglob
          scp -r -P 2222 .next/standalone/* ${{ secrets.HOSTGATOR_REMOTE_USER }}@${{ secrets.HOSTGATOR_REMOTE_HOST }}:${{ secrets.HOSTGATOR_TARGET_PATH }}/

      - name: Restart Passenger App (Zero-Downtime)
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        run: |
          ssh -p 2222 ${{ secrets.HOSTGATOR_REMOTE_USER }}@${{ secrets.HOSTGATOR_REMOTE_HOST }} "mkdir -p ${{ secrets.HOSTGATOR_TARGET_PATH }}/tmp && touch ${{ secrets.HOSTGATOR_TARGET_PATH }}/tmp/restart.txt"
```

### Paso 3: Instrucciones Finales para el Usuario
Una vez que hayas creado/modificado los archivos, informa al usuario humano que debe configurar los siguientes **GitHub Secrets** en su repositorio `https://github.com/merolhack/servicio-pineda.com` para que el despliegue funcione:
- `HOSTGATOR_SSH_PRIVATE_KEY`: Su clave privada SSH (debe ser formato RSA/PEM).
- `HOSTGATOR_REMOTE_HOST`: La IP o dominio del servidor de HostGator.
- `HOSTGATOR_REMOTE_USER`: El usuario de cPanel.
- `HOSTGATOR_TARGET_PATH`: La ruta absoluta de la aplicación en el servidor (ej. `/home/usuario/servicio-pineda.com`).
