import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  onShowTutorial: (tutorialName: string) => void;
}

export const SectionJS: React.FC<SectionProps> = ({ onShowTutorial }) => {
  interface Data {
    title: string;
    content: string;
  }

  const [datajs] = useState<Data>({
    title: "JavaScript",
    content: "Conversão de fuso horário",
  });

  const [installJest] = useState<Data>({
    title: "JavaScript",
    content: "Instalando Jest",
  });

  const [configureHttps] = useState<Data>({
    title: "JavaScript",
    content: "Configurando https para api Node.js",
  });

  return (
    <Accordion.Item className="accordion-item w-full p-2" value="item-2">
      <Accordion.Trigger className="accordion-trigger justify-between">
        <div className="flex w-full text-blue-400 justify-between">
          {datajs.title} <FaChevronCircleDown className="m-1 text-blue-400" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="accordion-content block w-full text-left p-2">
        <Link
          to={"/tutorials"}
          className="text-white block w-full text-left hover:text-blue-300 btn-content"
          onClick={() => onShowTutorial(datajs.content)}
        >
          {datajs.content}
        </Link>
      </Accordion.Content>
      <Accordion.Content className="accordion-content block w-full text-left p-2">
        <Link
          to={"/tutorials"}
          className="text-white block w-full text-left hover:text-blue-300 btn-content"
          onClick={() => onShowTutorial(installJest.content)}
        >
          {installJest.content}
        </Link>
      </Accordion.Content>
      <Accordion.Content className="accordion-content block w-full text-left p-2">
        <Link
          to={"/tutorials"}
          className="text-white block w-full text-left hover:text-blue-300 btn-content"
          onClick={() => onShowTutorial(configureHttps.content)}
        >
          {configureHttps.content}
        </Link>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default SectionJS;
