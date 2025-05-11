"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, MapPin, Phone } from "lucide-react";
import { Label } from "./ui/label";

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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const socialContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const socialItem = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const contactInfo = {
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
  hover: {
    x: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally handle the form submission

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Show success message (in a real app)
    alert("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 flex items-center">
      <div className="container px-2 mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 inline-block p-2 bg-brutalist-pink text-white"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              viewport={{ once: true }}
            >
              GET IN TOUCH
            </motion.h2>

            <motion.p className="text-lg mb-8" variants={fadeInUp}>
              Interested in working together? Have questions about my process or
              approach? Drop me a message, and I&apos;ll get back to you as soon as
              possible.
            </motion.p>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div
                className="flex items-center space-x-4"
                variants={contactInfo}
                whileHover="hover"
              >
                <div className="h-10 w-10 bg-bauhaus-red bauhaus-square flex items-center justify-center text-white font-bold">
                  <AtSign size={20} />
                </div>
                <div>
                  <h3 className="font-bold leading-5">Email</h3>
                  <p className="text-lg">tienphat.ng693@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                variants={contactInfo}
                whileHover="hover"
              >
                <div className="h-10 w-10 bg-bauhaus-blue bauhaus-circle flex items-center justify-center text-white font-bold">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold leading-5">Phone</h3>
                  <p className="text-lg">{`(+84)`} 0344248396</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                variants={contactInfo}
                whileHover="hover"
              >
                <div className="h-10 w-10 bg-bauhaus-yellow bauhaus-triangle flex items-center justify-center text-white font-bold pt-2">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold leading-5">Location</h3>
                  <p className="text-lg">Ho Chi Minh City, VietNam 🇻🇳</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8 flex space-x-4"
              variants={socialContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="https://www.facebook.com/jack.willam2003"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center hover:bg-bauhaus-blue transition-colors"
                variants={socialItem}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">FB</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/sep_neit.tahp/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center hover:bg-bauhaus-red transition-colors"
                variants={socialItem}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">IG</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/phat-nguyen-tien/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center hover:bg-bauhaus-yellow hover:text-black transition-colors"
                variants={socialItem}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">IN</span>
              </motion.a>
              <motion.a
                href="https://behance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center hover:bg-brutalist-purple transition-colors"
                variants={socialItem}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">BE</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="relative" variants={fadeInUp}>
            <motion.form
              onSubmit={handleSubmit}
              className="border-4 bg-primary p-6 brutalist-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeInUp}>
                  <Label
                    htmlFor="name"
                    className="block text-lg font-bold mb-2"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border-4 border-black focus:border-bauhaus-blue focus:ring-0"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Label
                    htmlFor="email"
                    className="block text-lg font-bold mb-2"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-4 border-black focus:border-bauhaus-blue focus:ring-0"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Label
                    htmlFor="subject"
                    className="block text-lg font-bold mb-2"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border-4 border-black focus:border-bauhaus-blue focus:ring-0"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Label
                    htmlFor="message"
                    className="block text-lg font-bold mb-2"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border-4 border-black focus:border-bauhaus-blue focus:ring-0 min-h-[150px]"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-bauhaus-red text-white font-bold p-4 text-lg brutalist-shadow"
                  >
                    SEND MESSAGE
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -left-4 w-40 h-40 bg-brutalist-green -z-10"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ rotate: -5, transition: { duration: 0.3 } }}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-bauhaus-yellow -z-10"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 5, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
