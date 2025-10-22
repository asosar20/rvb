// src/pages/Admin/Dashboard.tsx
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Bienvenido al Dashboard</h1>
      <Button onClick={handleLogout} disabled={loading}>
        {loading ? (
          <>
            <Spinner />
            <span className="ml-2">Saliendo...</span>
          </>
        ) : (
          "Cerrar sesión"
        )}
      </Button>
    </div>
  );
}
