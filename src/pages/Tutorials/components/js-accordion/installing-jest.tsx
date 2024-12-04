export const InstallJest = () => {
  return (
    <div className="w-full grid grid-cols-1 justify-center p-5 items-center container-tutorial">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center w-80 container-title">
          <p className="text-center text-white p-2">No terminal execute:</p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            npm install --save-dev jest ts-jest @types/jest
          </p>
        </div>
        <div className="flex justify-center w-80 container-title">
          <p className="text-center text-white p-2">
            Crie um arquivo jest.config.js na raiz do projeto e adicione o
            seguinte código nele:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            module.exports = &#123; <br />
            preset: 'ts-jest',
            <br />
            testEnvironment: 'node', transform: &#123; <br />
            '^.+\\.(ts|tsx)$': 'ts-jest', //
            <strong>Transforma arquivos typescript</strong>
            <br />
            &#125;, <br />
            moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'], <br />
            &#125;
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstallJest;
