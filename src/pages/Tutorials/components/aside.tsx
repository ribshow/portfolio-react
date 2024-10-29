//import { Section1 } from "./accordion/section1";

interface SectionProps {
  onShowTutorial: () => void;
}

export const Aside: React.FC<SectionProps> = () => {
  return (
    <div className="w-full flex m[-1] justify-center">
      <aside className="aside absolute left-0 text-center top-0 w-1/5 h-full">
        <p className="p-4">Menu</p>
      </aside>
    </div>
  );
};

export default Aside;
