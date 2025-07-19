import { getBlogBySlug, getAllBlogs } from '@/lib/loadBlog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return blogs.map((blog: any) => ({ slug: blog.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const { content, data } = getBlogBySlug(params.slug)

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{data.date}</p>
      <Image src={data.image} alt='' height={100} width={200} className='rounded-lg'/>
      <article className="prose">
        <MDXRemote source={content} />
      </article>
    </div>
  )
}
