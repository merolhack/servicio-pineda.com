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
