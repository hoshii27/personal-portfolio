import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#222c2e] py-6 shadow-md">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a href="#hero">
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-wide cursor-pointer">
              HoshiNae.
            </h1>
          </a>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-white font-semibold text-lg">
            <li><a href="#hero" className="hover:text-[#00df9a] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#00df9a] transition">About</a></li>
            <li><a href="#skills" className="hover:text-[#00df9a] transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-[#00df9a] transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#00df9a] transition">Contact</a></li>
          </ul>
        </nav>
        <div onClick={handleNav} className="block md:hidden text-white cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed left-0 top-0 w-[30%] h-full bg-[#222c2e] border-r border-gray-700 flex flex-col items-center justify-center gap-8 text-white font-semibold text-lg ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }
        >
          <li><a href="#hero" className="hover:text-[#00df9a] transition" onClick={handleNav}>Home</a></li>
          <li><a href="#about" className="hover:text-[#00df9a] transition" onClick={handleNav}>About</a></li>
          <li><a href="#skills" className="hover:text-[#00df9a] transition" onClick={handleNav}>Skills</a></li>
          <li><a href="#projects" className="hover:text-[#00df9a] transition" onClick={handleNav}>Projects</a></li>
          <li><a href="#contact" className="hover:text-[#00df9a] transition" onClick={handleNav}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
