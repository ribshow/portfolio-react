export const ConfigureHttps = () => {
  return (
    <div className="w-full grid grid-cols-1 justify-center p-5 items-center container-tutorial">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center w-80 container-title">
          <p className="text-center text-white p-2">
            Abra um terminal no windows e execute:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem
            -out cert.pem
          </p>
        </div>
        <div className="flex justify-center w-80 container-title">
          <p className="text-center text-white p-2">
            Responda as perguntas de acordo com a sua necessidade:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            - Country Name (2 letter code) [AU]:{" "}
            <i className="text-black">BR</i> <br />- State or Province Name
            (full name) [Some-State]: <i className="text-black">São Paulo</i>
            <br />- Locality Name (e.g., city) []:{" "}
            <i className="text-black">Jaú</i> <br />- Organization Name (e.g.,
            company) [Internet Widgits Pty Ltd]:
            <i className="text-black"> My Company</i>
            <br />- Organizational Unit Name (e.g., section) []:{" "}
            <i className="text-black">Desenvolvimento</i> <br />- Common Name
            (e.g., your name or your server's hostname) []:
            <i className="text-black"> localhost</i>
            <br />- Email Address []:{" "}
            <i className="text-black">admin@minhaempresa.com</i> <br />
          </p>
        </div>
        <div className="flex justify-center w-80 container-title">
          <p className="text-center text-white p-2">
            Esse comando irá gerar dois arquivos:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            key.pem & cert.pem
          </p>
        </div>
        <div className="flex justify-center w-80 container-title">
          <p className="text-center text-white p-2">
            Configure o server para aceitar o https:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            import https from 'https'; <br />
            import fs from 'fs'; <br />
            import express from 'express' <br />
            <br />
            const app = express();
            <br />
            const optionsHttps = {"{"} <br />
            key: fs.readFileSync('./key.pem'),
            <br />
            cert: fs.readFileSync('./cert.pem')
            <br />
            {"}"}
            <br />
            https.createServer(options, app).listen(3000, () ={">"} {"{"}
            <br />
            console.log('Server is running port 3000')
            <br />
            {"}"});
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfigureHttps;
