import React from "react";
import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xqkrqdzb");

  if (state.succeeded) {
    return (
      <p className="text-2xl text-pink-500">
        Your message has been successfully sent
      </p>
    );
  }

  // Regular expression for email validation
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return (
    <div
      id="/contact"
      className="flex flex-col space-y-5 lg:flex-row lg:space-x-8 lg:space-y-0"
    >
      <div className="flex flex-col space-y-5 max-w-3xl">
        <div className="flex justify-center mb-5">
          <h1 className="text-4xl text-pink-400 font-semibold ">Contact Me</h1>
        </div>
        <div className="space-y-5">
          <h1 className="text-xl font-semibold ">Let's work Together</h1>
          <p className="">
            Ready to bring your vision to life? Let's collaborate and create
            something extraordinary together. Whether you have a specific
            project in mind or simply want to explore the possibilities, I'm
            here to listen, brainstorm, and turn ideas into reality. Reach out
            using the contact form below or connect with me via email. Let's
            embark on this creative journey together and make something
            remarkable happen.
          </p>
        </div>
        <div>
          <div className="flex space-x-5 mb-3">
            <img
              className="h-4 shadow-md shadow-[#1AA89F]"
              src="Emaill.png"
              alt=""
            />
            <span className="">prekshyashrestha@gmail.com</span>
          </div>
          <div className="flex space-x-5">
            <img className="h-6 " src="Contact.png" alt="" />
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
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          placeholder="Enter your Email"
          className="h-12 p-3 border-2 mb-2 rounded-md  "
          type="email"
          name="email"
          required
          pattern={emailRegex} // Email validation using regex pattern
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />
        <textarea
          className="mb-2 rounded-md p-3 bg-white "
          placeholder="Enter your Subject"
          type="text"
          id=""
          cols="10"
          rows="3"
          name="subject"
          required
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
          required
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
