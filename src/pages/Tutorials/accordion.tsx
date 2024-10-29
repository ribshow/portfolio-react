import * as Accordion from "@radix-ui/react-accordion";
import "./accordion.css";
import { Section } from "../Tutorials/components/js-accordion/section";
import { Section1 } from "../Tutorials/components/css-accordion/section1";

interface SectionProps {
  onShowTutorial: (tutorialName: string) => void;
}

export const AccordionRoot: React.FC<SectionProps> = ({ onShowTutorial }) => {
  return (
    <div className="welcome">
      <Accordion.Root type="multiple">
        <Section1 onShowTutorial={onShowTutorial} />
        <Section onShowTutorial={onShowTutorial} />
      </Accordion.Root>
    </div>
  );
};

export default AccordionRoot;
