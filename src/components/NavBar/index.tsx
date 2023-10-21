"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoIcon from "@/img/logo.svg";
import { useState } from "react";

type Links = {
  href: string;
  text: string;
};

const Nav = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Create state for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen); // Toggle mobile menu state
  };

  const links: Links[] = [
    { href: "/league", text: "Leagues" },
    { href: "/tournament", text: "Tournaments" },
    { href: "/team", text: "Teams" },
    { href: "/player", text: "Players" },
  ];

  return (
    <nav className="font-fantasy sticky top-0 z-30 flex items-center justify-between py-1 lg:px-16 shadow-lg dark:bg-stone-950 bg-zinc-100">
      <div className="flex lg:flex-1">
        <Link href="/" >
          <Image
            width="60"
            height="60"
            className="bg-zinc-950 ml-3 rounded-full"
            quality={100}
            src={logoIcon}
            alt="logo image"
          />
        </Link>
      </div>
    
      <div
        className={`lg:flex lg:flex-row lg:gap-x-8 lg:mt-0 lg:static lg:w-auto lg:border-0  duration-200 transition-all 
        absolute w-screen flex-col top-0 right-0 mt-20 dark:bg-stone-950 bg-zinc-100 text-center border-t
          ${mobileMenuOpen ? "flex " : "hidden"} 
        `}
      >
        {links.map((link, index) => (
          <Link
            onClick={()=>setMobileMenuOpen(false)}
            key={index}
            href={link.href}
            className={`transition duration-30 dark:hover:bg-zinc-800 dark:active:bg-zinc-950 dark:active:text-white px-4 lg:py-2 py-10 rounded-md ${
              pathname === link.href ? "dark:bg-zinc-800 bg-zinc-200" : "" 
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>

      <div className="flex flex-1 justify-end items-center px-2">
        <Link
          className="px-5 transition duration-30 hover:underline"
          target="_blank"
          href="/api/graphql/"
        >
          Api
        </Link>
        <ModeToggle />
      </div>

      <div className="flex lg:hidden px-2">
        <Toggle aria-label="Toggle italic" onClick={toggleMobileMenu}>
          <Menu />
        </Toggle>
      </div>

    </nav>
  );
};

export default Nav;
