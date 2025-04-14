import { links } from "@/constant";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const ToggleMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="sm:hidden flex">
      <IoMenu onClick={toggleMenu} className="cursor-pointer" size={35} />

      {/* Overlay with fade animation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-10 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Side menu with slide-in animation */}
        <div
          className={`fixed top-0 right-0 h-screen bg-white w-[270px] p-4 rounded-l-lg shadow-lg flex flex-col items-center justify-center gap-5 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <IoClose
            onClick={toggleMenu}
            className="cursor-pointer absolute top-5 left-5 text-black"
            size={35}
          />

          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="text-xl text-black font-semibold hover:text-[#6C5C50] duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
