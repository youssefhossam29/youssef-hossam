export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Backend Engineering",
    badge: "Core Track",
    description:
      "Specializing in building scalable RESTful APIs, database architectures, and real-time web applications using PHP, Laravel, and MySQL.",
    skills: [
      "PHP",
      "Laravel",
      "RESTful APIs",
      "WebSockets",
      "MySQL",
      "RBAC",
      "MinIO/AWS S3",
      "OAuth",
      "Payment Gateways",
    ],
  },
  {
    title: "WordPress & LMS Development",
    badge: "Specialized Track",
    description:
      "Proficient in developing advanced LMS, e-commerce, and multilingual platforms with custom plugins and robust architectures.",
    skills: [
      "Elementor",
      "Custom Plugin Development",
      "WooCommerce",
      "Polylang",
      "JetEngine",
      "Amelia LMS",
      "Tutor LMS",
    ],
  },
  {
    title: "Frontend & Engineering Tools",
    badge: "Delivery & Stack",
    description:
      "Crafting clean, responsive user interfaces, and managing version control and API testing workflows.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
    ],
  },
];

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export const experienceData: TimelineItem[] = [
  {
    id: "exp-1",
    role: "Backend Laravel Developer",
    company: "Gen-Tech Software Development Company",
    companyUrl: "https://gen-tech.io/",
    location: "Fifth Settlement, Egypt",
    period: "06/2025 – Current",
    type: "Full-Time",
    description: [
      "Architected and enhanced scalable RESTful APIs (documented via Swagger/OpenAPI) to power complex workflows.",
      "Developed a wallet & financial system to automate commissions, milestone refunds, and user balance calculations (available, held, and total).",
      "Engineered real-time communication features (chat and notifications) via Laravel Reverb and WebSockets.",
      "Integrated third-party services, including Paymob payment, MinIO/AWS S3 storage, and Google/Microsoft OAuth.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "RESTful APIs",
      "Swagger/OpenAPI",
      "Laravel Reverb",
      "WebSockets",
      "Paymob",
      "MinIO/AWS S3",
      "OAuth",
    ],
  },
  {
    id: "exp-2",
    role: "Wordpress Developer",
    company: "Gen-Tech Software Development Company",
    companyUrl: "https://gen-tech.io/",
    location: "Fifth Settlement, Egypt",
    period: "10/2024 – 06/2025",
    type: "Full-Time",
    description: [
      "Designed responsive WordPress websites, implementing multilingual architectures and dynamic content (Custom Post Types & Loops).",
      "Built and integrated custom WordPress plugins to extend functionality for specialized business needs, including LMS and booking systems.",
    ],
    technologies: [
      "WordPress",
      "Custom Plugin Development",
      "PHP",
      "WooCommerce",
      "Polylang",
      "Elementor",
      "JetEngine",
    ],
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Science and Statistics",
    institution: "Alexandria University — Department of Math",
    period: "10/2018 – 07/2022",
    grade: "GPA: 3.6 / 4.0",
    highlights: [
      "Department of Math, Alexandria, Egypt.",
      "Rigorous foundations in Computer Science, Database Architectures, and Software Quality.",
    ],
  },
  {
    id: "edu-2",
    degree: "Intensive Code Camp (ICC) — CMS Track",
    institution: "Information Technology Institute (ITI)",
    period: "05/2024 – 08/2024",
    grade: "Distinction Graduate",
    highlights: [
      "Completed the Intensive Code Camp (ICC), CMS Track in Alexandria, Egypt.",
      "Developed full-stack web applications, focusing on both front-end and back-end development using PHP and WordPress.",
    ],
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What technical services and engineering capabilities do you offer?",
    answer:
      "I specialize in building scalable RESTful APIs, database architectures, and real-time web applications using PHP, Laravel, and MySQL. Additionally, I develop advanced WordPress & WooCommerce solutions, custom plugins, and enterprise LMS platforms.",
  },
  {
    question: "How do you guarantee the performance, speed, and security of applications?",
    answer:
      "Performance and security are built into the architecture from day one. I follow clean code principles, implement secure OAuth and RBAC authentication, optimize MySQL database schemas and queries, and integrate real-time WebSockets and cloud storage.",
  },
  {
    question: "Are you open to full-time employment, remote roles, or relocation?",
    answer:
      "Yes. I am actively seeking opportunities to contribute as a Backend Developer or Software Engineer — available for remote roles globally and on-site / relocation opportunities.",
  },
  {
    question: "What is your project development and delivery workflow?",
    answer:
      "My workflow follows structured engineering milestones: (1) Requirements analysis and architectural planning. (2) Database schema design and API documentation via Swagger/OpenAPI. (3) Iterative development with clean Git version control and Postman testing. (4) Live staging and client review. (5) Production deployment and post-launch support.",
  },
];

export const techMarqueeLogos = [
  { name: "Laravel", category: "Backend", icon: "laravel.svg" },
  { name: "PHP", category: "Backend", icon: "php.svg" },
  { name: "RESTful APIs", category: "Architecture", icon: "api.svg" },
  { name: "MySQL", category: "Database", icon: "mysql.svg" },
  { name: "WebSockets", category: "Realtime", icon: "api.svg" },
  { name: "WordPress", category: "CMS", icon: "wordpress.svg" },
  { name: "WooCommerce", category: "E-Commerce", icon: "woocommerce.svg" },
  { name: "Elementor", category: "Page Builder", icon: "wordpress.svg" },
  { name: "Payment Gateways", category: "Integrations", icon: "api.svg" },
  { name: "MinIO/AWS S3", category: "Cloud Storage", icon: "api.svg" },
  { name: "Git", category: "Version Control", icon: "git.svg" },
  { name: "Postman", category: "API Testing", icon: "api.svg" },
  { name: "JavaScript", category: "Frontend", icon: "javascript.svg" },
  { name: "Bootstrap", category: "Styling", icon: "bootstrap.svg" },
];
