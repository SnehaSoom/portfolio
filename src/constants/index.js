import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Techy_Globiz,
  Sawalsha_Leasing_Finance_Pvt_Ltd,
  National_Informatics_Centre,
  Magic_Software,
  National_Building_Construction_Corporation_Limited,
  carrent,
  jobit,
  tripguide,
  threejs,
  frontend,
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Sawalsha Leasing & Finance Pvt. Ltd.",
    icon: Sawalsha_Leasing_Finance_Pvt_Ltd,
    iconBg: "#ffffff",
    date: "Nov 2024 - Mar 2025",
    points: [
      "Designed and developed a comprehensive HRMS with features like employee management, payroll processing, and attendance tracking, along with a dynamic, user-friendly website.",
     "Managed backend development, implementing robust database management and server-side logic to support HRMS functionalities.",
     "Created and integrated APIs for efficient data exchange, enhancing system interoperability, while also handling additional website projects.",
     "Enhanced application performance by 25% and user experience through front-end features developed with ReactJS and Redux for state management.",
     "Improved React best practices mastery by 50% and reduced user-reported bugs by 20% in an Agile environment through code reviews and pair programming.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "National Informatics Centre",
    icon: National_Informatics_Centre,
    iconBg: "#ffffff",
    date: "April 2022 - Jun 2024",
    points: [
      "Designed and developed over 10 software systems, including custom dashboards, login pages, and Drag and Drop functionalities from scratch.",
      "Key contributor to the ABHA feature in the Aarogya Setu app, enabling user health status input for public health monitoring.",
      "Created an efficient Feedback Form to enhance user interactions, improving the collection of user feedback and addressing customer concerns.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Magic Software Pvt Ltd",
    icon: Magic_Software,
    iconBg: "#ffffff",
    date: "Feb 2021 - Feb 2022",
    points: [
      "Developed educational so􀅌ware across mul􀆟ple subjects and created accessible content packages using HTML5, CSS, and JavaScript to enhance learning experiences.",
      "Utilized Subversion (SVN) for version control, ensuring the maintenance of current and historical versions of source code, web content, and documentation.",
      "Developed and customized WordPress websites, aligning with client needs and demonstrating web development expertise.",
      "Presented website proposals and provided technical support, ensuring client satisfaction and resolving issues efficiently.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
