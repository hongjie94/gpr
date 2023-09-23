"use client"

import { useState, useEffect } from 'react';
import { ChevronUpCircle} from "lucide-react"
import {Toggle} from "./toggle"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    // <button
    //   className={`fixed bottom-5 right-5 dark:hover:bg-zinc-800 :hover:bg-zinc-200 dark:bg-zinc-950 dark:active:bg-zinc-950 p-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
    //     isVisible ? 'block' : 'hidden'
    //   }`}
    //   onClick={scrollToTop}
    // >
    <Toggle className={`fixed bottom-5 right-5 p-3 h-100 w-100 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${isVisible ? 'block' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <ChevronUpCircle/>
    </Toggle>
   
  );
}

export default ScrollToTopButton;