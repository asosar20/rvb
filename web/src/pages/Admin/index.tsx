//src/pages/Admin/index.tsx
import AdminLayout from "../../layouts/AdminLayout";
import Login from "./auth/Login";

export default function AdminPage() {
  return (
    <AdminLayout>
      <Login />
    </AdminLayout>
  );
}
