import $ from "jquery";
import "jquery-mask-plugin";

import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";

export const Form = () => {
  // validando número de celular
  useEffect(() => {
    $("#cell").mask("(00) 0.0000-0000");
  }, []);

  const [state, handleSubmit] = useForm("xovaqyyd");
  if (state.succeeded) {
    return <p className="blinking-text welcome">Obrigado pela mensagem!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="controls">
          <label htmlFor="name">Nome:</label>
          <input
            className="focus:outline"
            type="text"
            name="name"
            id="name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="controls">
          <label htmlFor="last-name">Sobrenome:</label>
          <input
            className="focus:outline"
            type="text"
            name="last-name"
            id="last-name"
            required
          />
          <ValidationError
            prefix="Last-name"
            field="last-name"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="form-group">
        <div className="controls">
          <label htmlFor="email">Email:</label>
          <input
            className="focus:outline"
            type="email"
            name="email"
            id="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="controls">
          <label htmlFor="cell">Celular:</label>
          <input
            className="focus:outline"
            type="text"
            name="cell"
            id="cell"
            required
          />
          <ValidationError prefix="Cell" field="cell" errors={state.errors} />
        </div>
      </div>

      <div className="form-group">
        <div className="controls">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            className="focus:outline"
            name="message"
            id="message"
            cols={30}
            rows={10}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="form-group m-auto">
        <button className="btn bg-slate-700 m-1 text-white" type="submit">
          Enviar
        </button>
        <button className="btn bg-slate-700 m-1 text-white" type="reset">
          Limpar
        </button>
      </div>
      <div className="form-group m-auto">
        <p id="my-form-status"></p>
      </div>
    </form>
  );
};

export default Form;
