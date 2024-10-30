export const Timezone = () => {
  return (
    <div className="w-full grid grid-cols-1 justify-center p-5 items-center container-tutorial">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <p className="text-center text-white text-md p-2 container-title">
            Para converter do fuso horário UTC, para o de São Paulo:
          </p>
        </div>
        <div className="pass rounded-xl flex justify-center">
          <p className="pass-container text-blue-500 font-bold rounded-xl p-2">
            const utcDate = new Date(); <br /> <br />
            const saoPauloDate = utcDate.toLocaleString("pt-BR", &#123; <br />
            timeZone: "America/Sao_Paulo", <br /> year: "numeric",
            <br /> month: "2-digit",
            <br />
            day: "2-digit",
            <br /> hour: "2-digit",
            <br /> minute: "2-digit",
            <br /> second: "2-digit"
            <br /> &#125;); <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
