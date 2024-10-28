import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Wpp = () => {
  return (
    <div className="container-whatsapp">
      <Link
        to={"https://api.whatsapp.com/send?phone=5514998283036"}
        target="_blank"
        className="btn-whatsapp"
      >
        <FaWhatsapp className="text-white w-16 btn-whatsapp" />
      </Link>
    </div>
  );
};

export default Wpp;
