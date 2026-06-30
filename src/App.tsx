import { useEffect, useState } from "react";
import * as Separator from "@radix-ui/react-separator";
import * as Tabs from "@radix-ui/react-tabs";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Play,
  Smartphone,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Section } from "./components/section";
import { cv } from "./data/cv";
import heroCity from "./assets/hero-city.png";
import heroPortrait from "./assets/me.JPG";
import cvPdf from "./assets/TrungTran_CV.pdf";

const featuredStats = [
  { value: "30,000+", label: "EdTech users served" },
  { value: "3+", label: "Cross-platform products" },
  { value: "4", label: "Years of experience" },
];

const heroSlides = [
  {
    src: heroPortrait,
    objectPosition: "center center",
  },
  {
    src: heroCity,
    objectPosition: "center center",
  },
];

const visibleProjects = cv.projects.filter((project) => !project.hidden);
const menuItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Capability", href: "#capability" },
  { label: "Education", href: "#education" },
];

const scrollViewport = {
  once: true,
  margin: "-90px",
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const scrollItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: smoothEase,
    },
  },
};

function App() {
  return (
    <main className="min-h-screen bg-[#fff9ee] text-[#3f322a]">
      <SiteHeader />
      <Hero />
      <Section
        id="experience"
        eyebrow="Experience"
        title="Frontend systems for education platforms."
      >
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          {cv.experience.map((item) => (
            <motion.article
              key={`${item.company}-${item.position}`}
              className="grid gap-5 border-t border-[#c5bdb3] pt-8 md:grid-cols-[0.85fr_1.65fr]"
              variants={scrollItem}
            >
              <div>
                <p className="text-xs font-bold uppercase leading-none tracking-[0.017em] text-[#796e65]">
                  {item.startDate} - {item.endDate ?? "Present"}
                </p>
                <h3 className="mt-3 text-[22px] font-semibold leading-[1.2] tracking-[0.015em]">
                  {item.position}
                </h3>
                <p className="mt-2 text-sm leading-[1.43] tracking-[0.017em] text-[#796e65]">
                  {item.company}
                </p>
                <p className="mt-3 flex items-center gap-2 text-xs leading-none tracking-[0.018em] text-[#9f968c]">
                  <MapPin className="size-4" />
                  {item.location}
                </p>
              </div>
              <div>
                <p className="max-w-[680px] text-base font-normal leading-[1.41] tracking-[0.017em] text-[#3f322a]">
                  {item.summary}
                </p>
                <ul className="mt-5 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li
                      className="border-l border-[#c5bdb3] pl-5 text-sm leading-[1.43] tracking-[0.017em] text-[#3f322a]"
                      key={highlight}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>
      <Section
        id="work"
        eyebrow="Work"
        title="Selected projects with measurable product impact."
      >
        <WorkShowcase />
      </Section>
      <Section
        id="capability"
        eyebrow="Capability"
        title="A practical frontend toolkit."
      >
        <motion.div
          className="grid gap-x-8 gap-y-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          {cv.skills.map((skill) => (
            <motion.div
              key={skill.label}
              className="border-t border-[#c5bdb3] pt-5"
              variants={scrollItem}
            >
              <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[0.015em]">
                {skill.label}
              </h3>
              <p className="mt-3 text-sm leading-[1.43] tracking-[0.017em] text-[#3f322a]">
                {skill.details}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <Section
        id="education"
        eyebrow="Education"
        title="Software engineering foundation."
      >
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          {cv.education.map((item) => (
            <motion.article
              key={item.institution}
              className="border-t border-[#c5bdb3] pt-5"
              variants={scrollItem}
            >
              <p className="text-xs font-bold uppercase leading-none tracking-[0.017em] text-[#796e65]">
                {[item.startDate, item.endDate].filter(Boolean).join(" - ")}
              </p>
              <h3 className="mt-3 text-[22px] font-semibold leading-[1.2] tracking-[0.015em]">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm leading-[1.43] tracking-[0.017em] text-[#3f322a]">
                {item.institution}
              </p>
              <p className="mt-3 text-xs leading-[1.5] tracking-[0.018em] text-[#796e65]">
                {item.highlights.join(", ")}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </main>
  );
}

function SiteHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setHasScrolled(window.scrollY > 16);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-5 transition-all duration-500 ease-out sm:px-8 ${hasScrolled ? "py-3" : "py-4"
        }`}
    >
      <nav
        className={`mx-auto flex min-h-14 w-full items-center justify-between gap-4 border px-4 text-xs font-medium uppercase tracking-[0.018em] text-[#3f322a] transition-all duration-500 ease-out ${hasScrolled
          ? "max-w-[1080px] rounded-[15px] border-[#c5bdb3]/70 bg-[#fff9ee]/72 backdrop-blur-md"
          : "max-w-[1280px] rounded-[2px] border-transparent bg-[#fff9ee]"
          }`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap underline-offset-4 transition hover:text-[#004e4e] hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button
          asChild
          variant="primary"
          className={`min-h-9 flex-none px-4 transition-[border-radius] duration-500 ease-out ${hasScrolled ? "rounded-[8px]" : "rounded-[2px]"
            }`}
        >
          <a href={`mailto:${cv.email}`}>
            <Mail className="size-4 text-white" />
            <span className="text-white">Contact</span>
          </a>
        </Button>
      </nav>
    </header>
  );
}

function WorkShowcase() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={staggerContainer}
    >
      <Tabs.Root
        defaultValue={visibleProjects[0]?.name}
        className="grid gap-8 md:grid-cols-[0.72fr_1.8fr] md:items-start"
      >
        <motion.div
          className="border-y border-[#c5bdb3] md:border-y-0 md:border-r md:pr-6"
          variants={scrollItem}
        >
          <Tabs.List
            className="flex overflow-x-auto md:grid md:overflow-visible"
            aria-label="Projects"
          >
            {visibleProjects.map((project, index) => (
              <Tabs.Trigger
                key={project.name}
                value={project.name}
                className="group min-w-[230px] border-r border-[#c5bdb3] px-4 py-5 text-left transition md:min-w-0 md:border-r-0 md:border-b md:px-0 data-[state=active]:bg-white md:data-[state=active]:bg-transparent"
              >
                <span className="mb-5 block text-xs font-bold uppercase leading-none tracking-[0.017em] text-[#9f968c] group-data-[state=active]:text-[#004e4e]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="block text-[22px] font-semibold leading-[1.2] tracking-[0.015em] text-[#3f322a]">
                  {project.name}
                </span>
                <span className="mt-3 hidden max-w-[260px] text-sm font-normal leading-[1.43] tracking-[0.017em] text-[#796e65] md:block">
                  {project.summary}
                </span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </motion.div>

        <motion.div variants={scrollItem}>
          {visibleProjects.map((project) => (
            <Tabs.Content key={project.name} value={project.name}>
              <motion.article
                className="border border-[#004e4e] bg-white p-5 sm:p-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-xs font-bold uppercase leading-none tracking-[0.017em] text-[#004e4e]">
                      Featured project
                    </p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-5 inline-flex items-start gap-3 text-[36px] font-normal leading-[1.09] tracking-[0.009em] text-[#3f322a] sm:text-[43px]"
                    >
                      {project.name}
                      <ArrowUpRight className="mt-2 size-6 flex-none transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <p className="mt-6 max-w-[680px] text-base leading-[1.41] tracking-[0.017em] text-[#3f322a]">
                      {project.summary}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-[2px] bg-[#004e4e] px-4 text-xs font-semibold uppercase tracking-[0.018em] text-white transition hover:bg-[#063f3f]"
                      >
                        <span className="text-white">Visit website</span>
                        <ArrowUpRight className="size-4 text-white" />
                      </a>
                      {project.appLinks?.map((appLink) => (
                        <ProjectAppLink
                          appLink={appLink}
                          projectName={project.name}
                          key={`${project.name}-${appLink.platform}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#c5bdb3] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="text-xs font-bold uppercase leading-none tracking-[0.017em] text-[#3f322a]">
                      Impact notes
                    </p>
                    <motion.ul
                      className="mt-5"
                      initial="hidden"
                      whileInView="show"
                      viewport={scrollViewport}
                      variants={staggerContainer}
                    >
                      {project.highlights.map((highlight, index) => (
                        <motion.li
                          key={highlight}
                          className="grid grid-cols-[42px_1fr] gap-4 border-t border-[#c5bdb3] py-5 first:border-t-0 first:pt-0"
                          variants={scrollItem}
                        >
                          <span className="text-xs font-bold uppercase leading-[1.5] tracking-[0.018em] text-[#9f968c]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm leading-[1.43] tracking-[0.017em] text-[#3f322a]">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.article>
            </Tabs.Content>
          ))}
        </motion.div>
      </Tabs.Root>
    </motion.div>
  );
}

function ProjectAppLink({
  appLink,
  projectName,
}: {
  appLink: {
    label: string;
    platform: "ios" | "google-play";
    href?: string;
  };
  projectName: string;
}) {
  if (!appLink.href) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex min-h-10 items-center gap-2 rounded-[2px] border border-[#c5bdb3] px-4 text-xs font-semibold uppercase tracking-[0.018em] text-[#796e65]"
      >
        <AppPlatformIcon platform={appLink.platform} />
        {appLink.label}
      </span>
    );
  }

  return (
    <a
      href={appLink.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${projectName} ${appLink.label}`}
      className="inline-flex min-h-10 items-center gap-2 rounded-[2px] border border-[#3f322a] px-4 text-xs font-semibold uppercase tracking-[0.018em] text-[#3f322a] transition hover:bg-[#fff9ee]"
    >
      <AppPlatformIcon platform={appLink.platform} />
      {appLink.label}
    </a>
  );
}

function AppPlatformIcon({ platform }: { platform: "ios" | "google-play" }) {
  if (platform === "ios") {
    return <Smartphone className="size-4" />;
  }

  return <Play className="size-4" />;
}

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(slideTimer);
  }, [shouldReduceMotion]);

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#3f322a] px-5 py-5 text-white sm:px-8">
      {heroSlides.map((slide, index) => (
        <motion.img
          key={slide.src}
          src={slide.src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: slide.objectPosition }}
          initial={false}
          animate={{
            opacity: activeSlide === index ? 1 : 0,
            scale: activeSlide === index && !shouldReduceMotion ? 1.03 : 1,
          }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      <div className="absolute inset-0 bg-[#2a211b]/70" />
      <div className="relative mx-auto flex min-h-[calc(92svh-40px)] w-full max-w-[1280px] flex-col">
        <div className="grid flex-1 items-end gap-12 py-14 md:grid-cols-[1.35fr_0.65fr] md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-xs font-bold uppercase leading-none tracking-[0.017em] text-white">
              {cv.headline}
            </p>
            <h1 className="max-w-4xl text-[52px] font-normal leading-[1.05] tracking-[0.008em] sm:text-[68px]">
              {cv.name}
            </h1>
            <p className="mt-6 max-w-[680px] text-base leading-[1.41] tracking-[0.017em] text-white">
              Frontend engineer building React and React Native products for
              learning platforms, admin workflows, and high-traffic assessment
              experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={`mailto:${cv.email}`}>
                  <Mail className="size-4" />
                  Email me
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white hover:text-white"
              >
                <a href={cvPdf} target="_blank" rel="noreferrer">
                  View current CV
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.aside
            className="space-y-5 border-t border-white/40 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-3 text-xs leading-none tracking-[0.018em] text-white">
              <p className="flex items-center gap-2">
                <MapPin className="size-4" />
                {cv.location}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4" />
                {cv.phone}
              </p>
            </div>
            <Separator.Root className="h-px bg-white/40" />
            <div className="grid gap-5">
              {featuredStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[30px] font-normal leading-[1.13] tracking-[0.013em]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-[1.5] tracking-[0.018em] text-white">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default App;
