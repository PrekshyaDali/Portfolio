import React from "react";

export default function (props) {
  return (
    <div className=" hover:scale-125 ease-in-out duration-300 space-y-5 px-3 py-5 flex flex-col items-center justify-center  shadow-xl shadow-[#1AA89F] rounded-md backdrop-blur-lg bg-white/30">
      <div className="flex justify-start ">
        <img
          className="w-8 shadow-md shadow-[#1AA89F]"
          src="Figma.png"
          alt=""
        />
      </div>
      <h1 className="font-semibold text-xl">UI/UX design</h1>
      <p className="text-sm ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus
        accusamus fuga sit impedit totam nisi ex officia, nihil iste possimus
        ipsum perferendis, porro animi ad dolorum, ut saepe eos?
      </p>
    </div>
  );
}
