"use client";

import Image from "next/image";
import heroIcon from "@/img/heroIcon.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="dark:bg-gray-900 bg-slate-50 fixed w-screen h-screen z-20 font-fantasy">
      <section className="bg-cover bg-center">
        <div className="absoluteCenter dark:opacity-90">
          <Image width={800} height={800} alt="bg" src={heroIcon} />
        </div>
        <div className="relative z-10 h-screen dark:bg-black dark:bg-opacity-50  md:h-screen flex flex-col justify-center items-center">
      <h1 className="mt-20 md:mt-0 text-5xl md:text-5xl font-bold dark:text-white text-[#798386] text-center mb-4 px-2">
            Welcome to League of Legends Hub
          </h1>
          <p className="text-sm md:text-xl dark:text-stone-400 text-stone-300 text-center mb-8">
            Unlocking the Enchanting World of League of Legends
          </p>
          <Link href="/league" className="goldWrapper hover:animate-pulse  rounded-full shadow-md py-2 px-3 border border-[#f6e27a]">
            <Button
              variant="heroBtn"
            >
              Explore Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
