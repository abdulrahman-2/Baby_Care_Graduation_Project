import logo from "@/assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { links } from "@/constant";
import ToggleMenu from "./ToggleMenu";
// import userProfile from "@/assets/profile_1.png";

const Header = () => {
  // const user = { name: "ahmed", image: userProfile };
  const user = null;

  const pathname = useLocation().pathname;

  const isActive = (path) =>
    pathname === path ? "text-[#6C5C50]" : "text-white";

  return (
    <div className="py-2 px-7 flex items-center justify-between shadow-lg bg-[#bc9f8b] sticky top-0 z-50">
      <Link to="/">
        <img src={logo} alt="logo" className="w-12" />
      </Link>

      {/* Desktop Links */}
      <div className="items-center gap-10 hidden sm:flex">
        <div className="items-center space-x-10 flex">
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

          {user ? (
            <Link
              to="/profile"
              className={`text-xl font-semibold hover:text-[#6C5C50] duration-200 ${isActive(
                "/profile"
              )}`}
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/signin"
              className={`text-xl font-semibold hover:text-[#6C5C50] duration-200 ${isActive(
                "/signin"
              )}`}
            >
              Sign In
            </Link>
          )}

          <FiSearch className="text-2xl font-bold cursor-pointer" />
        </div>

        {user && (
          <img
            src={user.image}
            alt="user profile"
            className="size-9 rounded-full"
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div className="items-center gap-2 flex sm:hidden">
        {user && (
          <img
            src={user.image}
            alt="user profile"
            className="size-9 rounded-full"
          />
        )}
        <ToggleMenu menus={links} />
      </div>
    </div>
  );
};

export default Header;
