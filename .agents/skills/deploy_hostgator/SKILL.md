# SKILL: Deploy Next.js to HostGator via GitHub Actions

## OBJETIVO
Tu objetivo como agente (@devops / @architect) es configurar un pipeline de CI/CD automatizado en GitHub Actions para el repositorio `https://github.com/merolhack/servicio-pineda.com`. El pipeline debe ejecutarse al recibir un `pull_request` o un `push` en la rama `main` y desplegar la aplicación en un entorno cPanel/HostGator.

## CONTEXTO Y MEJORES PRÁCTICAS (BEST PRACTICES)
Debes adherirte estrictamente a las siguientes prácticas arquitectónicas para evitar fallos de recursos y asegurar un despliegue sin tiempo de inactividad (Zero-Downtime):

1. **Construcción Externa (Off-Server Build):** Los servidores compartidos de HostGator tienen límites estrictos de CPU y memoria (RAM) que causan errores de "Recurso temporalmente no disponible" o matan el proceso al intentar ejecutar `npm run build`. **Toda la construcción debe realizarse en el runner de GitHub Actions**.
2. **Modo Standalone:** Asegúrate de que el archivo `next.config.js` de la aplicación tenga configurado `output: 'standalone'`. Esto crea un servidor Node.js mínimo y rastrea dependencias, ideal para integrarse con Phusion Passenger en el cPanel de HostGator.
3. **Preparación de Artefactos:** La carpeta `.next/standalone` no incluye por defecto los archivos estáticos. **Debes agregar un paso en el pipeline para copiar las carpetas `public` y `.next/static` dentro de `.next/standalone`** antes de transferir los archivos.
4. **Despliegue vía Rsync sobre SSH (Puerto 2222):** Para transferir los archivos, utiliza la acción `easingthemes/ssh-deploy`. **Es obligatorio especificar el puerto 2222**, ya que HostGator utiliza este puerto no estándar para conexiones SSH en planes compartidos como medida de seguridad. Se requerirá una clave SSH en formato PEM (RSA).
5. **Reinicio Graceful con Phusion Passenger:** En HostGator, las aplicaciones Node.js son administradas por Phusion Passenger. Para aplicar los cambios sin tirar el servidor, **debes ejecutar un comando remoto para crear el archivo `tmp/restart.txt`** (`mkdir -p tmp && touch tmp/restart.txt`). Passenger detectará este archivo y recargará los procesos de manera segura.

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
          node-version: '18' # Ajustar a la versión configurada en Node.js Selector de cPanel
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Next.js App
        run: npm run build

      - name: Prepare Standalone Directory
        run: |
          cp -r public .next/standalone/
          cp -r .next/static .next/standalone/.next/

      - name: Deploy to HostGator via Rsync
        uses: easingthemes/ssh-deploy@v2
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        env:
          SSH_PRIVATE_KEY: ${{ secrets.HOSTGATOR_SSH_PRIVATE_KEY }}
          REMOTE_HOST: ${{ secrets.HOSTGATOR_REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.HOSTGATOR_REMOTE_USER }}
          REMOTE_PORT: 2222
          TARGET: ${{ secrets.HOSTGATOR_TARGET_PATH }}
          SOURCE: ".next/standalone/"
          ARGS: "-rltgoDzvO --delete"

      - name: Restart Passenger App (Zero-Downtime)
        uses: appleboy/ssh-action@master
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        with:
          host: ${{ secrets.HOSTGATOR_REMOTE_HOST }}
          username: ${{ secrets.HOSTGATOR_REMOTE_USER }}
          key: ${{ secrets.HOSTGATOR_SSH_PRIVATE_KEY }}
          port: 2222
          script: |
            cd ${{ secrets.HOSTGATOR_TARGET_PATH }}
            mkdir -p tmp
            touch tmp/restart.txt
```

### Paso 3: Instrucciones Finales para el Usuario
Una vez que hayas creado/modificado los archivos, informa al usuario humano que debe configurar los siguientes **GitHub Secrets** en su repositorio `https://github.com/merolhack/servicio-pineda.com` para que el despliegue funcione:
- `HOSTGATOR_SSH_PRIVATE_KEY`: Su clave privada SSH (debe ser formato RSA/PEM).
- `HOSTGATOR_REMOTE_HOST`: La IP o dominio del servidor de HostGator.
- `HOSTGATOR_REMOTE_USER`: El usuario de cPanel.
- `HOSTGATOR_TARGET_PATH`: La ruta absoluta de la aplicación en el servidor (ej. `/home/usuario/servicio-pineda.com`).
