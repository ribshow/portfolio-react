export const Tutorial2 = () => {
  return (
    <div className="w-full grid grid-cols-1 justify-center p-5 items-center container-tutorial">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center w-80 container-title">
          <p className="text-center text-white p-2">
            Para um footer responsivo defina a altura do seu container principal
            como [ min-height: 100vh ] e adicione um [ margin-top: auto ] no seu
            footer.
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            main &#123; <br />
            min-height: 100vh <br />
            &#125; <br />
            footer &#123; <br />
            margin-top: auto; <br />
            height: 100vh <br />
            &#125;
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-white p-2">
            Alternativamente você pode tentar o seguinte:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            main &#123; <br />
            min-height: 100vh <br />
            &#125; <br />
            footer &#123; <br />
            margin-top: auto; <br />
            height: 100vh <br />
            &#125;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial2;
