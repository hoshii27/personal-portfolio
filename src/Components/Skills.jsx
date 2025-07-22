import React from "react";
import { FaCode, FaServer } from "react-icons/fa";

const skillsData = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
  ],
  Backend: ["Node.js", "MySQL", "Firebase"],
};

const categoryIcons = {
  Frontend: <FaCode className="inline text-black mr-2 text-xl" />,
  Backend: <FaServer className="inline text-black mr-2 text-xl" />,
};

const Skills = () => {
  return (
    <section
      id="skills"
      aria-label="Skills and expertise"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        <div className="flex flex-col justify-center px-4">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-black mb-6 tracking-tight">
            Skills
          </h2>
          
          <p className="max-w-md text-gray-700 text-lg leading-relaxed">
            Current skill set — constantly learning and improving to build meaningful projects and solve real-world problems.
          </p>
        </div>
        <div className="space-y-10">
          {Object.entries(skillsData).map(([category, skills]) => (
            <section
              key={category}
              aria-label={`${category} skills`}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center border-b border-gray-200 pb-2">
                {categoryIcons[category]}
                {category}
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-gray-800 text-lg font-medium">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-indigo-100 transition-colors duration-200 text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
