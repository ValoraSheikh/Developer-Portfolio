// app/blogs/[slug]/page.tsx
import { getBlogBySlug, getAllBlogs } from '@/lib/loadBlog'
import { useMDXComponents } from '@/mdx-components'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllBlogs().map(blog => ({ slug: blog.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const { content, data } = getBlogBySlug(params.slug)
  const mdxComponents = useMDXComponents({})

  return (
    <div className="bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-20 py-6 sm:py-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 leading-tight">
          {data.title}
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground mb-6">
          {data.date}
        </p>

        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={450}
          className="w-full h-auto rounded-lg mb-8 object-cover"
        />

        <article className="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </div>
    </div>
  )
}
