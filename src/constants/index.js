
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
    company1,
    freelancer,
    university,
} from "../assets/icons";

import {
    shirtsWebsite,
    gptWebsite,
    fitWebsite,
} from '../assets/images';

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
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
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    

    {
        title: "Freelancer frontend developer",
        company_name: "",
        icon: freelancer,
        iconBg: "#58eb34",
        date: "July 2023 - now",
        points: [
            "Learned new tools such as 'Tailwind CSS', 'EmailJS', 'Framer Motion' and 'Three JS'.",
            "Build amazing websites, which you can find in my Projects section.",
            "I am still learning new tools everyday, and working on myself to be better and be the best version of me.",   
        ],
    },
    {
        title: "Remote frontend developer",
        company_name: "Logic Designs",
        icon: company1,
        iconBg: "#34ebd2",
        date: "February 2023 - July 2023",
        points: [
            "Translated complex design requirements into interactive user experiences to promote customer engagement and drive web traffic.",
            "Built and tested application functionality to ensure a desirable user experience across all platforms.",
            "Optimized page elements to reduce loading time and debugged code to ensure cross-browser usability.",
            "Successfully collaborated with other developers and designers to continually expand application capabilities.",
        ],
    },
    {
        title: "Electronics and Communication Engineer",
        company_name: "Faculty of Engineering, Zagazig University",
        icon: university,
        iconBg: "#ebd834",
        date: "May 2014 - May 2019",
        points: [
            "Graduated from faculty of Engineering.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: shirt,
        imageUrl: shirtsWebsite,
        theme: 'btn-back-red',
        name: 'Hey Shirts',
        description: 'MY first 3D website, that allows you to design your own shirt!, by choosing your preferred color. You can even choose any photo that you prefer, and then you can print it fully on it, or as a logo.',
        gitHubLink: 'https://github.com/mona9855/Hey-Shirts',
        liveLink: 'https://hey-shirts.vercel.app/',

    },
    {
        iconUrl: gpt,
        imageUrl: gptWebsite,
        theme: 'btn-back-blue',
        name: 'GPT3 Assistant',
        description: "This project was done by converting a Figma design into a live amazing website. It's about understanding and learning the power of GPT3 OpenAI.",
        gitHubLink: 'https://github.com/mona9855/GPT3-Assistant',
        liveLink: 'https://gpt3-assistant.vercel.app/',
    },
    {
        iconUrl: gym,
        imageUrl: fitWebsite,
        theme: 'btn-back-pink',
        name: 'Fit Club',
        description: "This website is for a Gym project, that shows all of its advantages and why to choose them.",
        gitHubLink: 'https://github.com/mona9855/Fit-Club',
        liveLink: 'https://fit-club-alpha.vercel.app/',
    },
    
];