// src/routes/LandingRoutes.tsx
import type { RouteObject } from "react-router-dom";
import Landing from "../pages/Landing";

export const LandingRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
  },
];
