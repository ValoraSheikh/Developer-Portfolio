import Link from "next/link"
import { Mails, PhoneCall } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IconBrandWhatsappFilled } from "@tabler/icons-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 text-gray-300 py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Identity */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Aman Sheikh</h3>
          <p className="text-sm">Building full-stack web experiences.</p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white hover:underline">
                Contact
              </Link>
            </li>
            
          </ul>
        </nav>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Socials</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/ValoraSheikh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/valorant-aman-238a73335/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedInLogoIcon className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/AmanSheikhKhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaSquareXTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Contact Shortcuts */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:haarishsheikh04@gmail.com"
                className="flex items-center gap-2 hover:text-white hover:underline"
              >
                <Mails  className="h-5 w-5" />
                <span>haarishsheikh04@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+919784413782" className="flex items-center gap-2 hover:text-white hover:underline">
                <PhoneCall className="h-5 w-5" />
                <span>+91&nbsp;97844&nbsp;13782</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/9784413782"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white hover:underline"
              >
                <IconBrandWhatsappFilled className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        © {year} Aman Sheikh. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
