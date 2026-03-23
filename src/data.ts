import { Github, Linkedin, Mail } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Omar Al-Hamawi",
  title: "Full-Stack Software Engineer",
  email: "omar.alhamawi@outlook.com",
  tagline: "Oracle Certified Software Engineer specializing in scalable Spring Boot architectures and React interfaces. Passionate about delivering secure, high-performance enterprise solutions with uncompromising code quality.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-al-hamawi-68556629a/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/OmarAlHamawi", icon: Github },
    { label: "Email", href: "mailto:omar.alhamawi@outlook.com", icon: Mail },
  ],
};

export const SKILLS = [
  // Core Languages & Frameworks
  "Java (17/21)", "Spring Boot 3", "React.js", "TypeScript", 
  "C#", "ASP.NET Core", "JavaScript", "Node.js",
  
  // Architecture, APIs & Security
  "Microservices", "RESTful APIs", "JWT Auth & RBAC",
  
  // Databases & DevOps
  "PostgreSQL", "MySQL / SQL", "Docker", "CI/CD (Jenkins)",
  
  // Testing, Tools & Design
  "Tricentis Tosca", "JUnit & Cypress", "Git & GitHub", "Postman"
];

export const EXPERIENCE = [
  {
    company: "Quality Professionals - QPROS",
    role: "Quality Control Engineer",
    period: "Oct 2025 - Present",
    description: "Driving software quality and testing strategy for a massive, highly regulated enterprise system.",
    highlights: [
      "Engineered comprehensive test cases and step-by-step execution flows, serving as the foundational blueprint for the QA automation team.",
      "Managed the end-to-end defect lifecycle using Jira, actively facilitating technical triage sessions with developers to align on testing methodologies and expedite bug resolution.",
      "Conducted deep-dive requirement analysis sessions, frequently collaborating directly with clients and stakeholders to clarify complex business logic and missing edge cases.",
      "Executed rigorous manual and exploratory testing across a large-scale system to ensure strict adherence to intricate business requirements."
    ]
  },
  {
    company: "Network International",
    role: "Software Engineer Intern",
    period: "July 2024 - March 2025",
    description: "Engineered a secure, full-stack User Management System for fintech operations.",
    highlights: [
      "Developed full-stack architecture featuring secure JWT authentication, Role-Based Access Control (RBAC), and complete user CRUD operations.",
      "Built and optimized backend microservices utilizing Java 17, Spring Boot 3, and PostgreSQL to ensure enterprise-level scalability and maintainability.",
      "Streamlined deployment cycles by implementing automated CI/CD pipelines with Jenkins and containerizing applications via Docker.",
      "Elevated code quality and system reliability by conducting comprehensive unit and integration testing with JUnit, alongside E2E testing with Cypress.",
      "Collaborated within a fast-paced Agile team environment, actively participating in sprint planning, daily stand-ups, and peer code reviews."
    ]
  }
];

export const PROJECTS = [
  {
    title: "ScholarMatchJo",
    tech: ["Java 17", "Spring Boot", "Python", "FastAPI", "React", "PostgreSQL", "GitHub", "Figma"],
    description: "A comprehensive web platform engineered to connect Jordanian students with targeted scholarship opportunities. Features advanced search and matching algorithms with a highly responsive user dashboard.",
    links: { github: "https://github.com/OmarAlHamawi/Scholar-Match-jo", demo: "#" } 
  },
  {
    title: "User Management System",
    tech: ["Java 17", "Spring Boot 3", "React", "PostgreSQL", "JWT", "Docker", "Jenkins"],
    description: "An enterprise-grade internal application developed at Network International as an intern project. Architected with robust JWT authentication, strict role-based access control (RBAC), and automated CI/CD pipelines for seamless deployment.",
    links: { github: "https://github.com/OmarAlHamawi/UsermanagementApp", demo: "https://user-management-app-frontend-sand.vercel.app/" }
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
    name: "Java Certificat Prep: OCA (1Z0-808) & OCP",
    issuer: "Udemy",
    date: "Jan 12, 2026",
    credentialId: "UC-8b286191-6271-4f22-9a7a-e8951158e90c",
    link: "https://www.udemy.com/certificate/UC-8b286191-6271-4f22-9a7a-e8951158e90c",
    file: null
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
    name: "Complete ASP.NET Core and Entity Framework",
    issuer: "Udemy",
    date: "Aug 27, 2025",
    credentialId: "UC-91bd1de1-cef5-4222-8308-fec70adb278c",
    link: "https://ude.my/UC-91bd1de1-cef5-4222-8308-fec70adb278c",
    file: null
  },
  {
    name: "Google Advanced Data Analytics",
    issuer: "Coursera",
    date: "Nov 17, 2024",
    credentialId: "CYG64ZK4CPML",
    link: "https://www.coursera.org/account/accomplishments/specialization/CYG64ZK4CPML",
    file: null
  },
  {
    name: "The Nuts and Bolts of Machine Learning",
    issuer: "Coursera",
    date: "Dec 15, 2024",
    credentialId: "J0NRJLUAV84G",
    link: "https://www.coursera.org/account/accomplishments/verify/J0NRJLUAV84G",
    file: null
  },
  {
    name: "Regression Analysis: Simplify Complex Data Relationships",
    issuer: "Coursera",
    date: "Dec 10, 2024",
    credentialId: "BBDWTESTKLQ0",
    link: "https://www.coursera.org/account/accomplishments/verify/BBDWTESTKLQ0",
    file: null
  },
  {
    name: "The Power of Statistics",
    issuer: "Coursera",
    date: "Dec 6, 2024",
    credentialId: "E9545AKXS6GH",
    link: "https://www.coursera.org/account/accomplishments/verify/E9545AKXS6GH",
    file: null
  },
  {
    name: "Go Beyond the Numbers: Translate Data into Insights",
    issuer: "Coursera",
    date: "Nov 27, 2024",
    credentialId: "4M718I2L1NIO",
    link: "https://www.coursera.org/account/accomplishments/verify/4M718I2L1NIO",
    file: null
  },
  {
    name: "Get Started with Python",
    issuer: "Coursera",
    date: "Nov 26, 2024",
    credentialId: "HG9TQTZ0X5A5",
    link: "https://www.coursera.org/account/accomplishments/verify/HG9TQTZ0X5A5",
    file: null
  },
  {
    name: "Foundations of Data Science",
    issuer: "Coursera",
    date: "Nov 26, 2024",
    credentialId: "GYUMQ2K7TK36",
    link: "https://www.coursera.org/account/accomplishments/verify/GYUMQ2K7TK36",
    file: null
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
    name: "Powerpoint 2016 2019 365 - Master presentation",
    issuer: "Udemy",
    date: "Oct 22, 2022",
    credentialId: "UC-cec07c55-d53c-4199-bfa4-bd65d5149de5",
    link: "https://ude.my/UC-cec07c55-d53c-4199-bfa4-bd65d5149de5",
    file: null
  },
  {
    name: "Microsoft Excel - Excel from Beginner to Advanced",
    issuer: "Udemy",
    date: "Feb 26, 2022",
    credentialId: "UC-7742602a-3636-4849-b46c-4955b3ee5fd4",
    link: "https://ude.my/UC-7742602a-3636-4849-b46c-4955b3ee5fd4",
    file: null
  }
];


export const PERSONAL_INFO_AR = {
  name: "عمر الحموي",
  title: "مهندس برمجيات متكامل (Full-Stack)",
  email: "omar.alhamawi@outlook.com",
  tagline: "مهندس برمجيات معتمد من Oracle متخصص في بناء هياكل Spring Boot القابلة للتوسع وواجهات React. شغوف بتقديم حلول مؤسسية آمنة وعالية الأداء مع الالتزام بأعلى معايير جودة الكود.",
  social: PERSONAL_INFO.social, 
};

export const SKILLS_AR = SKILLS;

export const EXPERIENCE_AR = [
  {
    company: "Quality Professionals - QPROS",
    role: "مهندس ضبط الجودة (Quality Control Engineer)",
    period: "أكتوبر 2025 - الحاضر",
    description: "قيادة استراتيجية فحص الجودة لنظام مؤسسي ضخم وعالي التنظيم.",
    highlights: [
      "تصميم حالات اختبار شاملة وخطوات تنفيذ مفصلة، لتكون بمثابة الأساس لفريق الأتمتة (QA automation).",
      "إدارة دورة حياة العيوب باستخدام Jira، وتيسير جلسات الفرز الفني مع المطورين لتوحيد منهجيات الاختبار وتسريع حل المشكلات.",
      "إجراء جلسات تحليل متعمقة للمتطلبات، والتعاون المباشر مع العملاء وأصحاب المصلحة لتوضيح منطق العمل المعقد وتغطية الحالات الاستثنائية.",
      "تنفيذ اختبارات يدوية واستكشافية دقيقة عبر نظام واسع النطاق لضمان الامتثال التام لمتطلبات العمل."
    ]
  },
  {
    company: "Network International",
    role: "متدرب هندسة برمجيات",
    period: "يوليو 2024 - مارس 2025",
    description: "تصميم وتطوير نظام إدارة مستخدمين آمن ومتكامل للعمليات المالية التقنية (Fintech).",
    highlights: [
      "تطوير بنية النظام المتكاملة مع مصادقة JWT آمنة، ونظام التحكم في الوصول المبني على الأدوار (RBAC).",
      "بناء وتحسين الخدمات الخلفية (Backend) باستخدام Java 17 و Spring Boot 3 و PostgreSQL لضمان قابلية التوسع والصيانة.",
      "تبسيط دورات النشر من خلال تنفيذ خطوط أنابيب CI/CD المؤتمتة باستخدام Jenkins وحوسبة التطبيقات عبر Docker.",
      "رفع جودة الكود وموثوقية النظام من خلال إجراء اختبارات الوحدة والتكامل باستخدام JUnit، واختبارات E2E باستخدام Cypress.",
      "التعاون ضمن بيئة عمل Agile سريعة، والمشاركة الفعالة في تخطيط السبرينت، والاجتماعات اليومية، والمراجعة النظيرة للكود."
    ]
  }
];

export const PROJECTS_AR = [
  {
    title: "ScholarMatchJo",
    tech: PROJECTS[0].tech, 
    description: "منصة ويب شاملة مصممة لربط الطلاب الأردنيين بفرص المنح الدراسية المستهدفة. تتميز بخوارزميات بحث ومطابقة متقدمة مع لوحة تحكم مستخدم سريعة الاستجابة.",
    links: { github: "https://github.com/OmarAlHamawi/Scholar-Match-jo", demo: "#" }  },
  {
    title: "User Management System",
    tech: PROJECTS[1].tech, 
    description: "تطبيق داخلي على مستوى المؤسسة تم تطويره خلال فترة تدريبي في Network International. مصمم بمصادقة JWT قوية، ونظام تحكم في الوصول مبني على الأدوار (RBAC)، وخطوط أنابيب CI/CD للنشر السلس.",
    links: { github: "https://github.com/OmarAlHamawi/UsermanagementApp", demo: "https://user-management-app-frontend-sand.vercel.app/" }
  }
];

export const CERTIFICATIONS_AR = CERTIFICATIONS;

export const EDUCATION = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Al Hussein Technical University (HTU)",
    period: "Spring 2021 - 2025",
    description: "Completed an 3.5-year academic program focusing on computer science fundamentals, complex algorithms, and scalable software architecture.",
    file: "/htu-bachelor-certificate.pdf" 
  },
  {
    degree: "Pearson BTEC Higher National Diploma (HND)",
    institution: "Al Hussein Technical University (HTU)",
    period: "Spring 2021 - 2025",
    description: "Earned concurrently with the Bachelor's degree. This globally recognized UK certification emphasizes rigorous, hands-on technical skills and practical enterprise software development.",
    file: "/pearson-btec-certificate.pdf" 
  }
];

export const EDUCATION_AR = [
  {
    degree: "درجة البكالوريوس في علم الحاسوب",
    institution: "جامعة الحسين التقنية (HTU)",
    period: "ربيع 2021 - 2025",
    description: "إتمام برنامج أكاديمي لمدة 3.5 سنوات يركز على أساسيات علم الحاسوب، الخوارزميات المعقدة، وهيكلية البرمجيات القابلة للتوسع.",
    file: "/htu-bachelor-certificate.pdf"
  },
  {
    degree: "الدبلوم الوطني العالي من بيرسون (Pearson BTEC HND)",
    institution: "جامعة الحسين التقنية (HTU)",
    period: "ربيع 2021 - 2025",
    description: "تم الحصول عليه بالتزامن مع درجة البكالوريوس. تركز هذه الشهادة البريطانية المعترف بها عالمياً على المهارات التقنية العملية الصارمة وتطوير برمجيات المؤسسات.",
    file: "/pearson-btec-certificate.pdf"
  }
];