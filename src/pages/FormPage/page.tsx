import { Section, Forms } from "../FormPage/section";
import { Form } from "../FormPage/forms";
import "./styles.css";
import { Footer } from "./footer";

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
