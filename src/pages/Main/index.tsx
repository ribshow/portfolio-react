import "../../App.css";
import "./style.css";
import { Logos } from "./components/logos";
import { Title } from "./components/title";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import Wpp from "./components/wpp";

function IndexPage() {
  return (
    <>
      <div className="min-h-full welcome container-index">
        <div className="h-full cont">
          <div className="container flex-grow">
            <div className="">
              <Logos />
            </div>
            <Title />
          </div>
        </div>
        <Card />
      </div>
      <Wpp />
      <Footer />
    </>
  );
}

export default IndexPage;
