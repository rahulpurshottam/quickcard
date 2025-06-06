import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-[#18222f] p-4 shadow-md">
      <div className="flex space-x-6">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:text-white text-[#f1f3f5] transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faHouse} className="text-lg" />
          <span className="text-md font-medium uppercase">Home</span>
        </Link>

        <Link
          href="/CardPage/new"
          className="flex items-center space-x-2 hover:text-white text-[#f1f3f5] transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faSquarePlus} className="text-lg" />
          <span className="text-md font-medium uppercase">New Card</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
