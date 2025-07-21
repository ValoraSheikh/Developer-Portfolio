"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavbarSec() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className="w-full bg-navbar-bg text-white py-4 px-6 shadow-lg border-b border-zinc-950">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Identity */}
        <Link
          href="/"
          className="text-2xl font-sans font-bold text-white text-shadow-sm shadow-white hover:text-gray-300 transition-colors duration-300"
          aria-label="Aman Sheikh - Go to home page"
        >
          Aman Sheikh
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-sans relative group hover:text-gray-200 transition duration-75 py-1"
            >
              {link.name}
              {/* Subtle glow/underline effect on hover */}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-navbar-bg/60 backdrop-blur-md border-l border-gray-800 w-64"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate the site</SheetDescription>
              </SheetHeader>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-2 space-x-2 pt-8 pl-3.5 font-mono"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-medium text-white hover:text-gray-300 transition-colors duration-300"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
