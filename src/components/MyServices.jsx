import React from "react";

export default function (props) {
  return (
    
    <div id= "/services" className=" lg:max-w-96 hover:scale-125 ease-in-out duration-300 space-y-5 px-3 py-5 flex flex-col items-center justify-center  shadow-xl shadow-[#1AA89F] rounded-md  bg-white/30">
      <div className="flex justify-start ">
        <img
          className="w-8 shadow-md shadow-[#1AA89F]"
          src="Figma.png"
          alt=""
        />
      </div>
      <h1 className="font-semibold text-xl">{props.title}</h1>
      <p className="text-sm ">
         {props.paragraph}
      </p>
    </div>
  );
}
