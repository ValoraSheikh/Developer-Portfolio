// components/ClientBlogPost.tsx
'use client'
import { useMDXComponents } from '@/mdx-components'
import Image from 'next/image'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface ClientBlogPostProps {
  content: MDXRemoteSerializeResult
  data: {
    title: string
    date: string
    image: string
  }
}

export default function ClientBlogPost({ content, data }: ClientBlogPostProps) {
  const mdxComponents = useMDXComponents({})
  return (
    <div className="bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-20 py-6 sm:py-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 leading-tight">{data.title}</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mb-6">{data.date}</p>
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={450}
          className="w-full h-auto rounded-lg mb-8 object-cover"
        />
        <article className="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
          <MDXRemote {...content} components={mdxComponents} /> {/* Spread content */}
        </article>
      </div>
    </div>
  )
}