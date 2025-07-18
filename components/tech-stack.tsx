import { IconCloud } from "@/components/magicui/icon-cloud";
import { AchievementList } from "./achievement-list";
import { AnimatedBadges } from "./ui/badges";

const slugs = [
  "auth0",
  "googlecalendar",
  "googlechrome",
  "mongodb",
  "mongoose",
  "supabase",
  "appwrite",
  "typescript",
  "tailwindcss",
  "notion",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function TechStack() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center pt-5 bg-black min-h-[80vh]">
      <div className="relative flex flex-col items-center justify-center overflow-hidden pl-6">
        <p className="text-4xl pb-20 text-left w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 font-sans ">
          Tech Stack
        </p>
        <AnimatedBadges/>
        <IconCloud images={images} />
      </div>

      <div className="lg:p-10">
        <AchievementList />
      </div>
    </div>
  );
}
