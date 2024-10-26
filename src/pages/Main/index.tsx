import "../../App.css";
import "./style.css";
import { Logos } from "./logos";
import { Title } from "./title";
import { Card } from "./card";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

function IndexPage() {
  return (
    <>
      <Navbar />
      <div className="container min-vh-screen">
        <div className="flex justify-content-center align-items-center">
          <Logos />
        </div>
        <Title />
      </div>
      <Card />
      <Footer />
    </>
  );
}

export default IndexPage;
