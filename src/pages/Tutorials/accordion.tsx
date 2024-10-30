import * as Accordion from "@radix-ui/react-accordion";
import "./accordion.css";
import { SectionJS } from "../Tutorials/components/js-accordion/section";
import { SectionCss } from "./components/css-accordion/section";
import { SectionLaravel } from "./components/laravel-accordion/section";
import { SectionCsharp } from "./components/csharp-accordion/section";

interface SectionProps {
  onShowTutorial: (tutorialName: string) => void;
}

export const AccordionRoot: React.FC<SectionProps> = ({ onShowTutorial }) => {
  return (
    <div className="welcome">
      <Accordion.Root type="multiple">
        <SectionCss onShowTutorial={onShowTutorial} />
        <SectionJS onShowTutorial={onShowTutorial} />
        <SectionLaravel onShowTutorial={onShowTutorial} />
        <SectionCsharp onShowTutorial={onShowTutorial} />
      </Accordion.Root>
    </div>
  );
};

export default AccordionRoot;
