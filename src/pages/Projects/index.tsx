import "./style.css";
import { Apigit } from "./components/api-github";
import { Generate } from "./components/generate";
import { Sass } from "./components/sass";
import { Sisedu } from "./components/sis-edu";
import { Pi } from "./components/pi";
import { Footer } from "./components/footer";

export const ProjectsPage = () => {
  return (
    <>
      <div className="projects welcome">
        <Apigit />
        <Sass />
        <Generate />
        <Sisedu />
        <Pi />
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
