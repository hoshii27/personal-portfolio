import React from 'react'
import profileImg from "../assets/profileImg.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 "
    >
      <div className="text-center z-10 px-4">
        <img
          className="w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all "
          src={profileImg}
          alt="Profile Image"
        />
      </div>
      <div className="text-center font-mono z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w[500px] font-semibold mb-6 px-1 text-black leading-tight">
          Andy Tan Jr.
        </h1>
        <p className="text-black-300 text-lg mb-8 max-w-lg mx-auto">
          I am Andy Tan JR, a third-year BSIT student from San Pablo Colleges.
        </p>
      </div>
    </section>
  )
}

export default Home