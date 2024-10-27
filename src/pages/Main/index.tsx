import "../../App.css";
import "./style.css";
import { Logos } from "./logos";
import { Title } from "./title";
import { Card } from "./card";
import { Wpp } from "./wpp";
import { Footer } from "./footer";

function IndexPage() {
  return (
    <>
      <div className="min-h-full welcome">
        <div className="flex flex-col h-full cont">
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
