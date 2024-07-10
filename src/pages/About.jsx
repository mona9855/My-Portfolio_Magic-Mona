import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text animate__animated animate__flipInX">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Mona
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Frontend developer based in Egypt, specialized in creating amazing
          websites made with passion. Making efficient, user friendly and
          responsive websites is my number 1️⃣ goal.
        </p>
        <p>❝ Whenever I code, I just lose the sense of time.❤️ ❞</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  title={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Work Experience starts here: */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked as a remote frontend developer leveling up my skils and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[90%] h-[90%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  background: "#FFF",
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div className="mt-5 flex flex-col gap-3">
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className={` font-bold`}
                      style={{ margin: 0, color: experience.iconBg }}
                    >
                      {experience?.company_name}
                    </p>
                    <p className="!text-[13px] text-[#4B465C]">
                      {experience?.companyDescription}
                    </p>
                  </div>

                  {experience.projects && (
                    <h3 className="text-black !text-[14px] font-poppins font-semibold">
                      <MdKeyboardArrowRight className="inline-block text-2xl" />
                      Projects:{" "}
                      <span className="font-normal !text-[13px] text-[#4B465C]">
                        &quot; {experience.projects} &quot;
                      </span>
                    </h3>
                  )}

                  {experience?.projectDescription && (
                    <div>
                      <h3 className="text-black !text-[14px] font-poppins font-semibold">
                        <MdKeyboardArrowRight className="inline-block text-2xl" />
                        Project Description:
                      </h3>
                      {experience?.projectDescription?.map((item, index) => (
                        <p
                          className="!text-[13px] font-normal !mt-0 text-[#4B465C]"
                          key={index}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  {experience?.points && (
                    <div>
                      <h3 className="text-black !text-[14px] font-poppins font-semibold">
                        <MdKeyboardArrowRight className="inline-block text-2xl" />
                        Technologies Used:
                      </h3>
                      <ol className="my-5 list-decimal ml-5 space-y-2" type="1">
                        {experience?.points?.map((point, index) => (
                          <li
                            className="text-[#4B465C] font-normal pl-1 !text-[13px]"
                            key={`experience-point-${index}`}
                          >
                            {point}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* My Work Experience ends here */}

      <hr className="border-slate-200" />
      <CTA></CTA>
    </section>
  );
};

export default About;
