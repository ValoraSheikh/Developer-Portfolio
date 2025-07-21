import { Header } from "@/components/navbar";

export const metadata = {
  title: "Aman Sheikh – Full Stack Developer Portfolio",
  description:
    "Building modern web apps with Next.js, Tailwind, and MongoDB. Explore my work, blog, and contact me to collaborate.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "TailwindCSS",
    "MongoDB",
    "Portfolio",
    "Freelance Web Developer",
  ],
  openGraph: {
    title: "Aman Sheikh – Full Stack Developer",
    description:
      "Explore my portfolio, blog, and get in touch. Built with Next.js, MongoDB, and TailwindCSS.",
    url: "https://yourdomain.com",
    siteName: "Aman Sheikh Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dxlh1tom2/image/upload/v1753085719/ChatGPT_Image_Jul_21_2025_01_42_49_PM_y5yls9.png",
        width: 1200,
        height: 630,
        alt: "Aman Sheikh Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Sheikh – Full Stack Developer",
    description:
      "Explore my portfolio and blog. Built using Next.js, MongoDB, and TailwindCSS.",
    images: [
      "https://res.cloudinary.com/dxlh1tom2/image/upload/v1753085719/ChatGPT_Image_Jul_21_2025_01_42_49_PM_y5yls9.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
