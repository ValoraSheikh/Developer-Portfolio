import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blogs')

export function getAllBlogs() {
  const files = fs.readdirSync(BLOG_DIR)

  return files
    .filter(file => file.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(BLOG_DIR, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)

      return {
        ...data,
        slug: filename.replace(/\.mdx$/, ''),
      }
    })
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(fileContent)

  return { content, data }
}
