export const Reactinstall = () => {
  return (
    <div className="w-full grid grid-cols-1 justify-center p-5 items-center container-tutorial">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <p className="text-center text-white text-md p-2 container-title">
            Para criar um projeto Vite/React/Typescript:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            npx create-vite@latest my-react-app --template react-ts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reactinstall;
