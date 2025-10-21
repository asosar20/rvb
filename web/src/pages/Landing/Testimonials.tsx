import { useState, useEffect } from "react";
import SubTitle from "../../components/SubTitle";
const testimonialsData = [
  {
    texto:
      "Gracias a la constructora, mi familia y yo conseguimos nuestra casa ideal cerca del mar. Todo el proceso fue rápido y seguro.",
    nombre: "María Pérez",
    lugar: "Pimentel",
    img: "https://placehold.co/600x400?text=María+Pérez",
  },
  {
    texto:
      "La atención fue excelente y nos ayudaron con todos los trámites del Bono Techo Propio. Recomendados 100%.",
    nombre: "Carlos Gómez",
    lugar: "Lambayeque",
    img: "https://placehold.co/600x400?text=Carlos+Gómez",
  },
  {
    texto:
      "Nos encantó nuestra nueva casa. Todo el equipo fue muy profesional y siempre estuvo pendiente de nosotros.",
    nombre: "Ana Torres",
    lugar: "Chiclayo",
    img: "https://placehold.co/600x400?text=Ana+Torres",
  },
  {
    texto:
      "El acompañamiento en cada paso fue increíble. Nos sentimos seguros en todo momento.",
    nombre: "Luis Fernández",
    lugar: "Monsefú",
    img: "https://placehold.co/600x400?text=Luis+Fernández",
  },
  {
    texto:
      "Muy responsables y atentos, hicieron que todo el proceso fuera sencillo y rápido.",
    nombre: "Rosa Martínez",
    lugar: "Ferreñafe",
    img: "https://placehold.co/600x400?text=Rosa+Martínez",
  },
  {
    texto:
      "La mejor decisión que tomamos fue confiar en ellos para nuestro hogar.",
    nombre: "Pedro Castillo",
    lugar: "Chiclayo",
    img: "https://placehold.co/600x400?text=Pedro+Castillo",
  },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="testimonials" data-aos="fade-up"
            className="px-8 lg:pt-8 pt-2 lg:pb-2 lg:px-20 bg-gradient-to-r from-[#F3F9F5] via-[#ffffff] to-[#EEF3FF]"
        >
            <div className="max-w-5xl mx-auto text-center lg:pb-0">
                
                <SubTitle>Lo que dicen nuestros clientes</SubTitle>

                <div className="relative overflow-hidden w-full h-auto lg:pt-10">
                    <div
                        className="flex transition-transform duration-700"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimonialsData.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center lg:items-stretch text-left gap-6"
                            >
                                {/* Texto */}
                                <div className="flex flex-col justify-center lg:w-1/2 p-4">
                                    <p className="text-lg italic text-[#364153] mb-4">
                                        “{t.texto}”
                                    </p>
                                    <p className="font-semibold text-[#0F70B7] text-lg">
                                        {t.nombre}
                                    </p>
                                    <p className="text-[#6a7282]">{t.lugar}</p>
                                </div>

                                {/* Imagen a la derecha */}
                                <div className="lg:w-1/2 w-full pb-4">
                                    <img
                                        src={t.img}
                                        alt={t.nombre}
                                        className="w-full -ml-3 h-64 lg:h-full object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicadores */}
                    <div className="flex justify-center mt-10 mb-10 space-x-2">
                        {testimonialsData.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full transition-all ${current === i ? "bg-[#0F70B7] w-6" : "bg-[#d1d5dc]"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;