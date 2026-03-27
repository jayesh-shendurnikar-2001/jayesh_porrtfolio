// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/internshala.png';
import agcLogo from './assets/company_logo/bg1.jFIF';
import newtonschoolLogo from './assets/company_logo/ifuture.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/dbatu.JFIF';
import bsaLogo from './assets/education_logo/unnamed.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/weather.png';
import csprepLogo from './assets/work_logo/weather.png';
import movierecLogo from './assets/work_logo/yt.png';
import taskremLogo from './assets/work_logo/dealdorp.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer Intern",
    company: "Internshala Trainings",
    date: "09/2025 - 03/2026",
    desc: "Remote internship focusing on full stack development.\n• Engineered end-to-end MERN applications across frontend, backend, and database layers.\n• Designed REST APIs, improving data retrieval performance by 40%.\n• Accomplished JWT-based authentication and role-based access control.\n• Streamlined MongoDB queries to reduce response latency.\n• Deployed applications on Vercel and Render.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "Node JS",
      "React JS",
      "Express JS",
      "MongoDb",
      "TypeScript",
      "Api",
      "Tailwind CSS",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Software Developer",
    company: "Dhammagiri Digitech LLP",
    date: "09/2024 - 01/2026 Mumbai, India",
    desc: "Software development company specializing in digital solutions\n• Delivered and maintained 5+ production-grade applications using PHP and JavaScript\n• Integrated Razorpay payment gateway, reducing transaction failures by 25%\n• Improved system performance through SQL query optimization\n• Resolved production issues to enhance reliability and stability",
    skills: [
      "PHP",
      "JavaScript",
      "SQL",
      "Razorpay",
      "CSS",
      "HTML",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Software Development Intern",
    company: "iFuture Technologies Pvt. Ltd",
    date: "03/2023 - 08/2024 Mumbai, India",
    desc: "Internship focused on software development and responsive web applications\n• Built Java-based applications using Servlets, JDBC, and MySQL\n• Created responsive UI using HTML, CSS, JavaScript, and Bootstrap\n• Connected backend systems using MVC architecture\n• Contributed to Agile development processes",
    skills: [
      "Java",
      "Servlets",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React JS",
      "Redux",
      "Node JS",
      "Express JS",
      "MongoDb",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Dr Babasaheb Ambedkar Technological University, Maharashtra",
    date: "2019 - 2023",
    desc: "I completed my Bachelor of Technology (B.Tech) degree in Electronics and Telecommunication Engineering (ETE) from Dr Babasaheb Ambedkar Technological University.",
    degree: "B.Tech, Electronics and Telecommunication Engineering (ETE)",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Jai Hind Junior College, Dhule",
    date: "Year of completion: 2019",
    desc: "I completed my Senior Secondary (XII) education in Science from Jai Hind Junior College, Dhule, under the Maharashtra State Board of Secondary and Higher Secondary Education.",
    degree: "Senior Secondary (XII), Science",
  },
  {
    id: 2,
    img: bsaLogo,
    school: "Jai Hind High School, Dhule",
    date: "Year of completion: 2017",
    desc: "I completed my Secondary (X) education from Jai Hind High School, Dhule, under the Maharashtra State Board of Secondary and Higher Secondary Education.",
    degree: "Secondary (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "ShoppyGlobe: An E-commerce Application",
    description: "• Developed ShoppyGlobe, an e-commerce platform enabling product browsing, cart management, and smooth checkout experience.\n• Built a responsive UI using React, React Router, and Redux, integrating APIs for real-time data and efficient state management.",
    image: githubdetLogo,
    tags: ["React JS", "React Router", "Redux", "API"],
    github: "https://github.com/jayesh-shendurnikar-2001",
    webapp: "https://github.com/jayesh-shendurnikar-2001",
  },
  {
    id: 1,
    title: "Weather Forecast Application",
    description: "• Developed a responsive weather forecast application providing real-time, location-based updates with a user-friendly interface.\n• Integrated asynchronous APIs to fetch and dynamically display weather data, ensuring seamless user interaction across devices.",
    image: csprepLogo,
    tags: ["JavaScript", "API", "HTML", "CSS"],
    github: "https://training-uploads.internshala.com/javascript-fsd-pgc/uploads/projects/v_4/5163358/eps44u134jc-9074241.zip",
    webapp: "https://jayesh-web-app.vercel.app/",
  },
  {
    id: 2,
    title: "YouTube Clone",
    description: "YouTube Clone using MERN Stack\n• Built a full-stack video streaming platform with authentication and video upload functionality\n• Implemented JWT-based login and secure session management\n• Designed REST APIs for videos, comments, and user interactions\n• Developed responsive UI using React.js with performance optimization",
    image: movierecLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT", "REST API"],
    github: "#",
    webapp: "https://jayesh-yt.vercel.app/",
  },
  {
    id: 3,
    title: "Deal drop - Automated Price Monitoring System",
    description: "Smart Price Tracker application Created to help users track product prices efficiently\n• Developed a SaaS platform for tracking product prices across e-commerce platforms.\n• Automated tracking workflows, reducing manual effort by 90%\n• Integrated Google authentication with Supabase and Row-Level Security\n• Built analytics features and automated alerts for price drops",
    image: taskremLogo,
    tags: ["Supabase", "Row-Level Security", "Google Auth", "SaaS", "Automation"],
    github: "#",
    webapp: "https://getprice-tracker.vercel.app/",
  },
];  