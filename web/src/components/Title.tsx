// src/components/Title.tsx
import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export default function Title({
  children,
  className = "",
}: TitleProps) {
  const baseStyles =
    "text-4xl md:text-5xl font-bold text-[#364153]";

  return <h1 className={`${baseStyles} ${className}`}>{children}</h1>;
}
