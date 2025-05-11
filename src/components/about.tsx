"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const shapesContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const shapeVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: i * 0.1,
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-20 flex items-center bg-[#f2f2f2]">
      <div className="container px-2 mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Left Column */}
          <motion.div variants={fadeInUp}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 inline-block p-2 bg-black text-white"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              viewport={{ once: true }}
            >
              ABOUT ME
            </motion.h2>
            <motion.p
              className="text-lg brutalist-outline brutalist-shadow p-4 bg-white mb-6"
              variants={fadeInUp}
            >
              I&apos;m{" "}
              <span className="font-semibold bg-bauhaus-red text-white px-1">
                Nguyen Tien Phat
              </span>
              , a passionate{" "}
              <span className="bg-bauhaus-yellow font-semibold px-1 text-white">
                frontend developer
              </span>{" "}
              with a love for creating unique and engaging digital experiences.
              I specialize in building user-friendly interfaces and interactive
              web applications that prioritize usability and accessibility. I
              believe that design should not only be visually pleasing but also
              serve a purpose. I am constantly exploring new technologies and
              design trends to enhance my skills and stay current in the
              ever-evolving world of{" "}
              <span className="bg-bauhaus-blue text-white font-semibold px-1">
                web development
              </span>
              .
            </motion.p>

            <motion.div
              className="bg-brutalist-green text-white p-4 brutalist-shadow mb-6"
              variants={itemFadeIn}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <h3 className="text-xl font-bold mb-2">HOBBIES</h3>
              <ul className="space-y-1">
                <li>Playing game</li>
                <li>Listening to music</li>
                <li>Learning new things</li>
                <li>Coffee study</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-fit"
            >
              <Button
                asChild
                className="bg-black hover:bg-bauhaus-yellow hover:text-black text-white font-bold px-8 py-6 text-lg brutalist-shadow"
              >
                <Link
                  href={"/Nguyen_Tien_Phat_CV.pdf"}
                  download={true}
                  target="_blank"
                >
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div className="relative" variants={fadeInUp}>
            <motion.div
              className="border-4 border-black bg-white p-4 sm:p-6 brutalist-shadow"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="grid sm:grid-cols-2 gap-4 mb-8"
                variants={staggerContainer}
              >
                <motion.div
                  className="bg-bauhaus-red text-white p-4 brutalist-shadow"
                  variants={itemFadeIn}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">PROGRAMMING SKILLS</h3>
                  <ul className="space-y-1">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "HTML",
                      "CSS",
                      "PHP",
                      "C++",
                    ].map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-bauhaus-blue text-white p-4 brutalist-shadow"
                  variants={itemFadeIn}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">
                    Frameworks/Libraries
                  </h3>
                  <ul className="space-y-1">
                    {[
                      "React",
                      "Next.js",
                      "Astro",
                      "Angular",
                      "Redux",
                      "React Query",
                      "React Hook Form",
                    ].map((framework, index) => (
                      <li key={index}>{framework}</li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-brutalist-teal text-white p-4 brutalist-shadow"
                  variants={itemFadeIn}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">
                    Animation & UI Libraries
                  </h3>
                  <ul className="space-y-1">
                    {[
                      "Framer",
                      "Material UI",
                      "Tailwind CSS",
                      "Shadcn UI",
                      "Ant Design",
                      "Bootstrap",
                      "Sass",
                    ].map((framework, index) => (
                      <li key={index}>{framework}</li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-brutalist-orange text-white p-4 brutalist-shadow"
                  variants={itemFadeIn}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">Others</h3>
                  <ul className="space-y-1">
                    {[
                      "Github",
                      "Figma",
                      "Firebase",
                      "Adobe Illustrator",
                      "Adobe Photoshop",
                    ].map((framework, index) => (
                      <li key={index}>{framework}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              <motion.blockquote
                className="border-l-4 border-black pl-4 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                &quot;Work hard in silence, let your success be your
                noise.&quot;
                <footer className="text-sm mt-2 font-bold">— Annoymous</footer>
              </motion.blockquote>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-40 h-40 bg-bauhaus-yellow -z-10"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 5, transition: { duration: 0.3 } }}
            />
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-brutalist-pink -z-10"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ rotate: -5, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
