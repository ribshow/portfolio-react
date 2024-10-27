import "../../App.css";
import "./style.css";
import { Logos } from "./logos";
import { Title } from "./title";
import { Card } from "./card";

function IndexPage() {
  return (
    <div className="min-h-full">
      <div className="flex flex-col h-full cont">
        <div className="container flex-grow">
          <div className="">
            <Logos />
          </div>
          <Title />
        </div>
      </div>
      <Card />
    </div>
  );
}

export default IndexPage;
