import React from "react";
import Button from "./Button";

export default function Contact() {
  return (
    <div
      id="/contact"
      className="flex flex-col space-y-5 lg:flex-row lg:space-x-8 lg:space-y-0"
    >
      <div className="flex flex-col space-y-5 max-w-3xl">
        <div className="flex justify-center mb-5">
          <h1 className="text-2xl font-semibold ">Contact Me</h1>
        </div>

        <div className="space-y-5 ">
          <h1 className="text-xl font-semibold ">Let's work Together</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eaque blanditiis expedita ex rem? Tenetur architecto temporibus
            aperiam deserunt! Itaque ducimus voluptates commodi dolores eos nam
            quisquam ea deleniti atque!
          </p>
        </div>

        <div>
          <div className="flex space-x-5 mb-3">
            <img
              className=" h-4 shadow-md shadow-[#1AA89F]"
              src="Emaill.png"
              alt=""
            />
            <span className="">prekshyashrestha@gmail.com</span>
          </div>

          <div className="flex space-x-5">
            <img src="Contact.png" alt="" />
            <span>9861696707</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full text-black ">
        <input
          placeholder="Enter your Name"
          className="h-12 p-3 border-2 mb-2 rounded-md "
          type="text"
        />
        <input
          placeholder="Enter your Email"
          className="h-12 p-3 border-2 mb-2 rounded-md  "
          type="text"
        />
        <textarea
          className="mb-2 rounded-md p-3 bg-white "
          placeholder="Enter your Subject"
          name="Subject"
          id=""
          cols="10"
          rows="3"
        ></textarea>
        <textarea
          className="mb-2 rounded-md p-3  bg-white "
          placeholder="Enter your Message"
          name="Message"
          id=""
          cols="20"
          rows="8"
        ></textarea>
      </div>
      <Button name="Submit"></Button>
    </div>
  );
}
