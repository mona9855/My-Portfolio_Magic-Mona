
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

// export const experiences = [
//     {
//         title: "",
//         company_name: "",
//         icon: null,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
    
// ];

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