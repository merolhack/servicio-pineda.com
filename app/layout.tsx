import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

import { GoogleAnalytics } from "@next/third-parties/google";



const fontDisplay = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const fontBody = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pineda Hydraulic | Innovación Industrial",
  description: "Servicio y precisión industrial en sistemas hidráulicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontDisplay.variable} ${fontBody.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@100..700,0..1,-50..200,20..48&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" />
        <GoogleAnalytics gaId="G-ZY9QXQXW49" />
      </body>
    </html>
  );
}
