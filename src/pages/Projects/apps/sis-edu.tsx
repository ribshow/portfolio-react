import { Link } from "react-router-dom";
import sisedu from "../../../assets/projeto_sisedu.png";

export const Sisedu = () => {
  return (
    <div className="api-git border shadow-xl m-3 border-slate-600 flex justify-center">
      <div className="content p-2">
        <h4 className="p-2 text-white">SISEDU - PHP</h4>
        <p className="p-2 text-white">
          Sistema acadêmico PHP laravel com autenticação.
        </p>
        <Link to={"https://github.com/ribshow/SISEDU-2024"} target="_blank">
          Ir para
        </Link>
        <div className="content-img flex justify-center">
          <img className="img-git" src={sisedu} width={320} height={240} />
        </div>
      </div>
    </div>
  );
};

export default Sisedu;
