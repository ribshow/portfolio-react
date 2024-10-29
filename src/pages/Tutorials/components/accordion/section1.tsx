import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronCircleDown } from "react-icons/fa";
import "./accordion.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  onShowTutorial: (tutorialName: string) => void;
}

export const Section1: React.FC<SectionProps> = ({ onShowTutorial }) => {
  interface Data {
    title: string;
    content: string;
  }

  const [data] = useState<Data>({
    title: "CSS",
    content: "Instalando sass",
  });

  const [footer] = useState<Data>({
    title: "CSS",
    content: "Footer responsivo",
  });

  return (
    <div className="welcome">
      <Accordion.Root type="single" collapsible>
        <Accordion.Item className="accordiom-item w-full p-2" value="item1">
          <Accordion.Trigger className="accordion-trigger justify-between">
            <div className="flex w-full justify-between">
              {data.title} <FaChevronCircleDown className="m-1" />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className="accordion-content block w-full text-left p-2">
            <Link
              to={"/tutorials"}
              className="text-white block w-full text-left hover:text-blue-300 btn-content"
              onClick={() => onShowTutorial(data.content)}
            >
              {data.content}
            </Link>
          </Accordion.Content>
          <Accordion.Content className="accordion-content block w-full text-left p-2">
            <Link
              to={"/tutorials"}
              className="text-white block w-full text-left hover:text-blue-300 btn-content"
              onClick={() => onShowTutorial(footer.content)}
            >
              {footer.content}
            </Link>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export const Aside: React.FC<SectionProps> = ({ onShowTutorial }) => {
  return (
    <div className="w-full flex m[-1] justify-center">
      <aside className="aside absolute left-0 text-center top-0 w-1/5 h-full">
        <p className="p-4">Menu</p>
        <Section1 onShowTutorial={onShowTutorial} />
      </aside>
    </div>
  );
};

export default Aside;
