import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <motion.nav
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-gradient-to-l from-violet-900 via-violet-700 to-violet-900 text-white fixed top-0 left-0 w-full border-b-[1px] border-primary/50 z-50"
      >
        <div className="container">
          <div className="flex items-center justify-between h-[72px] py-2">
            {/*Logo section*/}
            <div className="text-2xl md:text-3xl text-white uppercase">
              <a href="#">
                Unity
                <span className="inline-block font-bold text-primary">
                  Fund
                </span>
              </a>
            </div>

            {/* Desktop Menu section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-10">
                <li className="group relative cursor-pointer">
                  <a href="#" className="flex items-center gap-[2px] h-[72px]">
                    Home{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                    </span>
                  </a>

                  {/* dropdown section */}
                  <div className="absolute -left-9 z-[99999] hidden w-[150px] shadow-md p-2 text-black rounded-md group-hover:block">
                    <ul className="space-y-3">
                      <a href="#join">
                        <li className="p-2 hover:bg-violet-200">
                          Join the Cause
                        </li>
                      </a>
                      <a href="#initiatives">
                        <li className="p-2 hover:bg-violet-200">Initiatives</li>
                      </a>
                      <a href="#blogs">
                        <li className="p-2 hover:bg-violet-200">Blogs</li>
                      </a>
                    </ul>
                  </div>
                </li>
                <a href="#about">
                  <li className="cursor-pointer">About us</li>
                </a>
                <li>
                  <div className="flex items-center gap-4">
                    <div>
                      <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md text-white bg-primary hover:bg-primary/80 p-2" />
                    </div>
                    <div>
                      <p>Talk to us</p>
                      <p>+91 9876543210</p>
                    </div>
                  </div>
                </li>

                {/* Light and dark mode switch */}
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-2xl"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </ul>
            </div>

            {/* mobile Menu section */}
            <div className="md:hidden flex items-center gap-4">
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile sidebar Menu component*/}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
