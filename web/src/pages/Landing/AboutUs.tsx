import { MapPinHouse, Building2, Phone, Map } from "lucide-react";
import SubTitle from "../../components/SubTitle";
import Button from "../../components/Button";
const aboutUsData = {
  titulo: "Tu futuro hogar te espera aquí",
  horarioTexto: "Oficina de ventas de lunes a domingo.",
  horario: {
    etiqueta: "Horario:",
    valor: "9:00 a.m. a 6:00 p.m.",
  },
  telefono: {
    numero: "074 - 688437",
    enlace: "tel:074688437",
  },
  tarjetas: [
    {
      id: "oficina",
      icono: "Building2",
      titulo: "OFICINA DE VENTAS",
      direccion: "7 de Enero #740 - Chiclayo.",
      enlace: "https://maps.app.goo.gl/eocGce1gG5XQ8xFD6",
      textoBoton: "Como llegar",
    },
    {
      id: "proyecto",
      icono: "Map",
      titulo: "PROYECTO",
      direccion: "Alt. km 1.5 carretera a Pimentel",
      enlace: "https://maps.app.goo.gl/1p71eTcxMK816hCj9",
      textoBoton: "Como llegar",
    },
  ],
  mapa: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3952614225814!2d-79.93674892543781!3d-6.8431275931550575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cfb4cb62d47a3%3A0x76d0608bbc883728!2sRESIDENCIAL%20ARENA%20BLANCA!5e0!3m2!1ses-419!2spe!4v1759763626856!5m2!1ses-419!2spe",
    titulo: "Mapa de ubicación del proyecto",
  },
};

export default function AboutUs() {
    const { titulo, horarioTexto, horario, telefono, tarjetas, mapa } = aboutUsData;

    return (
        <section id="aboutUs" className="bg-[#F4FAF7] lg:pt-12 pt-2 lg:pb-12 pb-12 text-center">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* ENCABEZADO */}
                <div className="text-center lg:text-left px-8 lg:px-0 flex flex-col justify-center">
                    
                    <SubTitle>{titulo}</SubTitle>

                    <p className="text-[#364153] mb-1">{horarioTexto}</p>
                    <p className="text-[#101828] font-semibold mb-4">
                        <span className="font-bold">{horario.etiqueta}</span> {horario.valor}
                    </p>
                    <Button variant="primary" href={telefono.numero}  className="flex items-center font-numbers justify-center gap-2">
                        <Phone size={18} />
                        Llamar al: {telefono.numero}
                    </Button>
                </div>

                {/* TARJETAS */}
                <div className="grid lg:grid-cols-2 gap-6 px-8 lg:mt-16">
                    {tarjetas.map((tarjeta) => (
                        <div
                            key={tarjeta.id}
                            className="bg-[#ffffff] p-6 rounded-xl shadow-md flex flex-col items-center justify-between text-center"
                        >
                            {tarjeta.icono === "Building2" && (
                                <Building2 className="h-10 w-10 mb-3 text-[#1e2939]" />
                            )}
                            {tarjeta.icono === "Map" && (
                                <Map className="h-10 w-10 mb-3 text-[#1e2939]" />
                            )}
                            <h3 className="font-bold text-lg mb-1">{tarjeta.titulo}</h3>
                            <p className="text-[#4a5565] mb-4">{tarjeta.direccion}</p>
                            <a
                                href={tarjeta.enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#0F70B7] text-[#0F70B7] hover:bg-[#0F70B7] hover:text-[#ffffff] px-4 py-2 rounded-md transition flex items-center gap-2 font-button"
                            >
                                <MapPinHouse className="w-5 h-5" />
                                {tarjeta.textoBoton}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* MAPA */}
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg pt-10">
                <iframe
                    src={mapa.src}
                    title={mapa.titulo}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}