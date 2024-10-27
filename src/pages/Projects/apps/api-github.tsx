import { Link } from "react-router-dom";
import apigit from "../../../assets/projeto_apigit.png";

export const Apigit = () => {
  return (
    <div className="api-git border shadow-xl m-3 border-slate-600 flex justify-center">
      <div className="content p-2">
        <h4 className="p-2 text-white">Api-github</h4>
        <p className="p-2 text-white">
          Essa é uma api, desenvolvida usando React, ela consome a api do github
          e permite que você pesquise repositórios pelo nome de usuário no
          github.
        </p>
        <Link to={"https://ribshow.github.io/api-github"} target="_blank">
          Ir para
        </Link>
        <div className="content-img flex justify-center">
          <img className="img-git" src={apigit} width={320} height={240} />
        </div>
      </div>
    </div>
  );
};

export default Apigit;
