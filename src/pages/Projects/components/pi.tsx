import pi from "../../../assets/projeto_pi.png";
import { Link } from "react-router-dom";

export const Pi = () => {
  return (
    <div className="api-git border bg-gray-900 shadow-xl m-3 border-slate-600 flex justify-center">
      <div className="content p-2">
        <h4 className="p-2 text-white">Projeto Integrador</h4>
        <p className="p-2 text-white">
          Projeto acadêmico fullstack desenvolvido no laravel, com agenda de
          horários, mural e painel do administrador.
        </p>
        <Link to={"https://github.com/ribshow/SISEDU-2024"} target="_blank">
          Ir para
        </Link>
        <div className="content-img flex justify-center">
          <img className="img-git" src={pi} width={320} height={240} />
        </div>
      </div>
    </div>
  );
};
