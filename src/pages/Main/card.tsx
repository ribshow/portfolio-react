import { useNavigate } from "react-router-dom";

export const Card = () => {
  const navigate = useNavigate();

  // levando usuário até o formulário de contato
  const onClick = () => {
    navigate("/form");
  };

  return (
    <div className="card flex flex-col items-center justify-center p-4">
      <button className="bg-neutral-800" onClick={onClick}>
        <span className="blinking-text text-blue-400">Fale comigo!</span>
      </button>
    </div>
  );
};
