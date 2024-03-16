import searchIcon from "../assets/icons/search.svg";
import profileIcon from "../assets/icons/profile.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <nav className="my-4">
      <div className="flex justify-between items-center gap-4 ">
        <div className="md:hidden">
          <button onClick={() => setNavOpened(!navOpened)}>
            <img src={hamburgerIcon} alt="Hamburger Icon" />
          </button>
        </div>

        <div>
          <button className="text-xl sm:text-2xl font-bold">
            <a>Recipe Calories</a>
          </button>
        </div>

        <ul className="hidden md:flex *:text-[#150B2BB3] *:p-3 *:cursor-pointer">
          <li className="hover:underline">
            <a>Home</a>
          </li>
          <li className="hover:underline">
            <a>Recipe</a>
          </li>
          <li className="hover:underline">
            <a>About</a>
          </li>
          <li className="hover:underline">
            <a>Search</a>
          </li>
        </ul>

        <div className="space-x-2 flex items-center">
          <div className="hidden md:flex gap-2 bg-[#150B2B0D] rounded-3xl py-3 px-4">
            <img src={searchIcon} alt="Search icon" className="w-5" />
            <input
              type="text"
              className="border-none outline-none bg-transparent"
              placeholder="Search"
            />
          </div>

          <button className="bg-[#7951ff] rounded-full p-3 w-fit">
            <img src={profileIcon} alt="Profile Icon" className="w-5" />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden grid transition-[grid-template-rows,margin] duration-200 ${
          navOpened ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="flex flex-col items-center *:text-[#150B2BB3] *:px-3 *:py-1 *:cursor-pointer overflow-hidden">
          <li className="hover:underline">
            <a>Home</a>
          </li>
          <li className="hover:underline">
            <a>Recipe</a>
          </li>
          <li className="hover:underline">
            <a>About</a>
          </li>
          <li className="hover:underline">
            <a>Search</a>
          </li>

          <div className="mt-4 flex gap-2 bg-[#150B2B0D] rounded-3xl py-4 px-4 hover:cursor-default">
            <img src={searchIcon} alt="Search icon" className="w-5" />
            <input
              type="text"
              className="border-none outline-none bg-transparent my-2"
              placeholder="Search"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
