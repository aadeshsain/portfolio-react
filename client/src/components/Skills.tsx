import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { frontendSkills, toolsSkills } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-slate-800"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-6 ${isIntersecting ? 'section-fade visible' : 'section-fade'}`}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">My Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with regularly to bring web projects to life.
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-6">Frontend Technologies</h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={container}
            initial="hidden"
            animate={isIntersecting ? "show" : "hidden"}
          >
            {frontendSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-badge flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700/40 rounded-lg shadow-sm hover:shadow"
                variants={item}
              >
                <div className="text-3xl text-primary dark:text-blue-400 mb-2">
                  <skill.icon />
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-6">Tools & Development</h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={container}
            initial="hidden"
            animate={isIntersecting ? "show" : "hidden"}
          >
            {toolsSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-badge flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700/40 rounded-lg shadow-sm hover:shadow"
                variants={item}
              >
                <div className="text-3xl text-primary dark:text-blue-400 mb-2">
                  <skill.icon />
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
