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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  chromahift,
  carForces,
  purplestore,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Coding Educator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Undergraduate Applied Research Assistant",
    company_name: "WebTactics",
    date: "Jan 2024 - Present",
    points: [
      "Developed AI assistant, transforming basic job postings into captivating narratives. This initiative revolutionized the recruitment process by enhancing engagement and attracting top-tier talent. Utilized GPT and Python.",
      "Designed and implemented a dynamic user interface using cutting-edge technologies such as NEXTJS, React, Typescript, and MongoDB, enabling seamless interaction between administrators, customers, and the AI assistant.",
      "Co-piloted the deployment of the AI assistant on Azure, ensuring scalability, reliability, and optimal performance to meet the evolving needs of the recruitment industry."
    ]
  },
  {
    title: "Applied Researcher & Software Developer Internship",
    company_name: "Seneca Applied Research, Seneca Polytechnic & Linksport",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Led development of a sport action recognition model using TensorFlow, NVIDIA TAO, achieving a significant 40% increase in classification accuracy and a streamlined 25% reduction in processing time.",
      "Collaborated with cross-functional teams to create a front-end UI with React, enabling athletes to receive personalized feedback on their performances in real-time."
    ]
  },
  {
    title: "Teaching Assistant",
    company_name: "Code First Girls",
    date: "Apr 2023 - Sep 2023",
    points: [
      "Led boot camps in Python, Data Analysis, & Web Development for 30+ enthusiasts, refining communication.",
      "Crafted inclusive curriculum, achieving 80% success rate in guiding diverse women into tech roles; taught Python, Git, JavaScript, MySQL, PowerBI, and Selenium."
    ]
  },
  {
    title: "Front-end Developer Internship",
    company_name: "Waka Coding",
    date: "May 2022 - Jan 2023",
    points: [
      "Implemented user experience enhancements using React, Typescript, and Tailwind CSS, resulting in a 15% surge in website traffic and a 20% improvement in customer engagement.",
      "Enhanced the codebase with optimizations in React, Django, and MongoDB, resulting in a significant 30% reduction in page load times and increased application reliability through rigorous testing with Selenium."
    ]
  }
];


const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Chromashift",
    description:
      "This project combines the power of Next.js for server-rendered React applications with Sass for styling and AI-powered photo transformation capabilities.",
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
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chromahift,
    source_code_link: "https://github.com/MARYANNE67/chromashift",
  },
  {
    name: "Purple Store",
    description:
      "An E-commerce store built with Django and JavaScript, offering a seamless shopping experience for customers seeking quality products.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: purplestore,
    source_code_link: "https://github.com/MARYANNE67/ecommerce_store",
  },
  {
    name: "Car Forces",
    description: "Revolutionize your travel experience with Car Forces, an all-in-one platform for booking flights, hotels, and rental cars. Explore curated recommendations for top destinations and embark on unforgettable journeys with ease.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "reactjs",
        color: "green-text-gradient"
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: carForces,
    source_code_link: "https://github.com/MARYANNE67/carForces"
  }  
];

export { services, technologies, experiences, testimonials, projects };
