import React from "react";
import Nav from "./Nav";
import Testimonials from "./Testimonials";
import Introduction from "./Introduction";
import MyServices from "./MyServices";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import About from "./About";

export default function Homepage() {
  return (
    <>
      <div className=" text-white space-y-28 bg-gradient-to-tr from-[#712A52] via-[#04112A] to-[#1AA89F] max-h-full p-12">
        <div className="">
          <Nav></Nav>
        </div>

        <div className="">
          <Introduction></Introduction>
        </div>

        <div className="">
          <About></About>
        </div>

        <div className="space-y-12  ">
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

        <div className="space-y-12 ">
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold text-[#51dbea]">
              My Services
            </h1>
          </div>
          <div className="flex flex-col space-y-5 md:space-y-0  md:flex-row md:justify-center md:space-x-12  ">
            <MyServices
              title="UI/UX Design"
              paragraph="
            Hi, I'm Prekshya, a passionate UI/UX designer currently in the final semester of my Bachelor's program at Herald College Kathmandu. With a focus on creating engaging and intuitive digital experiences, I'm dedicated to mastering the art and science of user-centered design. Let's collaborate to create impactful designs that make a difference."
            />
            <MyServices
              title="Web Development"
              paragraph="I offer comprehensive website development services tailored to meet your specific needs. Whether you're looking to launch a brand new website, redesign an existing one, or implement custom features, I've got you covered. From front-end design to back-end development, I leverage my expertise in the latest web technologies to deliver high-quality, responsive, and user-friendly websites that leave a lasting impression. Let's work together to elevate your online presence and achieve your digital goals."
            />
            <MyServices
              title="Responsive Design"
              paragraph="I specialize in creating responsive websites that adapt seamlessly to different screen sizes and devices. With the increasing use of mobile devices, it's crucial for your website to provide a consistent and optimal user experience across all platforms. I employ modern techniques such as CSS grid layouts, flexbox, and media queries to ensure that your website looks and functions flawlessly on desktops, laptops, tablets, and smartphones. Let's ensure that your website is accessible to everyone, regardless of the device they're using, and leave a lasting impression on your audience."
            />
          </div>
        </div>

        <div>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}
