export const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Process", path: "/process" },
  { label: "Projects", path: "/projects" },
  { label: "Technology", path: "/technology" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export const services = [
  {
    id: "business-websites",
    title: "Business Websites",
    category: "Websites",
    number: "01",
    description: "Professional websites for businesses and organizations.",
    features: [
      "Brand positioning",
      "Clear service messaging",
      "Lead capture",
      "Conversion-driven pages",
    ],
    cta: "Discuss This Service",
    type: "Business Website",
  },
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    category: "Applications",
    number: "02",
    description:
      "Interactive applications built around specific business requirements.",
    features: [
      "Business workflows",
      "User dashboards",
      "System integrations",
      "Secure access",
    ],
    cta: "Discuss This Service",
    type: "Web Application",
  },
  {
    id: "e-commerce-websites",
    title: "E-Commerce Websites",
    category: "E-Commerce",
    number: "03",
    description: "Modern online stores and product experiences.",
    features: [
      "Shopping experiences",
      "Product presentation",
      "Checkout flow",
      "Category navigation",
    ],
    cta: "Discuss This Service",
    type: "E-Commerce",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    category: "Marketing",
    number: "04",
    description: "Conversion-focused landing pages.",
    features: [
      "Lead generation",
      "Offer clarity",
      "Campaign optimization",
      "Fast performance",
    ],
    cta: "Discuss This Service",
    type: "Landing Page",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    category: "Redesign",
    number: "05",
    description: "Modernize outdated websites.",
    features: [
      "Content restructure",
      "Modern interface",
      "UX improvements",
      "Mobile-first updates",
    ],
    cta: "Discuss This Service",
    type: "Website Redesign",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    category: "Support",
    number: "06",
    description: "Ongoing improvements, updates and technical support.",
    features: [
      "Content updates",
      "Performance checks",
      "Bug fixes",
      "Security maintenance",
    ],
    cta: "Discuss This Service",
    type: "Maintenance",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand the business, audience, goals and requirements.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Plan information architecture, features and user experience.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Create the visual system and user interface.",
  },
  {
    number: "04",
    title: "Development",
    description: "Build the frontend, backend and integrations.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Test functionality, accessibility, responsiveness and performance.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deploy and prepare the website for real users.",
  },
];

export const projectCategories = [
  "All",
  "Business",
  "E-Commerce",
  "Web App",
  "Landing Page",
  "UI/UX",
];

export const projects = [
  {
    id: "business-website",
    title: "Business Website",
    category: "Business",
    type: "Concept project",
    description: "Modern local-business website concept.",
    features: [
      "Service sections",
      "Clear CTAs",
      "Contact funnel",
      "Brand-focused design",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React"],
    concept: "Concept project",
  },
  {
    id: "ecommerce-experience",
    title: "E-Commerce Experience",
    category: "E-Commerce",
    type: "Concept project",
    description: "Modern shopping interface concept.",
    features: [
      "Product grid",
      "Category navigation",
      "Offers",
      "Checkout-ready structure",
    ],
    tech: ["React", "JavaScript", "Responsive UI", "API-ready patterns"],
    concept: "Concept project",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    category: "Web App",
    type: "Concept project",
    description: "Interactive SaaS dashboard concept.",
    features: [
      "Analytics cards",
      "Data tables",
      "User panels",
      "Filter workflows",
    ],
    tech: ["JavaScript", "React", "Data visualisation", "UI patterns"],
    concept: "Concept project",
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Landing Page",
    type: "Concept project",
    description: "Conversion-focused restaurant concept.",
    features: [
      "Menu presentation",
      "Reservations CTA",
      "Location details",
      "Feature highlights",
    ],
    tech: ["Responsive design", "HTML", "CSS", "JavaScript"],
    concept: "Concept project",
  },
  {
    id: "studio-brand",
    title: "Brand Studio",
    category: "UI/UX",
    type: "Concept project",
    description: "Premium service studio concept and positioning design.",
    features: [
      "Modern page system",
      "Story-led layout",
      "Trust builder",
      "Strong visuals",
    ],
    tech: ["UI design", "Interaction design", "React", "Design systems"],
    concept: "Concept project",
  },
  {
    id: "service-landing",
    title: "Service Landing Page",
    category: "Landing Page",
    type: "Concept project",
    description: "Lead-generation landing page concept for a services brand.",
    features: [
      "Offer clarity",
      "Lead form",
      "Benefit blocks",
      "Conversion flow",
    ],
    tech: [
      "Landing page UX",
      "JavaScript",
      "CSS Animations",
      "Responsive design",
    ],
    concept: "Concept project",
  },
];

export const technologyCards = [
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    purpose: "Semantic, accessible and SEO-friendly website structures.",
    use: "Page structure and content markup",
    related: ["CSS3", "Accessibility", "SEO", "Metadata"],
    example: "Business pages, service content, forms, FAQ structure",
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Frontend",
    purpose:
      "Responsive layouts, animations, visual systems and advanced UI styling.",
    use: "Design systems and layout architecture",
    related: ["Tailwind CSS", "Responsive design", "Animations", "UI polish"],
    example: "Spacing, gradients, card layouts, dark theme styling",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    purpose:
      "Used when appropriate for scalable utility-based styling and rapid interface development.",
    use: "Rapid styling and consistent component systems",
    related: ["CSS3", "React", "Design systems", "Utility classes"],
    example: "Dashboard panels, marketing sections, reusable cards",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "JavaScript",
    purpose: "Interactive web experiences and dynamic application behavior.",
    use: "Animations, dynamic content, logic, validation and client-side workflows",
    related: ["HTML5", "CSS3", "React.js", "REST APIs"],
    example:
      "Filterable projects, form validation, interactive demo playground",
  },
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    purpose: "Component-based interfaces and reusable UI systems.",
    use: "Interactive applications and dynamic client-side experiences",
    related: ["JavaScript", "State management", "UI systems", "Routing"],
    example:
      "Multi-page website architecture, dynamic UI and reusable components",
  },
  {
    id: "python",
    name: "Python",
    category: "Backend",
    purpose: "Backend logic, automation and web applications.",
    use: "Data processing, service logic and application workflows",
    related: ["Django", "REST APIs", "Automation", "Business logic"],
    example: "Internal tools, automation scripts and backend services",
  },
  {
    id: "django",
    name: "Django",
    category: "Backend",
    purpose:
      "Structured backend architecture for secure, maintainable and scalable web applications.",
    use: "Application structure, models, business logic and secure admin patterns",
    related: ["Python", "REST APIs", "Database", "Authentication"],
    example: "Content-driven apps, business platforms and API-backed features",
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "API",
    purpose: "Connect frontend interfaces with backend services.",
    use: "Data exchange, workflow integration and app communication",
    related: ["JavaScript", "Fetch API", "Django", "React"],
    example: "Project data, product lists, service data and form handling",
  },
  {
    id: "oracle-sql",
    name: "Oracle SQL",
    category: "Database",
    purpose: "Structured relational data and database-driven applications.",
    use: "Records, transactions and business data storage",
    related: ["MongoDB", "Relational data", "Data integrity", "Reporting"],
    example: "Customer records, order data and relational application logic",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    purpose: "Flexible document-oriented data use cases.",
    use: "Unstructured or evolving data structures",
    related: ["Oracle SQL", "JSON", "Flexible schemas", "Scalable apps"],
    example: "Product catalog, content collections and user data documents",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    purpose: "Version control.",
    use: "Tracking changes and managing code history",
    related: ["GitHub", "Collaboration", "Code review", "Deployment"],
    example: "Branching feature work and release management",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    purpose: "Source-code collaboration and project management.",
    use: "Code review, collaboration and repository workflows",
    related: ["Git", "Project planning", "Documentation", "Code sharing"],
    example: "Shared repository for frontend and backend projects",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    purpose: "Frontend development environment.",
    use: "Editing, testing and debugging interfaces",
    related: ["JavaScript", "React", "Git", "Live preview"],
    example: "Component development and website iteration",
  },
  {
    id: "pycharm",
    name: "PyCharm",
    category: "Tools",
    purpose: "Python and Django development.",
    use: "Backend code editing and application maintenance",
    related: ["Python", "Django", "Debugging", "Refactoring"],
    example: "Service logic, API routes and Django application work",
  },
];

export const featuredIndustries = [
  "Local Businesses",
  "Startups",
  "E-Commerce",
  "Restaurants",
  "Salons & Beauty",
  "Jewellery",
  "Real Estate",
  "Professional Services",
  "Personal Brands",
  "Service Businesses",
];

export const faqItems = [
  {
    question: "How much does a website cost?",
    answer:
      "The final cost depends on the scope, features, content and complexity of the project. Stackmorphic works with businesses to define a practical build plan that aligns with the required goals and budget.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Project timelines vary based on the scope. Simple business sites can move quickly, while larger custom experiences or web apps require more planning, design and development time.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. Every website is designed to work across mobile, tablet and desktop sizes, with attention to usability and readability on smaller screens.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Stackmorphic can modernize an outdated website by improving structure, visual design, responsiveness, messaging and conversion flow.",
  },
  {
    question: "Do you build custom web applications?",
    answer:
      "Yes. Stackmorphic builds custom web applications and interactive experiences around business-specific requirements and workflows.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. Ongoing support can include updates, improvements, technical checks and website maintenance as needed.",
  },
  {
    question: "Can you help with hosting and domain setup?",
    answer:
      "Stackmorphic can help plan the launch process and discuss the technical requirements needed for deployment, hosting and domain setup.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Start by reaching out through the contact form, WhatsApp or phone. Share your goals, requirements and timeline, and Stackmorphic can guide the next steps.",
  },
];

export const mockApiData = {
  users: [
    { id: 1, name: "Alicia", role: "Product Lead" },
    { id: 2, name: "Rohan", role: "Operations" },
    { id: 3, name: "Mira", role: "Designer" },
  ],
  products: [
    { id: 10, name: "Brand Website", price: "₹25,000", type: "Business" },
    { id: 11, name: "Landing Page", price: "₹12,000", type: "Marketing" },
    { id: 12, name: "Web App", price: "₹60,000", type: "Custom" },
  ],
  services: [
    { id: 20, name: "Business Websites", status: "Available" },
    { id: 21, name: "Custom Applications", status: "In planning" },
    { id: 22, name: "Maintenance", status: "Ongoing" },
  ],
};

export const techDemoData = [
  {
    id: 1,
    title: "Business Website",
    category: "Business",
    label: "Website Design",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Web App",
    label: "Application UI",
  },
  {
    id: 3,
    title: "Product Landing",
    category: "Landing Page",
    label: "Marketing",
  },
  { id: 4, title: "Brand Refresh", category: "UI/UX", label: "Design System" },
];

export const homeServices = services.slice(0, 4);
export const homeProjects = projects.slice(0, 3);
export const homeFaq = faqItems.slice(0, 4);

export const siteMeta = {
  home: {
    title: "Stackmorphic | Full-Stack Web Development & Modern Websites",
    description:
      "Stackmorphic builds modern websites and web applications for businesses.",
  },
  services: {
    title: "Stackmorphic Services | Business Websites, Apps & Site Redesign",
    description:
      "Professional business websites, custom web applications, e-commerce experiences and landing pages.",
  },
  process: {
    title: "Stackmorphic Process | From Idea to Launch",
    description:
      "A clear process from discovery and strategy through design, development, testing and launch.",
  },
  projects: {
    title: "Stackmorphic Projects | Concept Work & Digital Experiences",
    description:
      "Concept projects demonstrating modern business website, landing page and web app interfaces.",
  },
  technology: {
    title:
      "Stackmorphic Technology | JavaScript, React, Django & Web Development",
    description:
      "Modern tools and technologies used to design, build and maintain scalable digital experiences.",
  },
  about: {
    title: "About Stackmorphic | Independent Web Development Studio",
    description:
      "Stackmorphic is a modern independent web-development studio focused on practical digital solutions for businesses.",
  },
  faq: {
    title: "Stackmorphic FAQ | Website Cost, Timeline & Process",
    description:
      "Common questions about website costs, design, redesign, development, support and project onboarding.",
  },
  contact: {
    title: "Contact Stackmorphic | Start Your Website Project",
    description:
      "Contact Stackmorphic to discuss your business website, landing page, e-commerce or custom web app.",
  },
};
