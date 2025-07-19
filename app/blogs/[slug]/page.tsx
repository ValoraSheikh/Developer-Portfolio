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
  // Fetch content and metadata
  const { content, data } = getBlogBySlug(params.slug)
  
  // Initialize custom MDX components
  const mdxComponents = useMDXComponents({})

  return (
    <div className="max-w-3xl mx-auto py-8 px-20">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{data.date}</p>
      <Image
        src={data.image}
        alt={data.title}
        width={800}
        height={450}
        className="w-full h-auto rounded-lg mb-8"
      />

      <div className="px-6 md:px-20">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </div>
    </div>
  )
}
