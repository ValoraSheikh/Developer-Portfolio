import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Cover } from "./ui/cover";

export function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        For Modern Businesses. <br /> Clean  <Cover> Interfaces. </Cover>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Need a dashboard, booking system, or custom web app that just works — no
        tech jargon, no confusion? I turn your ideas into smooth, responsive
        apps using Next.js, Tailwind, and MongoDB — with clear communication at
        every step.
      </p>
    </BackgroundLines>
  );
}
