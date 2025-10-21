import type { ReactNode } from "react";
import Header from "../components/layout/Header";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {/* Footer irá aquí más adelante */}
    </div>
  );
}
