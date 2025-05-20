import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";

export default function Education() {
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
      id="education" 
      className="py-20 bg-slate-50 dark:bg-slate-900"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-6 ${isIntersecting ? 'section-fade visible' : 'section-fade'}`}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Education</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          animate={isIntersecting ? "show" : "hidden"}
        >
          <motion.div 
            className="relative pl-8 sm:pl-32 py-6 group"
            variants={item}
          >
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              <div className="absolute left-0 sm:left-0 h-full w-10 sm:w-24 flex items-center justify-center">
                <div className="h-full w-px bg-slate-200 dark:bg-slate-700 relative ml-6 sm:ml-0">
                  <div className="w-4 h-4 rounded-full bg-primary dark:bg-blue-400 absolute -left-1.5 top-1 group-hover:w-5 group-hover:h-5 group-hover:-left-2 transition-all"></div>
                </div>
              </div>
              <time className="sm:absolute sm:left-0 sm:w-24 font-semibold text-slate-500 dark:text-slate-400 mb-1 sm:mb-0">
                2024
              </time>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Bachelor of Arts
                </h3>
                <p className="text-slate-600 dark:text-slate-400">SGN Khalsa PG College, Hanumangarh</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative pl-8 sm:pl-32 py-6 group"
            variants={item}
          >
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              <div className="absolute left-0 sm:left-0 h-full w-10 sm:w-24 flex items-center justify-center">
                <div className="h-full w-px bg-slate-200 dark:bg-slate-700 relative ml-6 sm:ml-0">
                  <div className="w-4 h-4 rounded-full bg-primary dark:bg-blue-400 absolute -left-1.5 top-1 group-hover:w-5 group-hover:h-5 group-hover:-left-2 transition-all"></div>
                </div>
              </div>
              <time className="sm:absolute sm:left-0 sm:w-24 font-semibold text-slate-500 dark:text-slate-400 mb-1 sm:mb-0">
                2023
              </time>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  High School
                </h3>
                <p className="text-slate-600 dark:text-slate-400">Govt. School, Hanumangarh</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
