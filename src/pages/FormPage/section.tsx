import { ReactNode } from "react";

// um filho do tipo reactNode cobre qualquer tipo de conteúdo JSX
interface SectionProps {
  children: ReactNode;
}

interface FormsProps {
  children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <section className="contact">
      <div className="title">
        <h2 className="text-white">Contato</h2>
      </div>
      {children}
    </section>
  );
};

export const Forms = ({ children }: FormsProps) => {
  return <div className="forms">{children}</div>;
};

export default Section;
