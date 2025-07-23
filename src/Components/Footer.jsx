import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#222c2e] text-gray-300 py-10 shadow-md">
      {/* Icons Centered */}
      <div className="flex justify-center gap-8 mb-6">
        {[
          { icon: FaFacebookSquare, url: "https://www.facebook.com/share/1Bp7AxQbPa/?mibextid=wwXIfr", label: "Facebook" },
          { icon: FaGithubSquare, url: "https://github.com/hoshii27", label: "GitHub" },
          { icon: FaInstagram, url: "https://www.instagram.com/banghoshi_?igsh=MWxtZTJjZmM5cHhkaQ==&utm_source=ig_contact_invite", label: "Instagram" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="transition-transform transform hover:scale-125 hover:text-[#00df9a] duration-300"
          >
            <item.icon size={32} className="text-[#cbd5e0]" />
          </a>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hoshi.
      </div>
    </footer>
  );
};

export default Footer;
