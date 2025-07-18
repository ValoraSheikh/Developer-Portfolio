import { IconCloud } from "@/components/magicui/icon-cloud";
import { AchievementList } from "./achievement-list";

const slugs = [
  "typescript",
  "samsungpay",
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
<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-black min-h-[80vh]">
  <div className="relative flex items-center justify-center overflow-hidden p-1">
    <IconCloud images={images} />
  </div>

  <div className="p-10">
    <AchievementList />
  </div>
</div>

  );
}


