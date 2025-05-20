import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { GitPullRequest, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const { targetRef, isIntersecting } = useIntersectionObserver(
    {
      threshold: 0.1,
    },
    true,
  );

  return (
    <section
      id="hero"
      className="container mx-auto px-20 max-sm:px-6 py-18 md:py-32 flex flex-col md:flex-row items-center gap-12"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isIntersecting ? 1 : 0,
          y: isIntersecting ? 0 : 20,
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-primary dark:text-blue-400 font-medium">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white">
          Aajad Sain
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300">
          Front-End Developer
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl flex items-center">
          <MapPin className="mr-2 h-4 w-4 text-slate-400" />
          Rajasthan, India
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Front-End Developer skilled in React, Tailwind CSS, and JavaScript.
          Passionate about building clean, responsive UIs and delivering great
          user experiences.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg" className="px-6 py-3" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6 py-3 border-primary text-primary hover:bg-blue-50 dark:hover:bg-slate-800"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>
        <div className="pt-6 flex gap-5">
          <a
            href="https://github.com/aadeshsain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <GitPullRequest className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/aadesh-sain-002191317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:sainaadesh1121@gmail.com"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isIntersecting ? 1 : 0,
          scale: isIntersecting ? 1 : 0.9,
        }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="rounded-full w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-5xl font-bold">
          AS
        </div>
      </motion.div>
    </section>
  );
}
