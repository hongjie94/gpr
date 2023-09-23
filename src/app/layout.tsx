
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "GPR",
  description: "Global Power Rankings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerLinkData = [
    {
      title: "Quick Links",
      items: ["Leagues", "Tournaments", "Teams", "Players"],
    },
    {
      title: "Top Leagues",
      items: ["LCS-NORTH AMERICA", "LEC-EMEA", "LCK-KOREA", "LPL-CHINA"],
    },
    { title: "Top Teams", items: ["Link 1", "Link 2", "Link 3", "Link 4"] },
  ];

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Nav />
            {children}
            {/* <Footer/> */}
                <h2 className="p-8 text-2xl font-bold tracking-tight">Leagues</h2>

            <ScrollToTopButton/>
            <footer className="dark:bg-stone-950 shadow-md bg-zinc-100 shadow-lg md:px-5">
              <div
                className="
                  container
                  flex 
                  flex-col 
                  flex-wrap
                  px-4
                  py-8
                  mx-auto
                  items-center
                  lg:flex-row 
                  lg:justify-center
                  lg:flex-nowrap
                "
              >
                <div className="flex-shrink-0 w-80 mx-auto text-center md:mx-0 md:text-left">
                  <Link href={"/"} className="text-2xl">
                    GPR
                  </Link>
                  <p className="mt-2 text-xs text-justify">
                    Footer is a valuable resource that complements the main
                    content of the website by providing quick links, legal
                    information, and ways to connect, creating a well-rounded
                    and user-friendly experience for visitors.
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
                    <div key={index} className="w-full mb-6 px-4 lg:w-1/3 text">
                      <h2 className="mb-2 font-bold tracking-widest">
                        {section.title}
                      </h2>
                      <ul className="space-y-2 text-sm list-none">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link href={"/"} className="transition duration-30 hover:underline">{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-center pb-6">
                  @2024 All rights reserved by GPR.
                </p>
              </div>
            </footer>
            
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
