"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet,  SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// Animation variants
const logoVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const navContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const logoShapeVariants = {
  hidden: { scale: 0, rotate: -90 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: 0.1 + i * 0.1,
    },
  }),
  hover: (i: number) => ({
    rotate: i * 180,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 8,
    },
  }),
};

export default function Header() {
  const [activeItem, setActiveItem] = useState("/");

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-background backdrop-blur-sm bg-opacity-90 border-b-4 border-black"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          whileHover="hover"
        >
          <Link href="/" className="flex items-center">
            <motion.div className="flex items-center space-x-1">
              <motion.div
                className="h-8 w-8 bg-bauhaus-red bauhaus-circle"
                variants={logoShapeVariants}
                custom={1}
                whileHover="hover"
              />
              <motion.div
                className="h-8 w-8 bg-bauhaus-blue bauhaus-square"
                variants={logoShapeVariants}
                custom={2}
                whileHover="hover"
              />
              <motion.div
                className="h-8 w-8 bg-bauhaus-yellow bauhaus-triangle"
                variants={logoShapeVariants}
                custom={3}
                whileHover="hover"
              />
            </motion.div>
            <motion.span
              className="ml-3 text-xl font-bold tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              JACK.PHAT
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-1"
          variants={navContainer}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.div key={item.href} variants={navItem} whileHover="hover">
              <Link
                href={item.href}
                className={`px-4 py-2 font-medium text-lg transition-all ${
                  activeItem === item.href
                    ? "bg-black text-white"
                    : "hover:bg-bauhaus-blue hover:text-white"
                }`}
                onClick={() => setActiveItem(item.href)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="md:hidden"
        >
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="brutalist-outline border-none p-0 shadow-none [&_svg:not([class*='size-'])]:size-6"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent  side="right" className="border-l-4 border-black">
              <SheetHeader className="sr-only">
                <SheetTitle>Edit profile</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-12 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2 font-medium text-lg transition-all block ${
                        activeItem === item.href
                          ? "bg-black text-white"
                          : "hover:bg-bauhaus-blue hover:text-white"
                      }`}
                      onClick={() => {
                        setActiveItem(item.href);
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.header>
  );
}
