// src/routes/AdminRoutes.tsx
import type { RouteObject } from "react-router-dom";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Admin/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export const AdminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];
