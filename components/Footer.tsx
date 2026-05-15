"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t-2 border-on-secondary-fixed mt-xxl">
      <div className="flex flex-col md:flex-row justify-between items-start gap-lg w-full px-lg py-xl max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-md max-w-[24rem]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Pineda Hydraulic Logo"
              width={160}
              height={40}
              className="h-10 w-auto self-start"
            />
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Servicio técnico industrial de alta precisión para el sector hidráulico nacional e internacional.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xl">
          <div className="flex flex-col gap-sm">
            <h5 className="font-label-bold text-label-bold text-charcoal uppercase mb-xs text-primary">
              Navegación
            </h5>
            <Link href="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/services" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
              Servicios
            </Link>
          </div>
          <div className="flex flex-col gap-sm">
            <h5 className="font-label-bold text-label-bold text-charcoal uppercase mb-xs text-primary">
              Contacto
            </h5>
            <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Mariano Salas No. 78-A, CDMX
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                55 5136 1728
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                55 1446 7730
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                56 7117 3897
              </span>
            </div>
            <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span>
              russell@servicio-pineda.com
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-md max-w-[20rem] w-full">
          <h5 className="font-label-bold text-label-bold text-charcoal uppercase mb-xs text-primary">
            Boletín Técnico
          </h5>
          <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              className="border-2 border-on-surface border-r-0 px-md py-sm bg-white focus:outline-none focus:border-primary w-full"
              placeholder="Email"
              type="email"
              required
            />
            <button
              className="bg-on-surface text-white px-md py-sm font-label-bold text-label-bold uppercase hover:bg-primary transition-colors"
              type="submit"
            >
              Unirse
            </button>
          </form>
        </div>
      </div>
      <div className="w-full px-lg py-md border-t border-on-secondary-fixed/10 max-w-[1280px] mx-auto">
        <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left flex justify-between items-center">
          <span>© {new Date().getFullYear()} Pineda Hydraulic. Todos los derechos reservados.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">share</span></a>
          </span>
        </p>
      </div>
    </footer>
  );
}
