import React, { useEffect, useRef } from "react";
import Hamburgernav from "./Hamburgernav";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [hamburgermenu, setHamburgermenu] = useState(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        !event.target.classList.contains("hamburger-icon")
      ) {
        setHamburgermenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const imgOnclickHandler = () => {
    setHamburgermenu(true);
  };

  const navItems = [
    { title: "About", path: "/about" },
    { title: "Testimonials", path: "/testimonials" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="text-white">
        <img
          onClick={imgOnclickHandler}
          className="h-6 sm:hidden hamburger-icon"
          src="hamburgermenu.png"
          alt=""
          ref={hamburgerRef}
        />
        <div className="z-50 flex justify-end hamburger-menu-container fixed top-0 h-16 w-full right-0">
          {!hamburgermenu && (
            <div className="z-50 bg-[#04112A] hidden sm:space-y-0 sm:flex sm:flex-row sm:space-x-12 sm:justify-end w-full py-4 pr-8">
              {navItems.map((item, index) => (
                <nav
                  key={index}
                  className="hover:text-pink-400 active:text-blue-300 hover:scale-150 ease-in-out duration-300"
                >
                  <Link to={item.path} spy={true} smooth={true} offset={50}>
                    {item.title}
                  </Link>
                </nav>
              ))}
              <a
                className="hover:text-pink-400 active:text-blue-300 hover:scale-150 ease-in-out duration-300"
                href="PrekshyaDali_resume.pdf"
                download
              >
                Download CV
              </a>
            </div>
          )}
          {hamburgermenu && (
            <Hamburgernav
              setHamburgermenu={setHamburgermenu}
              hamburgermenu={hamburgermenu}
              navItems={navItems}
            />
          )}
        </div>
      </div>
    </>
  );
}
