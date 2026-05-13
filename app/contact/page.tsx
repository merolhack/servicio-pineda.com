import Image from "next/image";

export const metadata = {
  title: "Contacto | Pineda Hydraulic",
  description: "Contáctenos para una asesoría técnica especializada en mantenimiento y reparación hidráulica industrial.",
};

export default function Contact() {
  return (
    <div className="max-w-[1280px] mx-auto px-lg py-xxl mt-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
        <section className="md:col-span-5 space-y-xl">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-md uppercase leading-tight">Contacto</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Estamos listos para atender sus necesidades de mantenimiento y reparación hidráulica industrial. Contáctenos para una asesoría técnica especializada.
            </p>
          </div>
          <div className="space-y-lg">
            <div className="flex items-start gap-md p-lg border border-[#E0E0E0] bg-surface-container-low">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              <div>
                <span className="font-label-bold text-label-bold block uppercase mb-xs tracking-wider">Ubicación</span>
                <p className="font-body-md text-body-md text-on-surface-variant">Mariano Salas No. 78-A, Ciudad de México, CP 07800</p>
              </div>
            </div>
            <div className="flex items-start gap-md p-lg border border-[#E0E0E0] bg-surface-container-low">
              <span className="material-symbols-outlined text-primary text-3xl">call</span>
              <div>
                <span className="font-label-bold text-label-bold block uppercase mb-xs tracking-wider">Teléfono</span>
                <p className="font-body-md text-body-md text-on-surface-variant">55 1446 7730</p>
              </div>
            </div>
            <div className="flex items-start gap-md p-lg border border-[#E0E0E0] bg-surface-container-low">
              <span className="material-symbols-outlined text-primary text-3xl">mail</span>
              <div>
                <span className="font-label-bold text-label-bold block uppercase mb-xs tracking-wider">Correo Electrónico</span>
                <p className="font-body-md text-body-md text-on-surface-variant">russellsandoval41@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-full h-64 border-2 border-[#2D2D2D] overflow-hidden relative">
            <Image 
              src="/images/image-11.jpg" 
              alt="Map view of Mexico City" 
              fill 
              className="object-cover grayscale contrast-125"
            />
          </div>
        </section>

        <section className="md:col-span-7 bg-white border-2 border-[#2D2D2D] p-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl uppercase">Enviar Mensaje</h2>
          <form className="space-y-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest">NOMBRE COMPLETO</label>
                <input 
                  className="border border-[#2D2D2D] rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md" 
                  placeholder="Ej. Juan Pérez" 
                  type="text" 
                  required
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest">EMPRESA</label>
                <input 
                  className="border border-[#2D2D2D] rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md" 
                  placeholder="Nombre de su organización" 
                  type="text" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest">EMAIL</label>
                <input 
                  className="border border-[#2D2D2D] rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md" 
                  placeholder="correo@ejemplo.com" 
                  type="email" 
                  required
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest">TELÉFONO</label>
                <input 
                  className="border border-[#2D2D2D] rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md" 
                  placeholder="55 0000 0000" 
                  type="tel" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest">SERVICIO REQUERIDO</label>
              <select className="border border-[#2D2D2D] rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md appearance-none">
                <option value="">Seleccione una opción</option>
                <option value="mantenimiento">Mantenimiento Preventivo</option>
                <option value="reparacion">Reparación de Cilindros</option>
                <option value="diagnostico">Diagnóstico de Sistemas</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest">MENSAJE</label>
              <textarea 
                className="border border-[#2D2D2D] rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md resize-y" 
                placeholder="Describa brevemente su requerimiento técnico..." 
                rows={5}
                required
              ></textarea>
            </div>
            <button 
              className="w-full bg-[#E31E24] text-white py-lg font-label-bold uppercase text-lg tracking-widest active:scale-[0.98] transition-all hover:bg-primary" 
              type="submit"
            >
              Enviar Solicitud Técnica
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
