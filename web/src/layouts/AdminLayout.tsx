// src/layouts/AdminLayout.tsx
import type { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      {/* Footer irá aquí más adelante */}
    </div>
  );
}
