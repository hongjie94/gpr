"use client";

import Image from "next/image";
import heroIcon from "@/img/heroIcon.png";
import Loading from "./loading";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <section className="bg-cover bg-center">
        <div className="absoluteCenter dark:opacity-90">
          <Image width={800} height={800} alt="bg" src={heroIcon} />
        </div>
        <div className="relative z-10 bg-black bg-opacity-60 h-[75vh] md:h-screen flex flex-col justify-center items-center">
          <h1 className="mt-20 md:mt-0 text-2xl md:text-6xl font-bold text-white text-center mb-4">
            Welcome to League of Legends Hub
          </h1>
          <p className="text-sm md:text-xl text-white text-center mb-8">
            Unlocking the Enchanting World of League of Legends
          </p>
          <Button
           
            className="font-semibold py-4 px-6 rounded-full text-lg md:text-xl"
          >
            Explore Now
          </Button>
        </div>
      </section>
      {/* <section className="h-screen relative">
        
        <div className="h-screen flex flex-col justify-center items-center relative z-10 pt-20">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Welcome to League of Legends Hub
          </h1>
          <p className="text-lg md:text-xl text-white text-center mb-8">
            Explore everything about the League of Legends universe.
          </p>
          <Button className="bg-[#C0A377]">Explore Now</Button>
        </div>
      </section> */}
    </main>
  );
}
