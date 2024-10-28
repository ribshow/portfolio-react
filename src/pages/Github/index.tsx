import Repos from "./components/repos";
import Footer from "../Projects/components/footer";

export const GithubPage = () => {
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

export default GithubPage;
