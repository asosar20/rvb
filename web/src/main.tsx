// main.tsx
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import App from "./App.tsx";

function Root() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
