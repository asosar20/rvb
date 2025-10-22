// src/components/Button.tsx
import type { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  target?: "_blank" | "_self";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-4 font-bold shadow-xl rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer";

  const variants = {
    primary: "bg-[#0F70B7] text-[#f3f4f6]",
    secondary: "bg-[#F6B800] text-[#f3f4f6]",
    outline:
      "border border-[#0F70B7] text-[#0F70B7] hover:bg-[#0F70B7] hover:text-[#ffffff]",
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={finalClassName}
        target={target || (isExternal ? "_blank" : "_self")}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
}
