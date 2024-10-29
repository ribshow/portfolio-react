import { Aside } from "./aside";
//import { Asidejs } from "./components/js-accordion/section";
import { Title } from "./components/title";
import "./style.css";

import { useState, lazy, Suspense } from "react";

const loadComponent = (tutorialName: string) => {
  switch (tutorialName) {
    case "Instalando sass":
      return lazy(() => import("./components/css-accordion/install-sass"));
    case "Footer responsivo":
      return lazy(() => import("./components/css-accordion/footer-responsive"));
    case "Conversão de fuso horário":
      return lazy(
        () => import("./components/js-accordion/timezone-conversion")
      );
    default:
      return null;
  }
};

export const TutorialsPage = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<string | null>(null);

  const handleShowTutorial = (tutorialName: string) => {
    setSelectedTutorial(tutorialName);
  };

  const TutorialLazy = selectedTutorial
    ? loadComponent(selectedTutorial)
    : null;
  return (
    <div className="overflow-auto flex container-principal">
      <div className="container-tutorials flex flex-col justify-center">
        <Aside onShowTutorial={handleShowTutorial} />
        {TutorialLazy && (
          <Suspense fallback={<div>Loading...</div>}>
            <Title>
              <TutorialLazy />
            </Title>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default TutorialsPage;
