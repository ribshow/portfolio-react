import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  onShowTutorial: (tutorialName: string) => void;
}

export const SectionCsharp: React.FC<SectionProps> = ({ onShowTutorial }) => {
  interface Data {
    title: string;
    content: string;
  }

  const [datalaravel] = useState<Data>({
    title: "C#",
    content: "Criando aplicação CRUD(MongoDB)",
  });

  return (
    <Accordion.Item className="accordion-item w-full p-2" value="item-4">
      <Accordion.Trigger className="accordion-trigger justify-between">
        <div className="flex text-blue-400 w-full justify-between">
          {datalaravel.title}{" "}
          <FaChevronCircleDown className="m-1 text-blue-400" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="accordion-content block w-full text-left p-2">
        <Link
          to={"/tutorials"}
          className="text-white block w-full text-left hover:text-blue-300 btn-content"
          onClick={() => onShowTutorial(datalaravel.content)}
        >
          {datalaravel.content}
        </Link>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default SectionCsharp;
