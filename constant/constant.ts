import type { CertificateType } from '@/public/components/Home/Resume/CertificationCard';

// Navigation Links
export const NavLinks = [
  {
    id: 1,
    url: "#home",
    Label: "Home",
  },
  {
    id: 2,
    url: "#services",
    Label: "Services",
  },
  {
    id: 3,
    url: "#projects",
    Label: "Projects",
  },
  {
    id: 4,
    url: "#skills",
    Label: "Skills",
  },
  {
    id: 5,
    url: "#education",
    Label: "Education",
  },
  {
    id: 6,
    url: "#resume",
    Label: "Resume",
  },
  {
    id: 7,
    url: "#contact",
    Label: "Contact",
  },
];

//Services Section Data
export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "I design and develop comprehensive web applications from the ground up, ensuring seamless integration between the frontend and backend. My approach prioritizes clean architecture, robust performance, and scalable infrastructure to deliver high-quality, reliable digital solutions.",
    icon: "FaLaptopCode"
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "I craft highly responsive, visually engaging, and accessible user interfaces utilizing modern web technologies such as HTML5, CSS3, JavaScript, and Tailwind CSS. My focus is on creating intuitive digital experiences that perform flawlessly across all devices and screen sizes.",
    icon: "FaCode"
  },
  {
    id: 3,
    title: "Backend Development",
    description: "I engineer secure and scalable RESTful APIs, meticulously manage complex CRUD operations, and implement efficient server-side business logic. Leveraging the MERN Stack and Spring Boot, I build robust database architectures that power dynamic applications.",
    icon: "FaServer"
  }
];

//Projects Section Data
export const projectsData = [
  {
    id: 1,
    title: "CrackCode – Gamified Coding Learning Platform",
    description: "A full-stack gamified coding platform that transforms programming practice into an interactive detective-style experience. Users solve coding challenges, earn XP, unlock badges, and track progress through a personalized dashboard. Contributed to frontend development and API integration, focusing on responsive UI and user experience.",
    tech: ["MERN Stack",
      "Tailwind CSS",
      "JWT Authentication",
      "Redis",
      "Judge0 API",
      "Docker"],
    image: "/images/assets/CrackCode.png",
    githubUrl: "https://github.com/CrackCode-dev/CrackCode-Main"
  },
  {
    id: 2,
    title: "BetterMe",
    description: "A health and wellness website promoting good health and well-being through content on mental health, physical health, nutrition, and lifestyle habits ",
    tech: ["HTML5", "CSS3", "JavaScript", "SVG"],
    image: "/images/assets/BetterMe.jpg",
    githubUrl: "https://github.com/Ama-Dombawela/BetterMe"
  },
  {
    id: 3,
    title: "GearRent Pro",
    description: "A multi-branch equipment rental system designed to manage reservations, rentals, returns, pricing, and customer memberships. It includes role-based access control and reporting features to streamline and automate rental operations across different branches.",
    tech: ["Java",
      "Java Swing",
      "Layered Architecture",
      "MySQL"],
    image: "/images/assets/GearRentPro.png",
    githubUrl: "https://github.com/Ama-Dombawela/GearRent-Pro"
  },

  {
    id: 4,
    title: "Smart Campus API",
    description: "A RESTful backend system for managing university campus infrastructure, including Rooms, Sensors, and Sensor Readings. It supports hierarchical resource design, in-memory data management, and HATEOAS-based API navigation with structured exception handling and business rule enforcement.",
    tech: [
      "Java",
      "JAX-RS (Jersey)",
      "Apache Tomcat",
      "RESTful API"
    ],
    image: "/images/assets/SmartCampusAPI.png",
    githubUrl: "https://github.com/Ama-Dombawela/Smart-Campus-API"
  },

  {
    id: 5,
    title: "Traffic Data Analyzer & Visualizer",
    description: "A Python application that analyzes traffic CSV datasets to generate key vehicle statistics and visualize hourly traffic flow using histograms with Tkinter. It processes multiple junction datasets, validates user input, and produces summarized traffic reports with saved results.",
    tech: [
      "Python",
      "Tkinter",
      "CSV",
      "File Handling"
    ],
    image: "/images/assets/TrafficDataAnalyser.png",
    githubUrl: "https://github.com/Ama-Dombawela/traffic-flow-analyzer-visualizer"
  },
  {
    id: 6,
    title: "Online Food Ordering System",
    description: "An online food ordering system with full CRUD operations for managing users, food items, carts, and orders.",
    tech: [
      "Spring Boot",
      "MySQL",
      "TypeScript",
      "Tailwind CSS"
    ],
    image: "/images/assets/FoodOrderingSys.jpg",
    githubUrl: "https://github.com/Ama-Dombawela/Online-Food-Ordering-System"
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website  showcasing my skills, projects, and solutions in the tech field",
    tech: [
      "next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: "/images/assets/Portfolio.jpg",
    githubUrl: "https://github.com/Ama-Dombawela/Portfolio"
  }

];

//Skills Section Data
export const skillsData = [

  {
    category: "Programming Languages",
    skills: [
      { id: 1, name: "Java(Major)", percent: 90 },
      { id: 2, name: "Python ", percent: 65 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { id: 3, name: "HTML5 & CSS3", percent: 95 },
      { id: 4, name: "JavaScript", percent: 70 },
      { id: 5, name: "Tailwind CSS", percent: 50 },
      { id: 6, name: "Responsive Web Design", percent: 90 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { id: 7, name: "Node.js", percent: 65 },
      { id: 8, name: "Express.js", percent: 65 },
      { id: 9, name: "Spring Boot (Basics)", percent: 70 },
      { id: 10, name: "REST API Development", percent: 85 },
      { id: 16, name: "PHP", percent: 95 }
    ]
  },
  {
    category: "Database",
    skills: [
      { id: 11, name: "MySQL", percent: 95 },
      { id: 12, name: "MongoDB", percent: 60 }
    ]
  },


  {
    category: "Tools",
    skills: [
      { id: 13, name: "Git & GitHub", percent: 90 },
      { id: 14, name: "VS Code,NetBeans,IntelliJ IDEA", percent: 95 },
      { id: 15, name: "Postman", percent: 85 },
      { id: 17, name: "Figma", percent: 70 }
    ]
  }
];

//Education Section Data
export const educationData = [
  {
    id: 1,
    degree: "BSc (Hons) Computer Science",
    institution: "University of Westminster (IIT)",
    year: "Jan 2024 – Present",
    description: [
      "Successfully completed first year with 120 credits and currently progressing as a third-year undergraduate",
      "Awaiting second-year results while continuing to develop skills in software development and full-stack technologies"
    ]
  },
  {
    id: 3,
    degree: "G.C.E. Advanced Level (Arts Stream)",
    institution: "Ave Maria Convent Negombo",
    year: "Jan 2025 – Jan 2026",
    description: [
      "Completed G.C.E. Advanced Level as a private candidate, studying ICT, Economics, and Geography",
      "Achieved 3 C passes"
    ]
  },
  {
    id: 2,
    degree: "Foundation Programme (Computing Pathway)",
    institution: "Foundation Programme from Informatics Institute of Technology(IIT)",
    year: "Sep 2023 – Sep 2024",
    description: [
      "Completed foundation programme in Computing, covering programming, mathematics, and data handling fundamentals",
      "Developed core skills in problem-solving, logical thinking, and designing innovative digital solutions",
      "Built academic and communication skills required for higher education, preparing for undergraduate Computer Science studies"
    ]
  },
  {
    id: 4,
    degree: "G.C.E. Ordinary Level",
    institution: "Ave Maria Convent Negombo",
    year: "Jan 2012 – May 2023",
    description: [
      "Completed with 7 A passes and 2 B passes"
    ]
  }
];

//Resume Section Data
export const experienceData = [
  {
    id: 1,
    role: "Co-Founder ",
    company: "CrackCode (Self-employed)",
    year: "Sep 2025 - Present",
    description: [
      "Served as a Full Stack Developer within the development team, contributing to both frontend and backend implementation",
      "Developed full-stack features using the MERN stack, including the gamer profile with complete frontend and backend integration",
      "Built the Career Map feature, enabling users to explore and select personalized software development career paths",
      "Designed and implemented the backend pipeline for coding question generation, management, and delivery system"
    ]
  },
];

export const certificationData = [
  {
    id: 1,
    title: 'LinkedIn Certifications',
    issuer: 'LinkedIn Learning',
    year: '',
    type: 'certification' as CertificateType,
  },
  {
    id: 2,
    title: 'Sololearn Certifications',
    issuer: 'Sololearn',
    year: '',
    type: 'certification' as CertificateType,
    
  },
  {
    id: 3,
    title: 'Comprehensive Master Java Developer (CMJD)',
    issuer: 'IJSE – Institute of Software Engineering',
    year: 'May 2025 – May 2026',
    type: 'certification' as CertificateType,
  },
  {
    id: 4,
    title: 'IEEE Student Member',
    issuer: 'IEEE Student Branch – Informatics Institute of Technology',
    year: 'Issued Aug 2025 · Expires Aug 2026',
    type: 'membership' as CertificateType,
    credentialId: '101177102',
  },
  {
    id: 5,
    title: 'IEEE CS Global Membership',
    issuer: 'IEEE Computer Society',
    year: 'Issued Aug 2025 · Expires Aug 2026',
    type: 'membership' as CertificateType,
    credentialId: '101177102',
  },
  {
    id: 6,
    title: 'Hult Prize',
    issuer: 'Informatics Institute of Technology',
    year: '2026',
    type: 'participation' as CertificateType,
  },
  {
    id: 7,
    title: 'DevQuest Contest',
    issuer: 'SLIIT CODEFEST',
    year: '2025',
    type: 'participation' as CertificateType,
  },
];