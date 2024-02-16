import React from "react";
import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xqkrqdzb");
  if (state.succeeded) {
    return <p className = "text-2xl text-pink-500">Your message has been successfully sent</p>;
  }

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

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full text-black "
      >
        <input
          placeholder="Enter your Name"
          className="h-12 p-3 border-2 mb-2 rounded-md "
          type="text"
          name="name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          placeholder="Enter your Email"
          className="h-12 p-3 border-2 mb-2 rounded-md  "
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="mb-2 rounded-md p-3 bg-white "
          placeholder="Enter your Subject"
          type="text"
          id=""
          cols="10"
          rows="3"
          name="subject"
        ></textarea>
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        <textarea
          className="mb-2 rounded-md p-3  bg-white "
          placeholder="Enter your Message"
          type="text"
          id=""
          cols="20"
          rows="8"
          name="message"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button name="Submit"></Button>
      </form>
    </div>
  );
}
