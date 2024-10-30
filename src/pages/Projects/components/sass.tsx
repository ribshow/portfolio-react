import sass from "../../../assets/projeto_sass.png";
import { Link } from "react-router-dom";

export const Sass = () => {
  return (
    <div className="api-git border bg-gray-900 shadow-xl m-3 border-slate-600 flex justify-center">
      <div className="content p-2">
        <h4 className="p-2 text-white">Portfólio</h4>
        <p className="p-2 text-white">
          Portfólio desenvolvido com Sass, HTML e JS.
        </p>
        <Link to={"https://ribshow.github.io/portfolio"} target="_blank">
          Ir para
        </Link>
        <div className="content-img flex justify-center">
          <img className="img-git" src={sass} width={320} height={240} />
        </div>
      </div>
    </div>
  );
};

export default Sass;
