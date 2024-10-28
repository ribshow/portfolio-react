import reactLogo from "../../../assets/react.svg";
import csharpLogo from "../../../assets/csharp-logo.svg";
import jsLogo from "../../../assets/javascript-logo.svg";
import htmlLogo from "../../../assets/html5-logo.svg";
import phpLogo from "../../../assets/php-logo.svg";

export const Logos = () => {
  return (
    <div className="p-2 flex sm:flex sm:w-full container-logos">
      <a href="#" target="_blank">
        <img src={jsLogo} className="logo js" alt="Javascript logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="#" target="_blank">
        <img src={phpLogo} className="logo php" alt="Php logo" />
      </a>
      <a href="#" target="_blank">
        <img src={csharpLogo} className="logo csharp" alt="C# logo" />
      </a>
      <a href="#" target="_blank">
        <img src={htmlLogo} className="logo html" alt="html logo" />
      </a>
    </div>
  );
};
