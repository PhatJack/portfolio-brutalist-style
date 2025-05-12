"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import HighLightText from "./highlight-text";

interface BauhausShape {
  type: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
}
const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.3,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      delay: 0.5,
    },
  },
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.7,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
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

const heroBoxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      delay: 0.1,
    },
  },
};

export default function Hero() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animate Bauhaus geometric shapes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Bauhaus shapes
    const shapes: BauhausShape[] = [];
    const colors = [
      "#E63946",
      "#22D3EE",
      "#FFD166",
      "#2A9D8F",
      "#D946EF",
      "#F97316",
      "#A3E635",
    ];

    // Create initial shapes
    for (let i = 0; i < 15; i++) {
      shapes.push({
        type: Math.floor(Math.random() * 3), // 0: circle, 1: square, 2: triangle
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 80 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update shapes - using for...of instead of forEach
      for (const shape of shapes) {
        ctx.save();
        ctx.fillStyle = shape.color;
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);

        // Draw different shapes
        switch (shape.type) {
          case 0: // Circle
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 1: // Square
            ctx.fillRect(
              -shape.size / 2,
              -shape.size / 2,
              shape.size,
              shape.size
            );
            break;
          case 2: // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -shape.size / 2);
            ctx.lineTo(-shape.size / 2, shape.size / 2);
            ctx.lineTo(shape.size / 2, shape.size / 2);
            ctx.closePath();
            ctx.fill();
            break;
        }

        ctx.restore();

        // Update shape position
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        // Bounce off walls
        if (shape.x < -shape.size || shape.x > canvas.width + shape.size) {
          shape.speedX *= -1;
        }
        if (shape.y < -shape.size || shape.y > canvas.height + shape.size) {
          shape.speedY *= -1;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute h-full inset-0 z-0" />

      {/* Content */}
      <div className="container px-2 mx-auto relative z-10">
        <motion.div
          className="max-w-2xl brutalist-shadow p-8 bg-primary border-4"
          variants={heroBoxVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="bg-bauhaus-blue text-white px-1 inline-block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              JACKPHAT.
            </motion.span>
            <motion.span
              className="bg-bauhaus-red text-white px-1 inline-block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              FRONTEND.
            </motion.span>
            <motion.span
              className="bg-bauhaus-yellow text-black px-1 inline-block"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              DEVELOPER.
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 font-medium"
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
          >
            I am a seinor student at the{" "}
            <HighLightText
              text="Sai Gon University"
              backgroundColor="blue"
              link="https://www.sgu.edu.vn"
            />{" "}
            of{" "}
            <HighLightText
              text="HoChiMinh city"
              backgroundColor="yellow"
              link="https://vietnam.travel/places-to-go/southern-vietnam/ho-chi-minh-city"
            />
            , majoring in Software Engineer. I am passionate about web
            development and design, and I am always eager to learn new
            technologies and improve my skills.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="bg-black hover:bg-bauhaus-blue text-white font-bold px-8 py-6 text-lg brutalist-shadow">
                View Projects
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                onClick={() => router.push("#about")}
                className="border-4 dark:border-border hover:bg-bauhaus-yellow dark:hover:bg-bauhaus-yellow hover:text-black font-bold px-8 py-6 text-lg brutalist-shadow"
              >
                About Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
