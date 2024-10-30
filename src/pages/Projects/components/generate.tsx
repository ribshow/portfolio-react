import { Link } from "react-router-dom";
import generate from "../../../assets/projeto_gerador.png";

export const Generate = () => {
  return (
    <div className="api-git border shadow-xl bg-gray-900 m-3 border-slate-600 flex justify-center">
      <div className="content p-2">
        <h4 className="p-2 text-white">Gerador de senha</h4>
        <p className="p-2 text-white">
          Gerador de senha, feito com HTML, CSS e JavaScript, capaz de gerar
          senhas fortes de até 64 caracteres.
        </p>
        <Link to={"https://ribshow.github.io/generate/"} target="_blank">
          Ir para
        </Link>
        <div className="content-img flex justify-center">
          <img className="img-git" src={generate} width={320} height={240} />
        </div>
      </div>
    </div>
  );
};

export default Generate;
