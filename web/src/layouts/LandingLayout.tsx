import type { ReactNode } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Toaster } from "react-hot-toast";
interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "rounded-xl shadow-lg",
          style: {
            background: "#0F70B7",
            color: "#fff",
          },
          success: { duration: 4000 },
          error: { duration: 4000 },
        }}
      />
      <Footer />
    </div>
  );
}
