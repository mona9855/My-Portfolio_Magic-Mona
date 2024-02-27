import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { TbLetterW } from "react-icons/tb";

const SocialLinks = () => {
  return (
    <div className="flex gap-3 mt-2">
      <a
        href="https://www.linkedin.com/in/mona-magdy-300b03234/"
        target="_blank"
        rel="noreferrer"
        title="Linkedin"
        className="p-1 rounded bg-blue-500 animate__animated animate__bounce" 
      >
        <FaLinkedin size={30} color="white" className="cursor-pointer" />
      </a>

      <a
        href="https://github.com/mona9855"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
        className="p-1 rounded bg-black animate__animated animate__bounce"
      >
        <FaGithub size={30} color="white" className="cursor-pointer" />
      </a>

      <a
        href="https://www.upwork.com/freelancers/~014d11d9c795ef93e1"
        target="_blank"
        rel="noreferrer"
        title="Upwork"
        className="p-1 rounded bg-green-700 animate__animated animate__bounce"
      >
        <SiUpwork size={30} color="white" className="cursor-pointer" />
      </a>

      <a
        href="https://wuzzuf.net/me/mona-magdy-b0eb2207a6?utm_medium=other&utm_source=referral"
        target="_blank"
        rel="noreferrer"
        className="p-1 rounded bg-blue-900 animate__animated animate__bounce"
      >
        <TbLetterW
          size={30}
          color="white"
          className="cursor-pointer"
          title="Wuzzuf"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
