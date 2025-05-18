import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#f9f6f0] py-10 px-6 border-t border-[#e5e0d6] dark:bg-[#2d2d2d] dark:text-[#f1f1f1]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
      <div className="text-[#3d2c1e] font-serif text-lg dark:text-[#f1f1f1]">
        © {new Date().getFullYear()} Elton Ndudzo · All Rights Reserved.
      </div>
      <div className="flex space-x-6">
        <a
          href="https://github.com/eltonndudzo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3d2c1e] hover:text-[#6b4f3b] transition-all duration-300 text-2xl dark:text-[#f1f1f1] hover:scale-105"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/elton-ndudzo-790b6a1ba"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3d2c1e] hover:text-[#6b4f3b] transition-all duration-300 text-2xl dark:text-[#f1f1f1] hover:scale-105"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/elton_ndudzo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3d2c1e] hover:text-[#6b4f3b] transition-all duration-300 text-2xl dark:text-[#f1f1f1] hover:scale-105"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
