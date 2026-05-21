import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/pineda-evidencia-trabajo-altura.jpeg";
import img2 from "@/public/images/pineda-mantenimiento-andamios.jpeg";
import img3 from "@/public/images/pineda-mantenimiento-rampa-vacia.jpeg";
import img4 from "@/public/images/pineda-rampa-hidraulica-camion.jpeg";

export const metadata = {
  title: "Quiénes Somos | Pineda Hydraulic",
  description: "Conoce a Pineda Hydraulic, líderes en ingeniería hidráulica de alto rendimiento.",
};

export default function About() {
  return (
    <div className="max-w-[1280px] mx-auto px-lg py-xxl space-y-xxl mt-12">
      {/* Hero / Mission Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
        <div className="lg:col-span-7 space-y-md">
          <span className="text-primary font-label-bold uppercase tracking-widest block">Nuestra Trayectoria</span>
          <h1 className="font-display-lg text-display-lg text-on-surface uppercase leading-tight">
            Ingeniería Hidráulica de <span className="text-primary">Alto Rendimiento</span>
          </h1>
          <p className="text-body-lg font-body-lg text-secondary max-w-2xl">
            Pineda Hydraulic es líder en servicio técnico industrial en la Ciudad de México. Nos especializamos en el mantenimiento preventivo y correctivo de sistemas hidráulicos y neumáticos, ofreciendo soluciones precisas que garantizan la operatividad de su maquinaria.
          </p>
          <div className="pt-md flex flex-wrap gap-md">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <span className="font-label-bold">Ingenieros Certificados</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
              <span className="font-label-bold">Garantías por Escrito</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-xl">precision_manufacturing</span>
              <span className="font-label-bold">Precisión Industrial</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="border-2 border-[#2D2D2D] bg-white p-sm">
            <div className="relative w-full aspect-square">
              <Image 
                src={img1} 
                alt="Industrial Hydraulic System" 
                fill 
                className="object-cover"
                priority
                placeholder="blur"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary text-white p-lg border-none shadow-lg">
            <p className="font-display-lg text-display-lg leading-none">50+</p>
            <p className="font-label-bold uppercase text-xs tracking-wider">Años de Experiencia</p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="space-y-xl pt-12">
        <div className="text-center space-y-xs">
          <h2 className="font-headline-lg text-headline-lg uppercase">Liderazgo con Experiencia</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Director General */}
          <div className="border border-[#E0E0E0] bg-[#F5F5F5] flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/3 bg-on-secondary-fixed relative min-h-[250px]">
              <Image 
                src={img2} 
                alt="Ing. Salvador Pineda" 
                fill 
                className="object-cover grayscale"
                placeholder="blur"
              />
            </div>
            <div className="md:w-2/3 p-lg flex flex-col justify-center space-y-sm">
              <h3 className="font-headline-md text-headline-md uppercase">Ing. Salvador Pineda</h3>
              <p className="text-primary font-label-bold tracking-widest">DIRECTOR GENERAL</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Con más de 50 años de trayectoria en la industria, el Ing. Pineda ha liderado el desarrollo de soluciones hidráulicas críticas para el sector manufacturero y de construcción en México.</p>
            </div>
          </div>
          {/* Gerente General */}
          <div className="border border-[#E0E0E0] bg-[#F5F5F5] flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/3 bg-on-secondary-fixed relative min-h-[250px]">
              <Image 
                src={img3} 
                alt="Ing. Russell A. Sandoval" 
                fill 
                className="object-cover grayscale"
                placeholder="blur"
              />
            </div>
            <div className="md:w-2/3 p-lg flex flex-col justify-center space-y-sm">
              <h3 className="font-headline-md text-headline-md uppercase">Ing. Russell A. Sandoval</h3>
              <p className="text-primary font-label-bold tracking-widest">GERENTE GENERAL</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Especialista en modernización de sistemas y gestión de proyectos industriales, asegurando que cada servicio cumpla con los más altos estándares internacionales de calidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="md:col-span-2 border-2 border-[#2D2D2D] bg-white p-xl flex flex-col justify-between">
          <div>
            <h3 className="font-headline-lg text-headline-lg uppercase mb-md">Nuestra Propuesta de Valor</h3>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-xl max-w-2xl">No solo reparamos maquinaria; optimizamos su rendimiento. Nuestro enfoque se basa en la durabilidad y la confiabilidad operativa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg mt-8">
            <div className="space-y-sm">
              <div className="flex items-center gap-sm">
                <div className="bg-primary p-xs text-white flex items-center justify-center">
                  <span className="material-symbols-outlined">settings_suggest</span>
                </div>
                <h4 className="font-label-bold uppercase text-[#2D2D2D]">Mantenimiento Preventivo</h4>
              </div>
              <p className="text-sm text-on-surface-variant">Programas diseñados para evitar paros costosos y extender la vida útil de sus componentes.</p>
            </div>
            <div className="space-y-sm">
              <div className="flex items-center gap-sm">
                <div className="bg-primary p-xs text-white flex items-center justify-center">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <h4 className="font-label-bold uppercase text-[#2D2D2D]">Certificación Técnica</h4>
              </div>
              <p className="text-sm text-on-surface-variant">Cada intervención es ejecutada por ingenieros certificados con amplia formación técnica.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#2D2D2D] text-white p-xl flex flex-col justify-center space-y-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-md opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[80px]">shield</span>
          </div>
          <h3 className="font-headline-md text-headline-md uppercase z-10">Compromiso de Garantía</h3>
          <p className="font-body-md text-[#E0E0E0] z-10">Todas nuestras reparaciones y mantenimientos incluyen una garantía escrita que respalda la calidad de la mano de obra y los componentes utilizados.</p>
          <Link href="/contact" className="inline-flex items-center gap-sm text-primary font-label-bold uppercase z-10 hover:underline">
            Solicitar Información
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Location Context */}
      <section className="border border-[#E0E0E0] bg-[#F5F5F5] p-lg flex flex-col md:flex-row items-center justify-between gap-xl">
        <div className="space-y-xs max-w-[28rem] text-center md:text-left">
          <h3 className="font-headline-md text-headline-md uppercase">Ubicación Estratégica</h3>
          <p className="text-on-surface-variant">Operamos desde el corazón industrial de la Ciudad de México para brindar atención rápida y eficiente a nuestros clientes corporativos y privados.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-md">
          <div className="text-center md:text-right">
            <p className="font-label-bold text-lg">Norte 94 8408</p>
            <p className="text-sm text-on-surface-variant">Col. La Esmeralda, C.P. 07540</p>
            <p className="text-sm text-on-surface-variant">Gustavo A. Madero, D.F.</p>
          </div>
          <div className="h-24 w-40 relative border-2 border-primary overflow-hidden">
            <Image 
              src={img4} 
              alt="Map Location" 
              fill 
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
