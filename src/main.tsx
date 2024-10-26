//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.tsx";
import { AppRoutes } from "./routes.tsx";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./pages/Main/navbar.tsx";
import { Footer } from "./pages/Main/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
    <AppRoutes />
    <Footer />
  </BrowserRouter>
);