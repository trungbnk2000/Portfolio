export type EducationItem = {
  institution: string;
  area: string;
  degree: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  hidden?: boolean;
  href: string;
  summary: string;
  highlights: string[];
  appLinks?: {
    label: string;
    platform: "ios" | "google-play";
    href?: string;
  }[];
};

export type SkillGroup = {
  label: string;
  details: string;
};

export const cv = {
  name: "Trung Tran",
  headline: "Frontend Engineer | React & React Native",
  location: "Hanoi, Vietnam",
  email: "trungtran13900@gmail.com",
  phone: "+84914091973",
  website: "https://trungbnk2000.github.io/MyCV",
  socialNetworks: [
    {
      network: "GitHub",
      username: "trungbnk2000",
      href: "https://github.com/trungbnk2000",
    },
  ],
  education: [
    {
      institution: "Posts and Telecommunications Institute of Technology",
      area: "Software Engineering",
      degree: "Bachelor of Software Engineering",
      startDate: "2018",
      endDate: "2022",
      location: "Hanoi, Vietnam",
      highlights: ["GPA: 3.0+"],
    },
    {
      institution: "IELTS Academic",
      area: "English Proficiency",
      degree: "English Certification",
      highlights: ["Overall Band Score: 7.0"],
    },
    {
      institution: "TOEIC",
      area: "English Proficiency",
      degree: "English Certification",
      highlights: ["Score: 855/990"],
    },
  ] satisfies EducationItem[],
  experience: [
    {
      company: "THANH NAM Education and Technology JSC, a TANDAN.JSC company",
      position: "Frontend Engineer",
      startDate: "2024",
      location: "Hanoi, Vietnam",
      summary:
        "Lead frontend development for cross-platform EdTech products including Codemath, Tiengtrunggioi, and Thidanhgia, serving 30,000+ users across web and mobile applications.",
      highlights: [
        "Built reusable React and React Native components across 3 EdTech products, reducing feature delivery time by ~30%.",
        "Designed frontend architecture with React, TypeScript, React Query, and custom hooks to improve maintainability.",
        "Defined API contracts with backend engineers to standardize data flow across web and mobile apps.",
      ],
    },
    {
      company: "TANDAN.JSC",
      position: "Frontend Developer",
      startDate: "2022-09",
      endDate: "2024",
      location: "Hanoi, Vietnam",
      summary:
        "Developed and maintained administrative systems, focusing on complex workflows, responsive interfaces, API integration, and release stability.",
      highlights: [
        "Developed ReactJS modules for administrative systems with approval, reporting, and document workflows.",
        "Integrated REST APIs with backend services to support role-based access and workflow state changes.",
      ],
    },
    {
      company: "TANDAN.JSC",
      position: "Software Developer Intern",
      startDate: "2021",
      endDate: "2022",
      location: "Hanoi, Vietnam",
      summary:
        "Contributed to internal CRM systems and client portals using ASP.NET MVC, SQL Server, and ReactJS.",
      highlights: [
        "Developed responsive dashboards and client-facing pages using ReactJS and ASP.NET MVC.",
        "Integrated frontend pages with backend APIs to support internal business workflows.",
      ],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      name: "Codemath.vn",
      href: "https://codemath.vn",
      summary: "Flagship EdTech platform serving 30,000+ users.",
      highlights: [
        "Supported high-traffic exam seasons such as TIMO and HKIMO through optimized rendering and API usage.",
        "Improved user retention from 45% to 87% by refining onboarding and learning flows.",
      ],
    },
    {
      name: "Eduling.vn",
      href: "https://eduling.vn",
      summary:
        "Kids-focused EdTech product with web and iOS touchpoints for guided learning experiences.",
      highlights: [
        "Built learner-facing frontend flows for a polished cross-platform education experience.",
        "Supported mobile product delivery with React Native implementation patterns and reusable UI components.",
      ],
      appLinks: [
        {
          label: "iOS App",
          platform: "ios",
          href: "https://apps.apple.com/us/app/eduling-kids/id6749044495",
        },
        {
          label: "Google Play",
          platform: "google-play",
          href: "https://play.google.com/store/apps/details?id=com.daunut.edulingkid",
        },
      ],
    },
    {
      name: "Tiengtrunggioi.vn",
      href: "https://tiengtrunggioi.vn",
      summary:
        "Cross-platform language learning system focused on scalable frontend architecture, faster builds, and mobile learning experiences.",
      highlights: [
        "Migrated legacy frontend to React 18, TypeScript, and Vite, reducing build time by 50%.",
        "Improved LCP from 3.2s to 2.4s through bundle, rendering, and asset optimization.",
        "Released React Native apps for both iOS and Android.",
      ],
      appLinks: [
        {
          label: "iOS App",
          platform: "ios",
          href: "https://apps.apple.com/us/app/ti%E1%BA%BFng-trung-gi%E1%BB%8Fi/id6593672798",
        },
        {
          label: "Google Play",
          platform: "google-play",
          href: "https://play.google.com/store/apps/details?id=com.daunut.tiengtrunggioi",
        },
      ],
    },
    {
      name: "Thidanhgia.vn",
      hidden: true,
      href: "https://thidanhgia.vn",
      summary:
        "Public-facing assessment platform supporting student acquisition, onboarding, real-time testing, and instant evaluation workflows.",
      highlights: [
        "Built SEO-optimized landing pages to support student acquisition and assessment registration.",
        "Improved onboarding and registration flows to reduce friction before assessment submission.",
      ],
    },
  ] satisfies ProjectItem[],
  skills: [
    {
      label: "Frontend & Mobile",
      details:
        "JavaScript (ES6+), TypeScript, ReactJS, React Native, Next.js, Redux Toolkit, React Query, Vite",
    },
    {
      label: "UI & Styling",
      details: "Tailwind CSS, Shadcn UI, Ant Design, Material UI, Bootstrap",
    },
    {
      label: "Architecture & Performance",
      details:
        "Component Architecture, Custom Hooks, State Management, Caching, Rendering Optimization, API Integration",
    },
    {
      label: "Testing & Code Quality",
      details:
        "Jest, React Testing Library, ESLint, Prettier, Debugging, Code Review",
    },
    {
      label: "Backend Familiarity",
      details: "C#, SQL, RESTful APIs, ASP.NET MVC, .NET Framework",
    },
    {
      label: "Developer Tools",
      details:
        "VS Code, Git, GitHub, GitLab, Xcode, Android Studio, Chrome DevTools, Postman, AI-assisted Development",
    },
    {
      label: "Design Tools",
      details: "Figma, Adobe Photoshop, Canva",
    },
  ] satisfies SkillGroup[],
};
