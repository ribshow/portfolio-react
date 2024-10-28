import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Main/index";
import FormPage from "./pages/FormPage";
import ProjectsPage from "./pages/Projects";
import GithubPage from "./pages/Github";
//import TutorialsPage from "./pages/Tutorials";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/github" element={<GithubPage />} />
    </Routes>
  );
};
