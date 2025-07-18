'use client'

import { motion, useAnimation, easeOut } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const techStack = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Docker",
  "Vercel",
  "Appwrite",
  "AWS",
  "Mongo DB",
  "Mongoose",
  "Git & GitHub",
  "REST API",
  "Responsive Design",
]

export function AnimatedBadges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const badgeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07,
        duration: 1,
        ease: easeOut,
      },
    }),
  }

  return (
    <div ref={ref} className="flex flex-wrap gap-3">
      {techStack.map((tech, i) => (
        <motion.div
          key={tech}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={badgeVariants}
          className="px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-md shadow-inner border border-white/10 hover:bg-white/20 hover:scale-105 transition-transform"
        >
          {tech}
        </motion.div>
      ))}
    </div>
  )
}
