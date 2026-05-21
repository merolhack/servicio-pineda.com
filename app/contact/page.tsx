import ContactForm from "@/components/ContactForm";

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
                <p className="font-body-md text-body-md text-on-surface-variant">Norte 94 8408, Col. La Esmeralda, C.P. 07540, Gustavo A. Madero, D.F.</p>
              </div>
            </div>
            <div className="flex items-start gap-md p-lg border border-[#E0E0E0] bg-surface-container-low">
              <span className="material-symbols-outlined text-primary text-3xl">call</span>
              <div>
                <span className="font-label-bold text-label-bold block uppercase mb-xs tracking-wider">Teléfonos</span>
                <p className="font-body-md text-body-md text-on-surface-variant">55 5136 1728</p>
                <p className="font-body-md text-body-md text-on-surface-variant">55 1446 7730</p>
                <p className="font-body-md text-body-md text-on-surface-variant">56 7117 3897</p>
              </div>
            </div>
            <div className="flex items-start gap-md p-lg border border-[#E0E0E0] bg-surface-container-low">
              <span className="material-symbols-outlined text-primary text-3xl">mail</span>
              <div>
                <span className="font-label-bold text-label-bold block uppercase mb-xs tracking-wider">Correo Electrónico</span>
                <p className="font-body-md text-body-md text-on-surface-variant">russell@servicio-pineda.com</p>
              </div>
            </div>
          </div>
          <div className="w-full h-64 border-2 border-[#2D2D2D] overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.316123387961!2d-99.08888178846424!3d19.48503058172976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fa3312f5d35f%3A0xab4fd45d6ef4fe15!2sNte%2094%208408%2C%20La%20Esmeralda%2C%20Gustavo%20A.%20Madero%2C%2007540%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1779339979327!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-300 absolute inset-0"
              title="Ubicación de Pineda Hydraulic"
            ></iframe>
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
