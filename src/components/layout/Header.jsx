import logo from "@/assets/logo.svg";
import { Link, Links, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { links } from "@/constant";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  const pathname = useLocation().pathname;
  const isActive = (path) => {
    return pathname === path ? "text-[#6C5C50]" : "text-white";
  };

  return (
    <div className="py-5 px-7 flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="logo" className="w-12" />
      </Link>

      <div className="items-center space-x-10 hidden sm:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-xl font-semibold hover:text-[#6C5C50] duration-200 ${isActive(
              link.path
            )}`}
          >
            {link.name}
          </Link>
        ))}
        <FiSearch className="text-2xl font-bold" />
      </div>

      <ToggleMenu menus={links} />
    </div>
  );
};

export default Header;
