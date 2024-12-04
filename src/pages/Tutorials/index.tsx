import { Aside } from "./aside";
//import { Asidejs } from "./components/js-accordion/section";
import { Title } from "./components/title";
//import { FaSearch } from "react-icons/fa";
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
    case "Instalando o Laravel Mix":
      return lazy(() => import("./components/laravel-accordion/laravel-mix"));
    case "Criando aplicação CRUD(MongoDB)":
      return lazy(() => import("./components/csharp-accordion/crud-mongodb"));
    case "Criando um projeto React/typescript":
      return lazy(() => import("./components/react-accordion/install-react"));
    case "Instalando Jest":
      return lazy(() => import("./components/js-accordion/installing-jest"));
    case "Configurando https para api Node.js":
      return lazy(() => import("./components/js-accordion/configure-https"));
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
        <Title>
          <Aside onShowTutorial={handleShowTutorial} />

          {TutorialLazy && (
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <TutorialLazy />
            </Suspense>
          )}
        </Title>
      </div>
    </div>
  );
};

export default TutorialsPage;
