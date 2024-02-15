import React from "react";
import { Link } from "react-scroll";

export default function Hamburgernav(props) {
  const handleCloseClick = () => {
    props.setHamburgermenu(false);
  };

  


  return (
    <div className="animation h-[100vh] w-64 border-2 fixed left-0 top-0 z-50 p-8 bg-gradient-to-tr from-[#712A52] via-[#04112A] to-[#1AA89F]">
      <div className="flex justify-end">
        <img onClick={handleCloseClick} src="Close.png" alt="" />
      </div>
      {/* Render navigation items dynamically */}
      <div className="flex flex-col space-y-12">
        {props.navItems.map((item, index) => (
          <nav
            key={index}
            className="text-white hover:text-pink-400 active:text-blue-300 hover:scale-125 ease-out duration-300"
          >
            <Link to={item.path} spy={true} smooth={true} offset={50}>
              {item.title}
            </Link>
          </nav>
        ))}
      </div>
    </div>
  );
}
