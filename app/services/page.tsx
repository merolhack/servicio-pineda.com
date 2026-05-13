import Image from "next/image";
import Link from "next/link";
import img7 from "@/public/images/pineda-duplicadores-estacionamiento.jpeg";
import img8 from "@/public/images/pineda-rampas-estacionamiento-01.jpeg";
import img9 from "@/public/images/pineda-evidencia-trabajo-altura.jpeg";
import img10 from "@/public/images/pineda-compresora-industrial-itsa.jpeg";

export const metadata = {
  title: "Servicios | Pineda Hydraulic",
  description: "Ofrecemos mantenimiento preventivo y correctivo de alta precisión para equipos industriales y automotrices.",
};

export default function Services() {
  const services = [
    { icon: "compress", title: "Compresoras", desc: "Instalación, diagnóstico y reparación integral de compresores de aire industriales.", bg: "bg-white" },
    { icon: "settings_input_component", title: "Equipo hidráulico y neumático", desc: "Mantenimiento especializado en sistemas de potencia de fluidos y control neumático.", bg: "bg-[#F5F5F5]" },
    { icon: "water_drop", title: "Hidro lavadoras", desc: "Servicio técnico para equipos de limpieza a alta presión de grado profesional.", bg: "bg-white" },
    { icon: "precision_manufacturing", title: "Rampas hidroeléctricas", desc: "Mantenimiento de elevadores vehiculares y plataformas de carga industriales.", bg: "bg-[#F5F5F5]" },
    { icon: "architecture", title: "Rectificadora de discos", desc: "Precisión técnica en el rectificado de componentes de frenado y superficies metálicas.", bg: "bg-[#F5F5F5]" },
    { icon: "charging_station", title: "Bombas", desc: "Reparación de bombas hidráulicas de pistones, paletas y engranajes.", bg: "bg-white" },
    { icon: "sanitizer", title: "Limpieza de cisternas", desc: "Servicios de saneamiento industrial y mantenimiento de depósitos de agua.", bg: "bg-[#F5F5F5]" },
    { icon: "local_parking", title: "Mantenimiento de estacionamientos", desc: "Soluciones integrales para la infraestructura y sistemas de estacionamientos.", bg: "bg-white" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-lg py-xxl mt-12">
      {/* Header Section */}
      <header className="mb-xxl max-w-3xl">
        <span className="text-primary font-label-bold uppercase tracking-widest mb-sm block">Soluciones Especializadas</span>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-md uppercase">Nuestros Servicios</h1>
        <p className="font-body-lg text-body-lg text-secondary">
          Ofrecemos mantenimiento preventivo y correctivo de alta precisión para equipos industriales y automotrices, garantizando la operatividad continua de su negocio.
        </p>
      </header>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xxl">
        {services.map((svc, idx) => (
          <div key={idx} className={`${svc.bg} border border-[#E0E0E0] p-lg flex flex-col gap-md transition-all hover:border-[#2D2D2D] hover:border-2 group`}>
            <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">{svc.icon}</span>
            <h3 className="font-headline-md text-headline-md text-[#2D2D2D]">{svc.title}</h3>
            <p className="text-body-md text-secondary">{svc.desc}</p>
          </div>
        ))}
      </section>

      {/* Gallery Section: Evidencias de Trabajo */}
      <section className="py-xxl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-xs uppercase text-[#2D2D2D]">Evidencias de Trabajo</h2>
            <p className="text-secondary font-body-md">Resultados reales de nuestra intervención técnica en campo.</p>
          </div>
          <Link href="/contact" className="border-2 border-[#2D2D2D] text-[#2D2D2D] px-md py-sm font-label-bold uppercase hover:bg-[#2D2D2D] hover:text-white transition-colors">
            Solicitar Asesoría
          </Link>
        </div>

        {/* Asymmetric Bento Grid for Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-md h-auto md:h-[600px] lg:h-[800px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden border-2 border-[#2D2D2D] h-64 md:h-auto">
            <Image 
              src={img7} 
              alt="Mantenimiento de Rampa Vehicular" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              placeholder="blur"
            />
            <div className="absolute bottom-0 left-0 right-0 p-lg bg-on-surface/90 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="font-label-bold uppercase tracking-wider">Mantenimiento de Rampa Vehicular</p>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden border-2 border-[#2D2D2D] h-64 md:h-full">
            <Image 
              src={img8} 
              alt="Servicio de Bombas Hidráulicas" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              placeholder="blur"
            />
            <div className="absolute bottom-0 left-0 right-0 p-lg bg-on-surface/90 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="font-label-bold uppercase tracking-wider">Servicio de Bombas Hidráulicas</p>
            </div>
          </div>
          <div className="relative group overflow-hidden border-2 border-[#2D2D2D] h-64 md:h-full">
            <Image 
              src={img9} 
              alt="Montaje de Estructuras" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              placeholder="blur"
            />
            <div className="absolute bottom-0 left-0 right-0 p-lg bg-on-surface/90 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="font-label-bold uppercase tracking-wider">Montaje de Estructuras</p>
            </div>
          </div>
          <div className="relative group overflow-hidden border-2 border-[#2D2D2D] h-64 md:h-full">
            <Image 
              src={img10} 
              alt="Instalación de Compresoras" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              placeholder="blur"
            />
            <div className="absolute bottom-0 left-0 right-0 p-lg bg-on-surface/90 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="font-label-bold uppercase tracking-wider">Instalación de Compresoras</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-xxl bg-[#2D2D2D] p-xl md:p-xxl text-white flex flex-col md:flex-row items-center justify-between gap-xl">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="font-display-lg text-display-lg mb-md leading-tight">¿Necesita asistencia técnica inmediata?</h2>
          <p className="font-body-lg text-body-lg text-gray-300">Nuestros ingenieros están listos para diagnosticar y reparar sus equipos con la máxima precisión.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-md w-full md:w-auto">
          <Link href="tel:+525512345678" className="bg-primary text-center text-white px-xl py-md font-label-bold uppercase hover:bg-red-700 transition-colors">
            Hablar con un técnico
          </Link>
          <Link href="/contact" className="border-2 text-center border-white text-white px-xl py-md font-label-bold uppercase hover:bg-white hover:text-[#2D2D2D] transition-colors">
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </div>
  );
}
