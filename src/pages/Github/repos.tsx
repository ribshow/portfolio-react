import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

export const Repos = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/ribshow/repos"
      );
      const data = await response.json();
      const repositories = data.map((repo: Repository) => {
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          html_url: repo.html_url,
        };
      });
      setRepositories(repositories);
    };
    fetchData();
  }, []);

  const repos = repositories.map((repo: Repository) => {
    return (
      <div
        className="w-full flex flex-col justify-center border h-56 border-blue-500"
        key={repo.id}
      >
        <h3 className="text-blue-400 text-lg m-2">{repo.name}</h3>
        <p className="text-white m-2 ">
          <span className="text-yellow-500 m-2">Descrição: </span>
          {repo.description}
        </p>
        <p className="text-orange-600 m-2">{repo.language}</p>
        <Link to={`${repo.html_url}`} target="_blank">
          Ver
        </Link>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-2 gap-2 w-3/5 container-repo-all m-2">
      {repos}
    </div>
  );
};

export default Repos;
