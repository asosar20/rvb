// src/routes/AdminRoutes.tsx
import type { RouteObject } from "react-router-dom";
import Admin from "../pages/Admin";

export const AdminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <Admin />,
  },
];
