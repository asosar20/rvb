import AdminLayout from "../../layouts/AdminLayout";
import Hero from "../Landing/Hero";

export default function AdminPage() {
return (
    <AdminLayout>
      <section id="hero">
        <Hero />
      </section>
        <h1>Admin</h1>
      {/* Aquí irán las demás secciones */}
    </AdminLayout>
  );
}