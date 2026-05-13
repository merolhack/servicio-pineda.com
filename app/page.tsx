import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/images/pineda-sistema-elevacion-industrial.jpeg";
import featureImg from "@/public/images/pineda-compresora-industrial-itsa.jpeg";

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Hydraulic pistons and machinery"
            fill
            className="object-cover grayscale-[20%]"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/70 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-lg">
          <div className="max-w-2xl space-y-md">
            <div className="inline-block border-2 border-charcoal px-sm py-xs bg-surface mb-sm">
              <span className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest uppercase">Líderes en Hidráulica</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-[#2D2D2D] uppercase leading-tight">
              Innovación que <span className="text-primary-container">transforma</span> el mercado industrial
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[32rem]">
              Soluciones de ingeniería de alta precisión para sistemas hidráulicos complejos. Durabilidad, potencia y exactitud en cada componente.
            </p>
            <div className="flex gap-md pt-md">
              <Link href="/contact" className="bg-primary-container text-white px-xl py-md font-label-bold text-label-bold uppercase active:scale-95 transition-all inline-block hover:bg-primary">
                Solicitar Presupuesto
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-[#2D2D2D] text-[#2D2D2D] px-xl py-md font-label-bold text-label-bold uppercase hover:bg-[#2D2D2D] hover:text-white active:scale-95 transition-all inline-block">
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-xl right-lg hidden md:flex gap-sm items-center">
          <div className="w-12 h-1 bg-primary-container"></div>
          <div className="w-12 h-1 bg-secondary-fixed"></div>
          <div className="w-12 h-1 bg-secondary-fixed"></div>
        </div>
      </section>

      <section className="bg-white border-y-2 border-on-secondary-fixed relative z-20 -mt-12 mx-lg max-w-[1200px] md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-on-secondary-fixed">
          <div className="p-xl flex flex-col items-center text-center group hover:bg-surface transition-colors">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-sm">history</span>
            <h3 className="font-headline-lg text-headline-lg text-[#2D2D2D]">50+</h3>
            <p className="font-label-bold text-label-bold uppercase text-on-surface-variant tracking-wider">Años de experiencia</p>
          </div>
          <div className="p-xl flex flex-col items-center text-center group hover:bg-surface transition-colors">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-sm">verified</span>
            <h3 className="font-headline-lg text-headline-lg text-[#2D2D2D]">100%</h3>
            <p className="font-label-bold text-label-bold uppercase text-on-surface-variant tracking-wider">Satisfacción Garantizada</p>
          </div>
          <div className="p-xl flex flex-col items-center text-center group hover:bg-surface transition-colors">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-sm">precision_manufacturing</span>
            <h3 className="font-headline-lg text-headline-lg text-[#2D2D2D]">500+</h3>
            <p className="font-label-bold text-label-bold uppercase text-on-surface-variant tracking-wider">Proyectos Ejecutados</p>
          </div>
        </div>
      </section>

      <section className="py-xxl max-w-[1280px] mx-auto px-lg">
        <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
          <div className="max-w-[36rem]">
            <h2 className="font-headline-lg text-headline-lg text-[#2D2D2D] uppercase mb-sm">Servicios Especializados</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Ofrecemos un catálogo integral de servicios técnicos diseñados para maximizar la vida útil de su maquinaria pesada.</p>
          </div>
          <Link href="/services" className="font-label-bold text-label-bold text-[#2D2D2D] underline uppercase hover:text-primary transition-colors">
            Ver todos los servicios
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="border-2 border-on-secondary-fixed p-lg hover:border-primary transition-all group bg-white">
            <div className="bg-surface-container w-16 h-16 flex items-center justify-center mb-md border border-on-secondary-fixed group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">settings_suggest</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-sm text-[#2D2D2D]">Reparación</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">Diagnóstico y reparación de bombas, válvulas y motores hidráulicos de alta presión.</p>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </div>
          <div className="border-2 border-on-secondary-fixed p-lg hover:border-primary transition-all group bg-white">
            <div className="bg-surface-container w-16 h-16 flex items-center justify-center mb-md border border-on-secondary-fixed group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">construction</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-sm text-[#2D2D2D]">Mantenimiento</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">Planes preventivos diseñados para evitar paros costosos en su línea de producción.</p>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </div>
          <div className="border-2 border-on-secondary-fixed p-lg hover:border-primary transition-all group bg-white">
            <div className="bg-surface-container w-16 h-16 flex items-center justify-center mb-md border border-on-secondary-fixed group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">architecture</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-sm text-[#2D2D2D]">Diseño</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">Ingeniería a medida para nuevos sistemas hidráulicos de alto rendimiento.</p>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </div>
          <div className="border-2 border-on-secondary-fixed p-lg hover:border-primary transition-all group bg-white">
            <div className="bg-surface-container w-16 h-16 flex items-center justify-center mb-md border border-on-secondary-fixed group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">inventory</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-sm text-[#2D2D2D]">Refacciones</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">Stock permanente de componentes certificados y fluidos hidráulicos premium.</p>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </div>
        </div>
      </section>

      <section className="bg-[#2D2D2D] text-white py-xxl">
        <div className="max-w-[1280px] mx-auto px-lg grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
          <div className="relative h-96 lg:h-full min-h-[400px]">
            <Image
              src={featureImg}
              alt="Hydraulic manifold"
              fill
              className="object-cover border-2 border-primary-container"
              placeholder="blur"
            />
            <div className="absolute -bottom-md -left-md bg-primary-container p-lg hidden md:block">
              <p className="font-headline-md text-headline-md">ISO 9001:2015</p>
              <p className="font-label-bold text-label-bold uppercase">Calidad Certificada</p>
            </div>
          </div>
          <div className="space-y-lg py-xl">
            <h2 className="font-display-lg text-display-lg uppercase leading-none border-l-4 border-primary-container pl-lg">Compromiso con la Precisión</h2>
            <p className="font-body-lg text-body-lg text-secondary-fixed">En Pineda Hydraulic, entendemos que cada micra cuenta. Nuestras instalaciones cuentan con tecnología de vanguardia para garantizar que cada componente que sale de nuestro taller cumpla con los estándares más rigurosos de la industria pesada.</p>
            <ul className="space-y-sm">
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary-container">check_circle</span>
                <span className="font-label-bold text-label-bold uppercase">Laboratorio de Pruebas Dinámicas</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary-container">check_circle</span>
                <span className="font-label-bold text-label-bold uppercase">Certificación de Componentes Críticos</span>
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary-container">check_circle</span>
                <span className="font-label-bold text-label-bold uppercase">Trazabilidad Total en Materiales</span>
              </li>
            </ul>
            <Link href="/about" className="bg-primary-container text-white px-xl py-md font-label-bold text-label-bold uppercase hover:bg-white hover:text-[#2D2D2D] transition-all inline-block mt-4">
              Conoce Nuestra Historia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
