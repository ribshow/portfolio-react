import { Routes, Route } from "react-router-dom";

import FormPage from "./pages/FormPage/page";
import IndexPage from "./pages/Main/index";
import ProjectsPage from "./pages/Projects";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/form" element={<FormPage />} />
      <Route path="/" element={<IndexPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};
