"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../Button/Button";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const goToContact = () => {
    close();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Com o menu aberto: trava o scroll da página, fecha com Esc e fecha ao chegar no desktop
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-10 mx-auto flex h-16 w-full max-w-6xl items-center justify-between bg-background/40 px-4 backdrop-blur-xl md:px-8">
        <Link href="/" className="text-lg font-semibold" onClick={close}>
          Giovani Fortunato
        </Link>

        {/* Desktop: escondido no mobile */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-lg">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button appearance="secondary" onClick={goToContact}>
            Start a project
          </Button>
        </div>

        {/* Mobile: botão hambúrguer (alvo de toque de 44px) */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {/* Menu mobile em tela cheia */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-0 flex flex-col overflow-y-auto bg-background px-4 pb-8 pt-16 md:hidden"
        >
          <nav aria-label="Mobile" className="py-6">
            <ul>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={close}
                    className="flex min-h-12 items-center border-b-1 border-b-gray-600 text-2xl font-medium mb-6 mt-6"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="h-20 mt-6 text-2xl" appearance="tertiary" onClick={goToContact}>
              Let&apos;s work together
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;