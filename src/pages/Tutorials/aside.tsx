import { AccordionRoot } from "./accordion";
interface SectionProps {
  onShowTutorial: (tutorialName: string) => void;
}

export const Aside: React.FC<SectionProps> = ({ onShowTutorial }) => {
  return (
    <div className="w-full flex m-0 justify-center">
      <aside className="aside flex flex-col absolute left-0 text-center top-0 w-1/5 h-full gap-0">
        <p className="p-4">Menu</p>
        <AccordionRoot onShowTutorial={onShowTutorial} />
      </aside>
    </div>
  );
};

export default Aside;
