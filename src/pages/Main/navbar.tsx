import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header top-0 left-0 w-full sm:flex sm:top-0 sm:justify-end shadow-md z-50">
      <nav className="absolute top-0 right-0 w-full p-2">
        <Link to={"/"} className="text-center text-blue-400 m-2">
          Home
        </Link>
        <Link to={"/github"} className="text-center text-blue-400 m-2">
          Github
        </Link>
        <Link to={"/projects"} className="text-center text-blue-400 m-2">
          Projetos
        </Link>
        <Link
          to={"https://www.linkedin.com/in/heryson-andrade-1b0918284/"}
          className="text-center text-blue-400 m-2"
          target="_blank"
        >
          Linkedin
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
