export const LaravelMix = () => {
  return (
    <div className="w-full grid grid-cols-1 justify-center p-5 items-center container-tutorial">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <p className="text-center w-full text-white text-md p-2 container-title">
            Para instalar o laravel mix, no terminal, digite:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            npm init -y <br />
            npm install laravel-mix --save-dev
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <p className="text-center w-full text-white text-md p-2 container-title">
            Em seguida crie um arquivo webpack.mix.js na raiz do projeto e
            adicione o seguinte código:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            touch webpack.mix.js
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <p className="text-center w-full text-white text-md p-2 container-title">
            Configuração padrão do webpack.mix.js:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            const mix = require("laravel-mix"); <br />
            mix.js("resources/js/app.js", "public/js").setPublicPath("public");
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <p className="text-center w-full text-white text-md p-2 container-title">
            Por último, compile os assets com o comando:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            npx mix
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaravelMix;
