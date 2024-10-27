import Repos from "./repos";
import Footer from "../Projects/footer";

export const Github = () => {
  return (
    <>
      <div className="welcome">
        <h1 className="text-white m-4 text-2xl">Repositórios github</h1>
        <div className="flex justify-center w-full">
          <Repos />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Github;
