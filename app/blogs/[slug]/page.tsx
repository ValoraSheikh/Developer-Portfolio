import ClientBlogPost from "@/components/Blog/BlogPost";
import { serialize } from "next-mdx-remote/serialize";
import { getBlogBySlug } from "@/lib/loadBlog";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data } = await getBlogBySlug(slug);

  return {
    title: `${data.title} | Aman Sheikh – Full Stack Developer`,
    description:
      data.description ||
      "Read this blog by Aman Sheikh on modern web development.",
    keywords: data.tags || [
      "Web Development",
      "Next.js",
      "Full Stack",
      "TailwindCSS",
      "MongoDB",
    ],
    authors: [{ name: "Aman Sheikh", url: "https://yourdomain.com" }],
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      url: `https://yourdomain.com/blogs/${slug}`,
      siteName: "Aman Sheikh Portfolio",
      publishedTime: data.date,
      images: [
        {
          url: data.image || "https://yourdomain.com/default-og-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image || "https://yourdomain.com/default-og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: `https://yourdomain.com/blogs/${slug}`,
    },
  };
}

type Props = {
  params: { slug: string };
};

interface BlogPostData {
  content: string;
  data: {
    title: string;
    date: string;
    image: string;
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const { content, data } = (await getBlogBySlug(slug)) as BlogPostData
  const serializedContent = await serialize(content);
  return <ClientBlogPost content={serializedContent} data={data} />;
}
