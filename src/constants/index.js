import {
  shirt,
  gpt,
  gym,
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  motion,
  react,
  redux,
  sass,
  tailwindcss,
  logicDesigns,
  vigorant,
  university,
  flexiApps,
  next,
  figma,
  bootstrap,
  jquery,
  docker,
  postman,
  c,
  machineLanguage,
} from "../assets/icons";

import { shirtsWebsite, gptWebsite, fitWebsite } from "../assets/images";

export const skills = [
  {
    imageUrl: next,
    name: "Next JS",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Backend",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "frontend",
  },
  {
    imageUrl: css,
    name: "CSS3",
    type: "Frontend",
  },

  {
    imageUrl: html,
    name: "HTML5",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript7",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: jquery,
    name: "jQuery",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },

  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: c,
    name: "C Language",
    type: "Frontend",
  },
  {
    imageUrl: machineLanguage,
    name: "Machine Language",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Senior Frontend Developer",
    company_name: "Vigorant",
    companyDescription:
      "Creating medical websites for USA clients like doctors and clinics.",
    icon: vigorant,
    iconBg: "#20AEB8",
    date: "Jan 2024 - now",
    projects: "Patient Forms",
    projectDescription: [
      "Instead of giving patients hard copied papers to be filled which lacks of color and not user friendly, we made it into a real live website, so that they can submit it anytime anywhere with zero effort, and their data will be saved, so that doctors or clients can check it at any time.",
      "Worked with the backend, frontend developers along with the UI designers to make it into reality, starting from creating all forms from scratch, added validations to the inputs, added backend connectivity, creating sign up and login functions, creating dashboard or client perspective, made it responsive and user friendly, until it has been delivered to our clients.",
    ],
    points: [
      "Used Next JS and created the website from scratch using it.",
      "Used Redux as state management tool.",
      "Used Postman  along with Axios to get the APIS responses from backend and make CRUD   operations.",
      "Used Docker to run backend containers.",
      "Used Azure Devops to host the code.",
      "Used Yup validation to make full validation to the forms.",
      "Used Material UI in the stepper and also material-react-table for the table view.",
      "Used react-to-print to download HTML pages as PDF.",
      "Applied HIPAA(Health Insurance Portability and Accountability Act) compliance in the project.",
      "Used Figma designs and applied it into real live project.",
      "Used Tailwind for the styling of the project.",
      "Used regex expressions for the inputs validations.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Flexi Apps",
    companyDescription:
      "Creating dashboards and landing pages for Saudi Arabia clients.",
    icon: flexiApps,
    iconBg: "#006eca",
    date: "Feb 2023 - Jan 2024",
    projects: "Saudi Salons",
    projectDescription: [
      "Creating websites for companies and small projects like beauty salons.",
    ],
    points: [
      "Used React JS and created the website from scratch using it.",
      "Used Redux as state management tool.",
      "Used Postman  along with Axios to get the APIS responses from backend and make CRUD   operations.",
      "Used Material UI in some components.",
      "Used Figma designs and applied it into real live project.",
      "Used Tailwind for the styling of the project.",
      "Used Bitbucket to host the code.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Logic Designs",
    companyDescription:
      "Creating landing pages for multiple clients in multiple fields.",
    icon: logicDesigns,
    iconBg: "#1979b1",
    date: "March 2022 - Jan 2023",
    // projects: "Patient Forms",
    projectDescription: [
      "Creating websites that are fully responsive, user friendly with the latest technologies.",
    ],
    points: [
      "Used React JS and created the website from scratch using it.",
      "Used Axios to get the APIS responses from backend and make CRUD operations.",
      "Used Figma designs and applied it into real live project.",
      "Used CSS3  for the styling of the project.",
    ],
  },

  {
    title: "Electronics and Communication Engineer",
    company_name:
      "Bachelor's degree from Faculty of Engineering, Zagazig University",
    icon: university,
    companyDescription: "Graduated from faculty of Engineering.",
    iconBg: "#ebd834",
    date: "May 2014 - May 2019",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: shirt,
    imageUrl: shirtsWebsite,
    theme: "btn-back-red",
    name: "Hey Shirts",
    description:
      "MY first 3D website, that allows you to design your own shirt!, by choosing your preferred color. You can even choose any photo that you prefer, and then you can print it fully on it, or as a logo.",
    gitHubLink: "https://github.com/mona9855/Hey-Shirts",
    liveLink: "https://hey-shirts.vercel.app/",
  },
  {
    iconUrl: gpt,
    imageUrl: gptWebsite,
    theme: "btn-back-blue",
    name: "GPT3 Assistant",
    description:
      "This project was done by converting a Figma design into a live amazing website. It's about understanding and learning the power of GPT3 OpenAI.",
    gitHubLink: "https://github.com/mona9855/GPT3-Assistant",
    liveLink: "https://gpt3-assistant.vercel.app/",
  },
  {
    iconUrl: gym,
    imageUrl: fitWebsite,
    theme: "btn-back-pink",
    name: "Fit Club",
    description:
      "This website is for a Gym project, that shows all of its advantages and why to choose them.",
    gitHubLink: "https://github.com/mona9855/Fit-Club",
    liveLink: "https://fit-club-alpha.vercel.app/",
  },
];
