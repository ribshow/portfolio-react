import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronCircleDown } from "react-icons/fa";
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

  const [installSass] = useState<Data>({
    title: "CSS",
    content: "Instalando sass",
  });

  const [footerResponsive] = useState<Data>({
    title: "CSS",
    content: "Footer responsivo",
  });

  return (
    <Accordion.Item className="accordion-item w-full p-2" value="item-1">
      <Accordion.Trigger className="accordion-trigger justify-between">
        <div className="flex w-full justify-between">
          {installSass.title} <FaChevronCircleDown className="m-1" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="accordion-content block w-full text-left p-2">
        <Link
          to={"/tutorials"}
          className="text-white block w-full text-left hover:text-blue-300 btn-content"
          onClick={() => onShowTutorial(installSass.content)}
        >
          {installSass.content}
        </Link>
      </Accordion.Content>
      <Accordion.Content className="accordion-content block w-full text-left p-2">
        <Link
          to={"/tutorials"}
          className="text-white block w-full text-left hover:text-blue-300 btn-content"
          onClick={() => onShowTutorial(footerResponsive.content)}
        >
          {footerResponsive.content}
        </Link>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default Section1;
