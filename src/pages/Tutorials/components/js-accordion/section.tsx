import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  onShowTutorial: (tutorialName: string) => void;
}

export const Section: React.FC<SectionProps> = ({ onShowTutorial }) => {
  interface Data {
    title: string;
    content: string;
  }

  const [datajs] = useState<Data>({
    title: "JavaScript",
    content: "Conversão de fuso horário",
  });

  return (
    <Accordion.Item className="accordion-item w-full p-2" value="item-2">
      <Accordion.Trigger className="accordion-trigger justify-between">
        <div className="flex w-full justify-between">
          {datajs.title} <FaChevronCircleDown className="m-1" />
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
    </Accordion.Item>
  );
};

export const Asidejs: React.FC<SectionProps> = ({ onShowTutorial }) => {
  return (
    <div className="w-full flex m[-1] justify-center">
      <aside className="aside absolute left-0 text-center top-0 w-1/5 h-full">
        <Section onShowTutorial={onShowTutorial} />
      </aside>
    </div>
  );
};

export default Section;
