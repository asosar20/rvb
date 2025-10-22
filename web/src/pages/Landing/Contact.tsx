import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2 } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "../../lib/supabaseClient";
import SubTitle from "../../components/SubTitle";
import { motion } from "framer-motion";

// Esquema Zod
const contactSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  telefono: z
    .string()
    .regex(
      /^(?:\+51\s?)?9\d{8}$/,
      "Debe ser válido (ej: +51 9XXXXXXXX o 9XXXXXXXX)"
    ),
  dni: z.string().regex(/^\d{8}$/, "Debe tener 8 dígitos"),
  correo: z
    .string()
    .email("El correo debe ser válido")
    .optional()
    .or(z.literal("")),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    const { error } = await supabase.from("contactos").insert([data]);
    if (error) {
      toast.error("Hubo un problema al enviar el formulario");
    } else {
      toast.success("Formulario enviado correctamente");
      reset();
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="px-8 lg:pt-8 pt-2 lg:pb-12 pb-12 lg:px-20 bg-[#ffffff]"
    >
      {/* Título */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SubTitle>¡Quiero conocer más de Arena Blanca – Chiclayo!</SubTitle>
        <p className="text-[#364153] font-button">
          Déjanos tus datos y un asesor se contactará contigo lo antes posible.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8">
        {/* Formulario */}
        <motion.div
          className="lg:w-1/2 bg-[#F3F9F5] p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 text-left"
          >
            <div>
              <label className="text-sm text-[#364153] font-semibold">
                NOMBRES Y APELLIDOS <span className="text-[#fb2c36]">*</span>
              </label>
              <input
                {...register("nombre")}
                className="w-full mt-1 p-3 border border-[#d1d5db] rounded-lg text-[#101828] focus:ring-2 focus:ring-[#0F70B7] outline-none"
                placeholder="Ej. Juan Pérez"
              />
              {errors.nombre && (
                <p className="text-[#fb2c36] text-xs mt-1">
                  {errors.nombre.message}
                </p>
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm text-[#364153] font-semibold">
                  TELÉFONO <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="tel"
                  {...register("telefono")}
                  className="w-full mt-1 p-3 border border-[#d1d5db] rounded-lg text-[#101828] focus:ring-2 focus:ring-[#0F70B7] outline-none"
                  placeholder="9XXXXXXXX"
                />
                {errors.telefono && (
                  <p className="text-[#fb2c36] text-xs mt-1">
                    {errors.telefono.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="text-sm text-[#364153] font-semibold">
                  DNI <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="tel"
                  {...register("dni")}
                  className="w-full mt-1 p-3 border border-[#d1d5db] rounded-lg text-[#101828] focus:ring-2 focus:ring-[#0F70B7] outline-none"
                  placeholder="8 dígitos"
                />
                {errors.dni && (
                  <p className="text-[#fb2c36] text-xs mt-1">
                    {errors.dni.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm text-[#364153] font-semibold">
                EMAIL (opcional)
              </label>
              <input
                {...register("correo")}
                className="w-full mt-1 p-3 border border-[#d1d5db] rounded-lg text-[#101828] focus:ring-2 focus:ring-[#0F70B7] outline-none"
                placeholder="ejemplo@correo.com"
              />
              {errors.correo && (
                <p className="text-[#fb2c36] text-xs mt-1">
                  {errors.correo.message}
                </p>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <motion.button
                type="submit"
                disabled={loading}
                className="inline-flex bg-[#0F70B7] text-[#ffffff] px-10 py-4 rounded-lg font-medium font-button transition-transform duration-300 hover:scale-105 disabled:opacity-60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Enviando..." : "Solicitar información"}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Información lateral */}
        <motion.div
          className="flex flex-col items-center justify-center lg:items-start px-8 gap-6 lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="flex items-center text-lg lg:text-2xl font-bold text-[#101828] gap-2 pb-6">
            <Building2 className="w-10 h-10 text-[#0F70B7]" />
            Nuestro Proyecto Estrella: Arena Blanca
          </h3>
          <p className="text-[#364153] text-sm lg:text-base leading-relaxed text-start">
            Arena Blanca es nuestro proyecto más ambicioso y con mayor
            proyección. Ubicado a solo minutos de Pimentel, combina{" "}
            <span className="font-semibold">
              naturaleza, recreación y plusvalía
            </span>{" "}
            en un solo lugar.
          </p>
          <p className="text-[#364153] text-sm lg:text-base leading-relaxed text-start">
            Disfruta de{" "}
            <span className="font-semibold">
              parques, áreas deportivas y espacios para toda la familia
            </span>
            , diseñados para brindar confort y calidad de vida. Su planificación
            moderna lo convierte en una{" "}
            <span className="font-semibold">excelente inversión</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
