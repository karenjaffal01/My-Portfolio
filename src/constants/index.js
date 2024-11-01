import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  aws,
  zaka,
  tutor,
  techlarious,
  c,
  java,
  python,
  portfolio,
  fiora,
  tea,
  threejs,
  X,
  linkedIn,
  instagram,
  facebook,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C/C++",
    icon: c,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Techlarious",
    icon: techlarious,
    iconBg: "#383E56",
    date: "July 2024 - Oct 2024",
    points: [
      "Developing and maintaining web applications using MERN stack and other related technologies.",
      "Collaborating with teams to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Private Tutor",
    company_name: "Freelance",
    icon: tutor,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      " I developed strong communication skills by explaining complex concepts clearly to students.",
      " My problem-solving skills improved as I adapted lessons to address individual student needs and learning obstacles.",
      " I honed my organizational abilities through planning and management",
    ],
  },
];

const certificates = [
  {
    id: 1,
    text: "This certificate showcases all the cloud skills I gained through my AWS re/Start journey which made me gain all the foundations in working with the cloud and how to benefit from the services it provided alongside applying all my knowledge with AWS directly ",
    link: "coming soon",
    designation: "Cloud Practitioner",
    company: "AWS",
    image: aws,
  },
  {
    id: 2,
    text: "Through 9 courses I gained this certificate where I worked on various web technologies and done projects to fully grasp all the concepts making me skilled in building responsive and interactive user-interfaces",
    link: "https://www.credly.com/badges/3c1da8dd-4f52-4504-8ca1-c872c828a5c3",
    designation: "Front-End Developer",
    company: "META",
    image: meta,
  },
  {
    id: 3,
    text: "I dived into all the core concepts of machine learning which made me get a solid foundation on everything needed to dive deep into AI and machine learning alongside with on-hands projects that shows everything I learned",
    link: "coming soon",
    designation: "ML Specialization",
    company: "ZAKA",
    image: zaka,
  },
];

const projects = [
  {
    name: "Tea House",
    description:
      "Web-based platform that allows users to search and buy different kind of tea from various providers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tea,
    source_code_link: "https://github.com/karenjaffal01/tea-house.git",
  },
  {
    name: "Fiora Hand-bags",
    description:
      "Web application that enables users to search for hand bags and view new bags in stock to get updated",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: fiora,
    source_code_link:
      "https://github.com/karenjaffal01/Fiora-handbags-tailwind.git",
  },
  {
    name: "Portfolio",
    description:
      "A 3D animated portfolio showcasing all the skills and experience I have and everything I have gained so far.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/karenjaffal01/My-Portfolio.git",
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com",
  },
  {
    src: X,
    alt: "twitter logo",
    link: "https://x.com/KarenJaffa77028",
  },
  {
    src: instagram,
    alt: "instagram logo",
    link: "https://www.instagram.com/karen.jaffal/",
  },
  {
    src: linkedIn,
    alt: "linkedIn logo",
    link: "https://www.linkedin.com/in/karen-jaffal-492170303/",
  },
];

export { services, technologies, experiences, certificates, projects };
