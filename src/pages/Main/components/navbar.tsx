import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header top-0 left-0 w-full sm:flex sm:top-0 sm:justify-end shadow-md z-50">
      <nav className="absolute top-0 right-0 w-full p-2">
        <Link to={"/"} className="text-center text-base text-blue-400 m-2">
          Home
        </Link>
        <Link
          to={"/github"}
          className="text-center text-base text-blue-400 m-2"
        >
          Github
        </Link>
        <Link
          to={"/projects"}
          className="text-center text-base text-blue-400 m-2"
        >
          Projetos
        </Link>
        <Link
          to={"/tutorials"}
          className="text-center text-base text-blue-400 m-2"
        >
          Tutoriais
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
