import Image from "next/image";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ShineBorder } from "@/components/magicui/shine-border";

type BlogType = {
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
};



export default async function BlogsPage() {
  const files = await fs.readdir(path.join(process.cwd(), "content/blogs"));

const blogs: BlogType[] = await Promise.all(
  files.map(async (fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fileContent = await fs.readFile(
      path.join(process.cwd(), "content/blogs", fileName),
      "utf8"
    );
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      author: data.author,
    } as BlogType;
  })
);



  console.log('here are the blogs', blogs);
  

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          The Blog
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Read from my technical brain dump and project learnings.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
          key={blog.slug}
          href={`/blogs/${blog.slug}`}
          className="group flex flex-col h-full hover:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 relative overflow-hidden"
          >
          <ShineBorder shineColor={"white"} key={blog.slug} />
            <div className="aspect-w-16 aspect-h-11">
              <Image
                width={600}
                height={300}
                className="w-full object-cover rounded-xl"
                src={blog.image || "https://placehold.co/600x300?text=No+Image"}
                alt={blog.title}
              />
            </div>

            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 group-hover:text-white">
                {blog.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                {blog.description}
              </p>
            </div>

            <div className="mt-auto flex items-center gap-x-3">
              <Image
                width={32}
                height={32}
                className="size-8 rounded-full"
                src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80`}
                alt="Author"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                  {blog.author || "Aman Singh"}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
