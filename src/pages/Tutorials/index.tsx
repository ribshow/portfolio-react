import { Aside } from "./components/aside";
import "./style.css";
export const TutorialsPage = () => {
  return (
    <div className="container-tutorials h-full flex justify-center">
      <Aside />
      <div className="tutorials-title w-full justify-center">
        <h1>Tutorials</h1>
      </div>
    </div>
  );
};

export default TutorialsPage;
