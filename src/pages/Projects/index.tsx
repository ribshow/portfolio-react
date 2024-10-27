import "./style.css";
import { Apigit } from "./apps/api-github";
import { Generate } from "./apps/generate";
import { Sisedu } from "./apps/sis-edu";

export const ProjectsPage = () => {
  return (
    <div className="projects">
      <Apigit />
      <Generate />
      <Sisedu />
    </div>
  );
};

export default ProjectsPage;
