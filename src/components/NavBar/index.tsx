"use client" 

import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import logoIcon from '@/img/logo.svg'

type Links = {
  href: string;
  text: string;
}

const Nav = () => {
  const pathname = usePathname()

  const links: Links[]  = [
    { href: "/league", text: "Leagues"},
    { href: "/tournament", text: "Tournaments" },
    { href: "/team", text: "Teams" },
    { href: "/player", text: "Players" },
  ];
  
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-3 lg:px-16 shadow-lg dark:bg-stone-950 bg-zinc-100">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5 ">
        <Image
          width= "60"
          height="60"
          className="bg-zinc-950 ml-3 rounded-full"
          quality={100}
          src={logoIcon}
          alt="logo image"
        />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <Toggle aria-label="Toggle italic">
          <Menu />
        </Toggle>
      </div>
      <div className="hidden lg:flex lg:gap-x-8">
        
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`transition duration-30 dark:hover:bg-zinc-800 dark:active:bg-zinc-950 dark:active:text-white px-4 py-2 rounded-md ${
              pathname === link.href ? 'dark:bg-zinc-800 bg-zinc-200' : ''
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
        <Link className="px-5 transition duration-30 hover:underline" target="_blank" href="http://localhost:3000/api/graphql/"> Api</Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Nav;
