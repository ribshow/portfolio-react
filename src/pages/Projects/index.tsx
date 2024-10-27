import "./style.css";
import { Apigit } from "./apps/api-github";
import { Generate } from "./apps/generate";
import { Sisedu } from "./apps/sis-edu";
import { Pi } from "./apps/pi";
import { Footer } from "./footer";

export const ProjectsPage = () => {
  return (
    <div className="projects">
      <Apigit />
      <Generate />
      <Sisedu />
      <Pi />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
