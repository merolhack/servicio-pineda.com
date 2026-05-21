"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Quiénes Somos", path: "/about" },
    { name: "Servicios", path: "/services" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b-2 border-on-secondary-fixed">
      <nav className="flex justify-between items-center w-full px-lg py-md max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center gap-sm group">
          <Image
            src="/images/logo.png"
            alt="Pineda Hydraulic Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="font-headline-md text-headline-md font-extrabold uppercase text-primary tracking-tighter hidden md:block">
            Pineda Hydraulic
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-label-bold text-label-bold transition-colors duration-200 ${
                pathname === link.path
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-md">
          <a
            href="https://facebook.com/PinedaHydraulic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface hover:text-primary transition-colors duration-200 hidden sm:inline-flex items-center"
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
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a
            href="https://reparacion-mantenimiento.mercadolibre.com.mx/MLM-2945738451-servicio-tecnico-industrial-pineda-_JM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface hover:text-primary transition-colors duration-200 hidden sm:inline-flex items-center"
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
              className="lucide lucide-handshake"
            >
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
              <path d="m21 3 1 11h-2" />
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
              <path d="M3 4h8" />
            </svg>
          </a>
          <Link href="/contact" className="hidden sm:inline-flex bg-primary-container text-white px-lg py-sm font-label-bold text-label-bold uppercase active:scale-95 transition-transform hover:bg-primary">
            Solicitar Presupuesto
          </Link>
          <button className="md:hidden text-on-surface">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
