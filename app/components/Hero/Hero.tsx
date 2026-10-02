"use client";

import Button from "../Button/Button";

const HIGHLIGHTS = [
  "Full Stack Development",
  "Responsive Design",
  "Performance",
  "Modern Technologies",
];

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-4 pb-10 pt-28 sm:pb-14 md:min-h-[92vh] md:px-8 md:pb-20 md:pt-32">
      <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase text-foreground/60 sm:mb-8">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Available for selected projects
      </p>

      <h1 className="max-w-xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-6xl lg:text-[7rem]">
        Digital experiences built to move businesses<br/>
        <span className="text-foreground/60">forward.</span>
      </h1>

      <div className="mt-8 grid gap-8 sm:mt-10 md:mt-12 md:grid-cols-12 md:items-end md:gap-10">
        <p className="text-base leading-relaxed text-foreground/60 sm:text-lg md:col-span-6 md:text-xl">
          I design and develop fast, scalable and conversion-focused websites
          and web applications for ambitious businesses.
        </p>

        <div className="grid gap-3 sm:flex sm:flex-wrap md:col-span-6 md:justify-end">
          <Button className="h-12" onClick={() => scrollToSection("contact")}>
            Start a project
          </Button>
          <Button className="h-12" appearance="secondary" onClick={() => scrollToSection("work")}>
            View my work
          </Button>
        </div>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-2 sm:mt-16 md:mt-20 md:grid-cols-4">
        {HIGHLIGHTS.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-border bg-white/5 px-4 py-4 text-xs font-semibold text-foreground/60"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;