"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Mastered MongoDB Relationships",
    description: "One-to-many, many-to-many—unlocked",
    time: "2d ago",
    icon: "🧠",
    color: "#6366F1", // indigo-500 (brain = thoughtful, deep tech)
  },
  {
    name: "Learned Zod Validation",
    description: "Strict but kind",
    time: "4d ago",
    icon: "📏",
    color: "#0EA5E9", // sky-500 (clean, structured)
  },
  {
    name: "Studied Server Components",
    description: "Next.js black magic",
    time: "1w ago",
    icon: "🧙‍♂️",
    color: "#8B5CF6", // violet-500 (wizard = mystical purple vibes)
  },
  {
    name: "Image Upload Done",
    description: "UploadThing integrated",
    time: "1h ago",
    icon: "📤",
    color: "#3B82F6", // blue-500 (upload, clarity, cloud vibes)
  },
  {
    name: "Added Admin Dashboard",
    description: "Built with Zustand + Tailwind",
    time: "3d ago",
    icon: "🛠️",
    color: "#F97316", // orange-500 (builder energy)
  },
  {
    name: "Integrated Payment System",
    description: "Stripe FTW",
    time: "5h ago",
    icon: "💸",
    color: "#22C55E", // green-500 (money = green, naturally)
  },
  {
    name: "Hotel App Shipped",
    description: "Fullstack Next.js + MongoDB",
    time: "6h ago",
    icon: "🏨",
    color: "#0F766E", // teal-700 (premium, classic, hotel-like)
  },
  {
    name: "New Project Live",
    description: "Deployed on Vercel",
    time: "1d ago",
    icon: "🚀",
    color: "#4ADE80", // green-400 (feels fresh, alive)
  },
  {
    name: "Portfolio Updated",
    description: "v3 now sleeker & faster",
    time: "3h ago",
    icon: "🎯",
    color: "#EAB308", // yellow-500 (target = focus, energy)
  },
  {
    name: "GitHub Repo Trending",
    description: "200+ stars on open source",
    time: "2d ago",
    icon: "📈",
    color: "#F59E0B", // amber-500 (growth, upward momentum)
  },
  {
    name: "PR Merged!",
    description: "Contributed to Aceternity UI",
    time: "4d ago",
    icon: "🎉",
    color: "#EC4899", // pink-500 (celebration)
  },
  {
    name: "Wrote a Case Study",
    description: "Lessons from real-world dev",
    time: "6d ago",
    icon: "📝",
    color: "#10B981", // emerald-500 (writing, thoughtful green)
  },
];


notifications = Array.from({ length: 100 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AchievementList({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
          className
        )}
      >
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
