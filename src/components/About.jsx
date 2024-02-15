import React from "react";

export default function About() {
  return (
    <div className="flex flex-col space-x-0 space-y-5 lg:flex lg:flex-row lg:space-x-20 lg:space-y-0">
      <div className="flex items-center justify-center">
        <img
          className="shadow-lg shadow-pink-500 sm:max-w-md h-auto object-cover rounded-full"
          src="Prekshya.jpg"
          alt=""
        />
      </div>

      <div id="/about" className="flex flex-col space-y-5 items-center">
        <h1 className="text-4xl  font-bold ">
          About <span className="text-pink-400">me</span>
        </h1>
        <h1 className="text-3xl font-semibold">I am a Web Developer</h1>
        <p>
          Greetings! I'm Prekshya, a budding web developer currently in the
          final semester of my Bachelor's program at Herald College Kathmandu.
          With a passion for web development and a dedication to learning, I'm
          excited to embark on my journey in the field of technology. During my
          time at Herald College Kathmandu, I've immersed myself in a diverse
          range of courses covering web development, programming languages, and
          design principles. Through hands-on projects and coursework, I've
          gained a solid foundation in the MERN (MongoDB, Express.js, React.js,
          Node.js) stack, as well as an understanding of UI design concepts.
        </p>
        <p>
          While I may not have prior job experience, I bring a fresh perspective
          and eagerness to learn to every opportunity. I'm enthusiastic about
          exploring new technologies, collaborating with others, and honing my
          skills to become a proficient web developer. As I approach graduation,
          I'm eager to apply my knowledge and skills to real-world projects,
          contribute to innovative solutions, and continue growing in the field
          of web development. I'm open to new opportunities and excited to see
          where this journey takes me. Let's connect and explore how I can
          contribute to your team or project. I'm ready to take on new
          challenges and make a positive impact in the world of technology.
        </p>
      </div>
    </div>
  );
}
