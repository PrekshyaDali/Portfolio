import React from "react";

export default function Skills(props) {
  return (
    <div
      id="/skills"
      className="lg:max-w-96 flex flex-col items-center rounded-lg p-5 space-y-3 shadow-md shadow-blue-50"
    >
      <div className="text-xl font-semibold border-b-2 w-full flex justify-center">
        {props.title1}
      </div>
      <div className="text-xl font-semibold w-full flex justify-center">
        {props.title2}
      </div>
    </div>
  );
}
