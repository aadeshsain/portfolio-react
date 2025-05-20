import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";

export default function Experience() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1
  });

  return (
    <section 
      id="experience" 
      className="py-20 bg-white dark:bg-slate-800"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-6 ${isIntersecting ? 'section-fade visible' : 'section-fade'}`}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Work Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey in web development.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="relative pl-8 sm:pl-32 py-6 group"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              <div className="absolute left-0 sm:left-0 h-full w-10 sm:w-24 flex items-center justify-center">
                <div className="h-full w-px bg-slate-200 dark:bg-slate-700 relative ml-6 sm:ml-0">
                  <div className="w-4 h-4 rounded-full bg-primary dark:bg-blue-400 absolute -left-1.5 top-1 group-hover:w-5 group-hover:h-5 group-hover:-left-2 transition-all"></div>
                </div>
              </div>
              <time className="sm:absolute sm:left-0 sm:w-24 font-semibold text-slate-500 dark:text-slate-400 mb-1 sm:mb-0">
                2024–Present
              </time>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  Front-End Developer
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Abohar, Punjab</p>
              </div>
            </div>
            <ul className="text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
              <li>Developed responsive user interfaces using React, Tailwind CSS, and Bootstrap</li>
              <li>Implemented complex filtering features for e-commerce product listings</li>
              <li>Built reusable React components to improve development workflow</li>
              <li>Optimized website performance through code splitting and lazy loading</li>
              <li>Collaborated with designers to implement pixel-perfect designs</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
