import { BrowserRouter, useRoutes } from "react-router-dom";
import { LandingRoutes } from "./routes/LandingRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
function AppRoutes() {
  return useRoutes([
    ...LandingRoutes,
    ...AdminRoutes,
  ]);
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
