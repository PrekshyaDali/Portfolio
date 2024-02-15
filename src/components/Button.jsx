import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="h-12 px-6 py-2 border-2 rounded-md shadow-md shadow-[#1AA89F] bg-gradient-to-tr from-[#1AA89F] via-[#712A52] to-[#04112A] hover:from-[#712A52] hover:via-[#04112A] hover:to-[#1AA89F] active:from-[#1AA89F] active:via-[#712A52] active:to-[#04112A]"
    >
      {" "}
      {props.name}
    </button>
  );
}
