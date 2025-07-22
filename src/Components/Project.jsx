import { useState } from "react";
import coffee from "../assets/coffee.jpg";
import ccs from "../assets/ccs.jpg";
import react from "../assets/react.jpg";

function Projects() {
  const [projects] = useState([
    {
      image: coffee,
      name: "Coffee Shop Website",
      brief:
        "A responsive website for a café with an admin dashboard to manage bookings, users, guests, and services.",
      link: "#"
    },
    {
      image: ccs,
      name: "CCS Student Portal",
      brief:
        "A student management system with login, course schedules, and account information — built for academic use.",
      link: "#"
    },
    {
      image: react,
      name: "React Website",
      brief:
        "A modern landing page built with React, showcasing data-driven insights for business and analytics platforms.",
      link: "#"
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-[#222c2e] text-white font-mono flex items-center justify-center"
    >
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10 text-center text-white">
             My Projects
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center border-b border-white/10 pb-4">
              Featured Work
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-blue-500 transition duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} Screenshot`}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="p-5">
                    <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                    <p className="text-gray-300 text-sm mb-3">{project.brief}</p>
                    <span className="text-black-400 hover:underline font-semibold">
                    
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}

export default Projects;
