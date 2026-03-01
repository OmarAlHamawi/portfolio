import { Github, Linkedin, Mail } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Omar Al-Hamawi",
  title: "Full-Stack Software Engineer",
  email: "omar.alhamawi@outlook.com",
  tagline: "Building robust enterprise solutions with Spring Boot & React. Certified Java Professional dedicated to clean code and scalable architecture.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-al-hamawi-68556629a/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/OmarAlHamawi", icon: Github },
    { label: "Email", href: "mailto:omar.alhamawi@outlook.com", icon: Mail },
  ],
};

export const SKILLS = [
  "Java 17/21", "Spring Boot 3", "React.js", "TypeScript", 
  "PostgreSQL", "Docker", "Jenkins", "Tricentis Tosca", 
  "Microservices", "CI/CD", "JUnit", "Cypress"
];

export const EXPERIENCE = [
  {
    company: "QPROS",
    role: "Quality Control Engineer",
    period: "Oct 2025 - Present",
    description: "Ensuring software excellence through advanced manual and automated testing strategies.",
    highlights: [
      "Managing full defect lifecycles using Jira.",
      "Leveraging Tricentis Tosca for regression testing automation.",
      "Executing manual and exploratory testing to align with business requirements."
    ]
  },
  {
    company: "Network International",
    role: "Software Engineer Intern",
    period: "July 2024 - March 2025",
    description: "Developed a secure User Management System for fintech operations.",
    highlights: [
      "Built backend microservices using Java 17, Spring Boot 3, and PostgreSQL.",
      "Implemented secure JWT authentication and Role-Based Access Control (RBAC).",
      "Set up CI/CD pipelines using Jenkins and Dockerized applications."
    ]
  }
];

export const PROJECTS = [
  {
    title: "ScholarMatchJo",
    tech: ["Spring Boot", "React", "MySQL", "Figma"],
    description: "A centralized platform bridging the gap between Jordanian students and scholarship opportunities.",
    links: { github: "https://github.com/OmarAlHamawi", demo: "#" } 
  },
  {
    title: "User Management System",
    tech: ["Java 17", "Spring Boot 3", "PostgreSQL", "JWT"],
    description: "A secure, scalable internal tool for managing user hierarchies and permissions.",
    links: { github: "https://github.com/OmarAlHamawi", demo: "#" }
  }
];
export const CERTIFICATIONS = [
  {
    name: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle University",
    date: "Jan 12, 2026",
    credentialId: "102855931OCPJSE17",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6ECDFEC967ECB286B7F95EBCC0DE0A26184C0B13F7BF71F98FBCE192DC252861",
    file: "/oracle-Certificate.pdf"
  },
  {
    name: "Tricentis Tosca Product Consultant Certification Exam",
    issuer: "Tricentis",
    date: "Nov 19, 2025",
    credentialId: "C22191",
    link: null,
    file: "/tricentis-Certificate.pdf" 
  },
  {
    name: "Master Spring Boot 3 & Spring Framework 6 with Java",
    issuer: "Udemy",
    date: "Aug 13, 2024",
    credentialId: "UC-aabd829e-6bca-4cc6-b260-808c77a028e3",
    link: "https://ude.my/UC-aabd829e-6bca-4cc6-b260-808c77a028e3",
    file: null
  },
  {
    name: "Java 17 Masterclass: Start Coding in 2024",
    issuer: "Udemy",
    date: "July 22, 2024",
    credentialId: "UC-b6b0a57f-b954-4969-88cf-3efdda1d4e56",
    link: "https://ude.my/UC-b6b0a57f-b954-4969-88cf-3efdda1d4e56",
    file: null
  },
  {
    name: "Java Certificat Prep: OCA (1Z0-808) & OCP",
    issuer: "Udemy",
    date: "Jan 12, 2026",
    credentialId: "UC-8b286191-6271-4122-9a7a-e8951158e90c",
    link: "https://ude.my/UC-8b286191-6271-4122-9a7a-e8951158e90c",
    file: null
  },
  {
    name: "Complete ASP.NET Core and Entity Framework",
    issuer: "Udemy",
    date: "Aug 27, 2025",
    credentialId: "UC-91bd1de1-cef5-4222-8308-fec70adb278c",
    link: "https://ude.my/UC-91bd1de1-cef5-4222-8308-fec70adb278c",
    file: null
  },
  {
    name: "Microsoft Excel - Excel from Beginner to Advanced",
    issuer: "Udemy",
    date: "Feb 26, 2022",
    credentialId: "UC-7742602a-3636-4849-b46c-4955b3ee5fd4",
    link: "https://ude.my/UC-7742602a-3636-4849-b46c-4955b3ee5fd4",
    file: null
  },
  {
    name: "Powerpoint 2016 2019 365 - Master presentation",
    issuer: "Udemy",
    date: "Oct 22, 2022",
    credentialId: "UC-cec07c55-d53c-4199-bfa4-bd65d5149de5",
    link: "https://ude.my/UC-cec07c55-d53c-4199-bfa4-bd65d5149de5",
    file: null
  }
];