import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import mapImg from "@/public/images/pineda-evidencia-trabajo-altura.jpeg";

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
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[28rem]">
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
              src={mapImg} 
              alt="Map view of Mexico City" 
              fill 
              className="object-cover grayscale contrast-125"
              placeholder="blur"
            />
          </div>
        </section>

        <section className="md:col-span-7 bg-white border-2 border-[#2D2D2D] p-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl uppercase">Enviar Mensaje</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
