"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  bgColor: string;
  textColor: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Geometric Compositions",
    description:
      "A series of digital artworks based on Bauhaus principles of form and function.",
    category: "Design",
    imageUrl: "/projects/project1.svg",
    bgColor: "bg-bauhaus-red",
    textColor: "text-white",
    link: "/projects/geometric-compositions",
  },
  {
    id: 2,
    title: "Brutal Architecture",
    description:
      "Photographic study of brutalist structures with a focus on form and material.",
    category: "Photography",
    imageUrl: "/projects/project2.svg",
    bgColor: "bg-bauhaus-blue",
    textColor: "text-white",
    link: "/projects/brutal-architecture",
  },
  {
    id: 3,
    title: "Type Experiments",
    description:
      "Exploring typography through the lens of Bauhaus principles and brutalist aesthetics.",
    category: "Typography",
    imageUrl: "/projects/project3.svg",
    bgColor: "bg-bauhaus-yellow",
    textColor: "text-black",
    link: "/projects/type-experiments",
  },
  {
    id: 4,
    title: "Interface Designs",
    description:
      "Bold UI concepts that blend functionality with expressive brutalist elements.",
    category: "UI/UX",
    imageUrl: "/projects/project4.svg",
    bgColor: "bg-brutalist-purple",
    textColor: "text-white",
    link: "/projects/interface-designs",
  },
  {
    id: 5,
    title: "Color Studies",
    description:
      "Exploration of color theory through the historical context of Bauhaus.",
    category: "Color Theory",
    imageUrl: "/projects/project5.svg",
    bgColor: "bg-brutalist-green",
    textColor: "text-white",
    link: "/projects/color-studies",
  },
  {
    id: 6,
    title: "Material Contrast",
    description:
      "Examining the interplay between different materials inspired by brutalist architecture.",
    category: "Materials",
    imageUrl: "/projects/project6.svg",
    bgColor: "bg-brutalist-orange",
    textColor: "text-black",
    link: "/projects/material-contrast",
  },
];

const categories = [
  "All",
  "NextJS",
  "ReactJS",
  "Portfolio",
  "C#",
  "Python",
  "Framer motion",
	"GSAP"
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 0.8,
    },
  },
  hover: {
    y: -10,
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const filterVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.5,
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container px-2 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 inline-block p-2 bg-black text-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
          >
            PROJECTS
          </motion.h2>

          <motion.div
            className="overflow-x-auto pb-4"
            variants={filterVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                >
                  <Button
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-6 py-2 text-lg font-bold transition-all
                      ${
                        activeCategory === category
                          ? "bg-black text-white border-4 border-black hover:bg-black"
                          : "bg-white text-black border-4 border-black hover:bg-bauhaus-yellow"
                      }
                    `}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bauhaus-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
            >
              <HoverCard key={project.id} openDelay={0} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <Card
                    className={`${project.bgColor} ${project.textColor} overflow-hidden border-4 border-black brutalist-shadow transition-all cursor-pointer`}
                  >
                    <div className="h-40 relative">
                      {/* SVG Placeholder - will be replaced with actual SVG/images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="bauhaus-shape h-20 w-20 bg-white opacity-70"
                          animate={{
                            rotate: [0, 10, 0, -10, 0],
                            scale: [1, 1.1, 1, 0.9, 1],
                          }}
                          transition={{
                            duration: 10,
                            ease: "easeInOut",
                            times: [0, 0.25, 0.5, 0.75, 1],
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 0,
                          }}
                        />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">
                        {project.title}
                      </CardTitle>
                      <CardDescription
                        className={`${project.textColor} opacity-90`}
                      >
                        {project.category}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 border-4 rounded-none border-black">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p>{project.description}</p>
                    <Button className="w-full bg-black hover:bg-bauhaus-blue text-white font-bold">
                      View Project
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-white border-4 border-black text-black hover:bg-bauhaus-yellow font-bold px-8 py-6 text-lg brutalist-shadow">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
