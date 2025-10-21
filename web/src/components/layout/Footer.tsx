import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Button from "../Button";

// Variables de contenido
const companyName = "Constructora";
const companyDescription =
  "Construimos hogares cerca del mar, combinando calidad, confort y confianza para toda tu familia.";
  
const socialLinks = [
  { icon: Facebook, href: "#", hoverClass: "hover:bg-[#4f39f6]" },
  { icon: Instagram, href: "#", hoverClass: "hover:bg-[#f6339a]" },
];

const contactInfo = [
  { Icon: MapPin, label: "Dirección", value: "7 de Enero #740, Chiclayo" },
  { Icon: Phone, label: "Teléfono", value: "+51 123 456 789" },
  { Icon: Mail, label: "Correo", value: "info@constructora.com" },
];

const legalText =
  "© 2025 RVB Constructora. Todos los derechos reservados. Diseñado con ❤️ por tu equipo digital";

const Footer = () => {
  return (
    <footer className="px-8 pt-20 text-center bg-[#101828] rounded-tl-2xl rounded-tr-2xl">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Logo + descripción */}
        <div className="flex flex-col gap-4">
          <a
            href="#hero"
            className="flex items-center justify-center gap-2 mb-6"
          >
            <img src="/img/logo.png" alt="Logo empresa" className="h-10" />
            <span className="font-bold text-2xl text-[#f3f4f6]">
              {companyName}
            </span>
          </a>
          <p className="text-[#99a1af] text-sm text-center">
            {companyDescription}
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col gap-4 items-center">
            <h4 className="font-semibold text-[#f3f4f6] text-lg text-center">Síguenos</h4>
            <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, hoverClass }, i) => (
                    <a
                    key={i}
                    href={href}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#1e2939] transition transform hover:scale-105 ${hoverClass}`}
                    >
                    <Icon className="w-5 h-5 text-[#f3f4f6]" />
                    </a>
                ))}
            </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center justify-center md:items-start gap-2 text-[#f3f4f6] text-xs">
          <h4 className="font-semibold text-lg">Contáctanos</h4>
          {contactInfo.map(({ Icon, label, value }, i) => (
            <span key={i} className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4" /> {label}: {value}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col text-center gap-4">
          <h4 className="font-semibold text-[#f3f4f6] text-lg">
            Agenda tu visita
          </h4>
          <Button href="#contacto">Contáctanos</Button>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="mt-12 border-t border-[#364153] p-6 text-center text-[#6a7282] text-sm">
        {legalText}
      </div>
    </footer>
  );
};

export default Footer;
