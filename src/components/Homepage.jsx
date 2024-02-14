import React from "react";
import Nav from "./Nav";
import Testimonials from "./Testimonials";
import Introduction from "./Introduction";
import MyServices from "./MyServices";
import Contact from "./Contact";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div className=" text-white  bg-gradient-to-tr from-[#712A52] via-[#04112A] to-[#1AA89F] max-h-full p-12">
        <Nav></Nav>
        <div className="mb-12">
          <Introduction></Introduction>
        </div>

        <div className="space-y-12 mb-28 ">
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold text-[#51dbea]">
              Testimonials
            </h1>
          </div>

          <div className=" flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-center md:space-x-12 ">
            <Testimonials></Testimonials>
            <Testimonials></Testimonials>
            <Testimonials></Testimonials>
          </div>
        </div>

        <div className="space-y-12 mb-28">
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold text-[#51dbea]">
              My Services
            </h1>
          </div>
          <div className="flex flex-col mb-28 space-y-5 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-12 ">
            <MyServices />
            <MyServices />
            <MyServices />
          </div>
        </div>

        <div>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}
