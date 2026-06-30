import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type SectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ eyebrow, title, children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        "mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 py-16 sm:px-8",
        className,
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-10 border-t border-[#c5bdb3] pt-6">
        <p className="mb-4 text-xs font-bold uppercase leading-none tracking-[0.017em] text-[#3f322a]">
          {eyebrow}
        </p>
        <h2 className="max-w-3xl text-[30px] font-normal leading-[1.13] tracking-[0.013em] text-[#3f322a] sm:text-[43px] sm:leading-[1.09]">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}
