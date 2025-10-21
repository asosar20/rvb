// src/components/Title.tsx
import type { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SubTitle({
  children,
  className = "",
}: SubTitleProps) {
  const baseStyles =
    "text-4xl md:text-5xl font-bold text-[#364153] pt-16 pb-6";

  return <h2 className={`${baseStyles} ${className}`}>{children}</h2>;
}
