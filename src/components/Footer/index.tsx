import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import "@/app/globals.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterDemo() {
  const footerLinkData = [
    {
      title: "Quick Links",
      items: [
        {
          name: "Leagues",
          href: "/leagues",
        },
        {
          name: "Tournaments",
          href: "/tournaments",
        },
        {
          name: "Teams",
          href: "/teams",
        },
        {
          name: "Players",
          href: "/players",
        },
      ],
    },
    {
      title: "Leagues",
      items: [
        {
          name: "LCS-NORTH AMERICA",
          href: "leagues/98767991299243165",
        },
        {
          name: "LEC-EMEA",
          href: "leagues/98767991302996019",
        },
        {
          name: "LCK-KOREA",
          href: "leagues/98767991310872058",
        },
        {
          name: "LPL-CHINA",
          href: "leagues/98767991314006698",
        },
      ],
    },
    {
      title: "Teams",
      items: [
        {
          name: "LCS-NORTH AMERICA",
          href: "leagues/98767991299243165",
        },
        {
          name: "LEC-EMEA",
          href: "leagues/98767991299243165",
        },
        {
          name: "LCK-KOREA",
          href: "leagues/98767991299243165",
        },
        {
          name: "LPL-CHINA",
          href: "leagues/98767991299243165",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="dark:bg-stone-950 bg-zinc-100 shadow-lg p-0">
        <div
          className="
          container
          flex 
          flex-col 
          flex-wrap
          py-8
          mx-auto
          items-center
          lg:flex-row 
          lg:justify-center
          lg:flex-nowrap"
        >
          <div className="flex-shrink-0 w-80 mx-auto text-center md:mx-0 md:text-left">
            <Link href={"/"} className="text-2xl">
              Esports Mastery
            </Link>
            <p className="mt-2 text-xs text-justify">
              Footer is a valuable resource that complements the main content of
              the website by providing quick links, legal information, and ways
              to connect, creating a well-rounded and user-friendly experience
              for visitors.
            </p>
            <div className="flex my-4 w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
            <div className="flex mt-4 space-x-4 lg:mt-2">
              <Link href={"#"}>
                <Facebook />
              </Link>
              <Link href={"#"}>
                <Twitter />
              </Link>
              <Link href={"#"}>
                <Instagram />
              </Link>
              <Link href={"#"}>
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="w-full mt-8 text-center lg:flex">
            {footerLinkData.map((section, index) => (
              <div key={index} className="w-full mb-6 md:px-4 lg:w-1/3 text">
                <h2 className="mb-2 font-bold tracking-widest">
                  {section.title}
                </h2>
                <ul className="space-y-2 text-sm list-none">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="transition duration-30 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center pb-6">
            @2024 All rights reserved by Esports Mastery.
          </p>
        </div>
      </footer>
    </>
  );
}
