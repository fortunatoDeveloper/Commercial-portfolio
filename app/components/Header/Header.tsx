"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../button/Button";

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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full border-main-light-grey/80 bg-dark/40 backdrop-blur-xl max-w-6xl items-center justify-between px-4 md:px-8">
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

      {/* Menu mobile */}
      <div id="mobile-menu" hidden={!open} className="bg-background md:hidden">
        <nav aria-label="Mobile" className="px-4 pb-5 pt-2">
          <ul>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="flex min-h-12 items-center border-b-1 border-b-gray-600 text-2xl font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="mt-6" appearance="tertiary" onClick={goToContact}>
            Let&apos;s work together
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;