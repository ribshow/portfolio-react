//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./routes.tsx";
//import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Navbar } from "./pages/Main/components/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Navbar />
    <AppRoutes />
  </HashRouter>
);
