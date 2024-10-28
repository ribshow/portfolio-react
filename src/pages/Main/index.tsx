import "../../App.css";
import "./style.css";
import { Logos } from "./components/logos";
import { Title } from "./components/title";
import { Card } from "./components/card";
import { Wpp } from "./components/wpp";
import { Footer } from "./components/footer";

function IndexPage() {
  return (
    <>
      <div className="min-h-full welcome">
        <div className="h-full cont">
          <div className="container flex-grow">
            <div className="">
              <Logos />
            </div>
            <Title />
          </div>
        </div>
        <Card />
        <Wpp />
      </div>
      <Footer />
    </>
  );
}

export default IndexPage;
