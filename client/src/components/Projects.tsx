import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Globe, Github } from "lucide-react";

export default function Projects() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-slate-50 dark:bg-slate-900"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-6 ${isIntersecting ? 'section-fade visible' : 'section-fade'}`}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          animate={isIntersecting ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl"
              variants={item}
            >
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <span className="text-xl text-slate-500 dark:text-slate-400">{project.title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-2 py-1 rounded-md"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      className="text-primary hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium flex items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
