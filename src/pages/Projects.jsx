import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { motion } from "framer-motion";
import githubIcon from '../assets/images/github.png'


const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {
          projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12 ">
                <div className={`btn-back rounded-xl ${project.theme}`}/>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={project.iconUrl}
                    alt="project icon"
                    className="w-1/2 h-1/2 object-contain"/>
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, x: -100, scale: 0.5 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.1,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  className="mt-2 flex justify-center items-center">
                  <img className="object-contain" src={project.imageUrl} alt={project.name} />
                </motion.div>
                <div className="mt-5 flex items-center gap-2 font-poppins justify-between ">
                  <Link 
                    to={project.gitHubLink}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 flex gap-1 items-center mb-1">
                     <img src={githubIcon} alt="gitHub icon" className="w-[20px] h-[20px]"/>
                     <span>GitHub Link ➡️</span>
                    </Link>
                    
                    <Link 
                    to={project.liveLink}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600">
                    ✨Live Link ➡️
                    </Link>
                    
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <hr className="border-slate-200"/>

      <CTA />
    </section>
  );
};

export default Projects;
