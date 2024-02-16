import React from "react";
import Button from "./Button";
import { Link } from "react-scroll";

export default function Introduction() {
  return (
    <div className="flex relative ">
      <div className="space-y-8 max-w-lg ">
        <h1 className="sm:text-6xl text-3xl font-bold">
          Hello, I am <span className="text-[#1AA89F]">Prekshya Dali</span>
        </h1>
        <p className="text-xl text-pink-200">
          Goal-oriented with a commitment to quality work.
        </p>

        <p className="text-left line-clamp-3 ">
          Greetings! I'm Prekshya, a budding web developer currently in the
          final semester of my Bachelor's program at Herald College Kathmandu.
          With a passion for web development and a dedication to learning, I'm
          excited to embark on my journey in the field of technology.
        </p>
        <div>
          <Link to="/about">
            <Button
              onClick={() => {
                // Adjust the duration and smooth properties as needed
              }}
              name="More details"
            />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:visible lg:top-0 lg:absolute lg:right-5 ">
        <img
          className="rounded-full lg:max-h-80 xl:max-h-[400px]"
          src="Designergirl.gif"
          alt=""
        />
      </div>
    </div>
  );
}
