"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Llamada al Bridge API en PHP (Compatible con Static Export)
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_CONTACT_AUTH_KEY}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message || "Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error submit form:", error);
      toast.error("Ocurrió un error inesperado. Por favor intenta de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="flex flex-col gap-xs">
          <label htmlFor="name" className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest uppercase">
            Nombre Completo
          </label>
          <input
            id="name"
            {...register("name")}
            className={`border rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md ${
              errors.name ? "border-error" : "border-[#2D2D2D]"
            }`}
            placeholder="Ej. Juan Pérez"
          />
          {errors.name && <p className="text-error text-xs font-medium">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-xs">
          <label htmlFor="company" className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest uppercase">
            Empresa
          </label>
          <input
            id="company"
            {...register("company")}
            className="border border-[#2D2D2D] rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md"
            placeholder="Nombre de su organización"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="flex flex-col gap-xs">
          <label htmlFor="email" className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`border rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md ${
              errors.email ? "border-error" : "border-[#2D2D2D]"
            }`}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <p className="text-error text-xs font-medium">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-xs">
          <label htmlFor="phone" className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest uppercase">
            Teléfono
          </label>
          <input
            id="phone"
            {...register("phone")}
            className="border border-[#2D2D2D] rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md"
            placeholder="55 0000 0000"
          />
        </div>
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="subject" className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest uppercase">
          Asunto / Servicio Requerido
        </label>
        <input
          id="subject"
          {...register("subject")}
          className={`border rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md ${
            errors.subject ? "border-error" : "border-[#2D2D2D]"
          }`}
          placeholder="Ej: Mantenimiento Preventivo"
        />
        {errors.subject && <p className="text-error text-xs font-medium">{errors.subject.message}</p>}
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="message" className="font-label-bold text-label-bold text-[#2D2D2D] tracking-widest uppercase">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={`border rounded-none focus:border-[2px] focus:outline-none p-md bg-white font-body-md resize-y ${
            errors.message ? "border-error" : "border-[#2D2D2D]"
          }`}
          placeholder="Describa brevemente su requerimiento técnico..."
        />
        {errors.message && <p className="text-error text-xs font-medium">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E31E24] text-white py-lg font-label-bold uppercase text-lg tracking-widest active:scale-[0.98] transition-all hover:bg-primary disabled:bg-secondary disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando Solicitud...
          </span>
        ) : (
          "Enviar Solicitud Técnica"
        )}
      </button>
    </form>
  );
}
