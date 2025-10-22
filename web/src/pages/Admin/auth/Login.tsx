// src/pages/Admin/auth/Login.tsx
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Si ya hay sesión, redirige al dashboard
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) navigate("/admin/dashboard");
    };
    checkSession();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/admin/dashboard");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-80"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h1>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Spinner />
              <span className="ml-2">Entrando...</span>
            </>
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
    </div>
  );
}
