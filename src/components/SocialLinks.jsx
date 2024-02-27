import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div className="flex gap-3 mt-2">
      <a
        href="https://www.linkedin.com/in/mona-magdy-300b03234/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={30} color="#126bc4" className="cursor-pointer" />
      </a>

      <a href="https://github.com/mona9855" target="_blank" rel="noreferrer">
        <FaGithub size={30} color="black" className="cursor-pointer" />
      </a>

      <a href="https://www.upwork.com/freelancers/~014d11d9c795ef93e1" target="_blank" rel="noreferrer">
        <SiUpwork size={30} color="green" className="cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialLinks;
