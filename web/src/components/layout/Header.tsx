import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import Button from "../Button";

const navLinks = [
  { id: "hero", text: "Inicio" },
  { id: "features", text: "Beneficios" },
  { id: "projects", text: "Proyectos" },
  { id: "aboutUs", text: "Ubicación" },
  { id: "testimonials", text: "Testimonios" },
  { id: "contact", text: "Contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const classNav =
    "hover:bg-[#0F70B7] hover:px-4 hover:py-2 hover:rounded-bl-xl hover:rounded-tr-xl hover:text-[#f3f4f6] transition-all duration-300";

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f3f4f6] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="/img/logo.png"
            alt="Logo empresa"
            loading="lazy"
            className="h-10"
          />
          <span className="font-bold text-xl text-[#101828] uppercase">
            Constructora
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:items-center gap-8 text-[#101828]">
          {navLinks.map(({ id, text }) => (
            <a key={id} href={`#${id}`} className={classNav}>
              {text}
            </a>
          ))}

          <Button variant="secondary" href="#contact">
            Cotiza aquí
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={buttonRef}
          className="md:hidden text-[#364153]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          ref={menuRef}
          className="md:hidden bg-[#f3f4f6] border-t border-[#e5e7eb] px-6 py-4 flex flex-col gap-4 text-[#364153]"
        >
          {navLinks.map(({ id, text }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="hover:text-[#432dd7]"
            >
              {text}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
