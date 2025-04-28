import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { navLinks } from "../../config/navbar";

const moreLinks = [
  { name: "Blog", href: "#blog" },
  { name: "Support", href: "#support" },
];

const NavBar: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between py-10 px-24">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-[49.92px] w-auto mr-2" />
        </div>

        <ul className="hidden md:flex space-x-8 font-medium font-dmSans text-[25px] text-white relative">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-darkblue transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center hover:text-darkblue transition duration-300 focus:outline-none"
            >
              More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMoreOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white text-darkblue rounded-md shadow-lg py-2">
                {moreLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 hover:bg-darkblue hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-white text-darkblue px-10 py-2 rounded-full hover:bg-darkblue hover:text-white transition duration-300 text-[25px]">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
