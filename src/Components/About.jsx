import React from 'react';
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-14 px-6 bg-[#222c2e] flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-white">
        About Me
      </h2>
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-8 items-center border border-gray-700">
        <div className="flex justify-center">
          <img
            className="w-[250px] md:w-[350px] lg:w-[200px] rounded-full shadow-lg object-cover hover:scale-105 transition-transform duration-300 border-4 border-black-500"
            src={aboutImg}
            alt="About"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Who I Am?
          </h3>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            I am a passionate developer focused on crafting efficient, scalable, and visually appealing web applications. 
            With expertise in modern frameworks and a love for clean, maintainable code, I strive to build solutions that deliver exceptional user experiences.
          </p>
          <a
            href="#projects"
            className="inline-block bg-black-500 text-white px-5 py-2 rounded-md font-medium hover:bg-white-600 transition duration-300 shadow-md"
          >
            View My Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
