import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FooterDemo() {

  const footerLinkData = [
    { title: 'Quick Links', items: ['Leagues', 'Tournaments', 'Teams', 'Players'] },
    { title: 'Top Leagues', items: ['LCS-NORTH AMERICA', 'LEC-EMEA', 'LCK-KOREA', 'LPL-CHINA'] },
    { title: 'Top Teams', items: ['Link 1', 'Link 2', 'Link 3', 'Link 4'] },
  ];

  
  return (
  <>
   <footer className="dark:bg-stone-950">
      <div
        className="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link href={"/"} className="text-2xl text-white">
            My Website
          </Link>
          <p className="mt-2 text-xs text-justify text-gray-400">
            Footer is a valuable resource that complements the main content of
            the website by providing quick links, legal information, and ways to
            connect, creating a well-rounded and user-friendly experience for
            visitors.
          </p>
          <div className="flex mt-4 w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
          <div className="flex mt-4 space-x-4 lg:mt-2">
            <Link href={""}>
              <Facebook />
            </Link>
            <Link href={""}>
              <Twitter  />
            </Link>
            <Link href={""}>
              <Instagram  />
            </Link>
            <Link href={""}>
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          {footerLinkData.map((section, index) => (
        <div key={index} className="w-full px-4 lg:w-1/3 md:w-1/2">
          <h2 className="mb-2 font-bold tracking-widest">{section.title}</h2>
          <ul className="mb-8 space-y-2 text-sm list-none">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link href={'/'}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <p className="text-center text-white p-6">
          @2024 All rights reserved by your website.
        </p>
      </div>
    </footer>
  </>
    
  )
}
