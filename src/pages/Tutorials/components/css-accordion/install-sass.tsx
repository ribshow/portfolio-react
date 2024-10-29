export const Tutorial1 = () => {
  return (
    <div className="w-full grid grid-cols-1 justify-center p-5 items-center container-tutorial">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <p className="text-center text-white text-md p-2 container-title">
            No terminal digite o comando abaixo para instalar o sass
            globalmente:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            npm install -g sass
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial1;
