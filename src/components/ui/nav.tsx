"use client"

import {ModeToggle} from "@/components/dark-mode-toggle"
import { Menu } from "lucide-react"
 
import { Toggle } from "@/components/ui/toggle"

const Nav = () => {
 
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 ">
            GPR 
        </a>

      </div>
      <div className="flex lg:hidden">
          <Toggle aria-label="Toggle italic">
          <Menu/>
        </Toggle>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="transition duration-30">Product</a>
        <a href="#" className="transition duration-30">Features</a>
        <a href="#" className="transition duration-30">Marketplace</a>
        <a href="#" className="transition duration-30">Company</a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <ModeToggle/>
      </div>
    </nav>
  //   <nav className= "p-6 lg:px-8">
  //   <div className="container mx-auto flex items-center justify-between">
  //     <a href="#" className="text-2xl font-bold">
  //       Logo
  //     </a>
  //     <div className="flex lg:hidden">
  //      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
  //        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
  //          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  //        </svg>
  //      </button>
  //     </div>
  //     <div className="hidden lg:flex lg:gap-x-12">
  //       <a href="#" className="transition duration-30">
  //         Home
  //       </a>
  //       <a href="#" className="transition duration-30">
  //         Home
  //       </a>
  //       <a href="#" className="transition duration-30">
  //         Home
  //       </a>
  //       <a href="#" className="transition duration-30">
  //         Home
  //       </a>
  //       <ModeToggle/>
  //     </div>
     
  //   </div>
  // </nav>
  )
}

export default Nav