import { Section, Forms } from "./components/section";
import { Form } from "./components/forms";
import "./styles.css";
import { Footer } from "./components/footer";

export default function FormPage() {
  return (
    <>
      <Section>
        <Forms>
          <Form />
        </Forms>
      </Section>
      <Footer />
    </>
  );
}
