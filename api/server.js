import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Cliente Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Ruta para mantener Supabase despierto
app.get("/status", async (req, res) => {
  try {
    const { error } = await supabase.from("contactos").select("id").limit(1);
    if (error) throw error;
    res.send("Supabase activo");
  } catch (err) {
    res.status(500).send("Error al conectar con Supabase");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
