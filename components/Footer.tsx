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
          <div className="flex items-center gap-md mt-sm">
            <a
              href="https://facebook.com/PinedaHydraulic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-on-surface-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-200"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://reparacion-mantenimiento.mercadolibre.com.mx/MLM-2945738451-servicio-tecnico-industrial-pineda-_JM"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-on-surface-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-200"
              title="Mercado Libre"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
            </a>
          </div>
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
            <a
              href="https://facebook.com/PinedaHydraulic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://reparacion-mantenimiento.mercadolibre.com.mx/MLM-2945738451-servicio-tecnico-industrial-pineda-_JM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              title="Mercado Libre"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
