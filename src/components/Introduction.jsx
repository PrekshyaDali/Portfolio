import React from "react";
import Button from "./Button";
import { Link } from "react-scroll";

export default function Introduction() {
  return (
    <div className="flex">
      <div className="space-y-8 max-w-lg mt-20">
        <h1 className="text-3xl font-bold">
          Hello, I am <span className="text-[#1AA89F]">Prekshya</span>
        </h1>
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
    </div>
  );
}
