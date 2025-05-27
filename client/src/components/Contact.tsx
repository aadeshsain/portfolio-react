import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, MessagesSquare } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-white dark:bg-slate-800"
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-6 ${isIntersecting ? 'section-fade visible' : 'section-fade'}`}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-primary dark:text-blue-400 p-2 bg-blue-50 dark:bg-slate-700 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Email</p>
                    <a 
                      href="mailto:sainaadesh1121@gmail.com" 
                      className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                    >
                      sainaadesh1121@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary dark:text-blue-400 p-2 bg-blue-50 dark:bg-slate-700 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Phone</p>
                    <a 
                      href="tel:+916367708083" 
                      className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                    >
                      +91 6367708083
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary dark:text-blue-400 p-2 bg-blue-50 dark:bg-slate-700 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Location</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/aadeshsain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-slate-300 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/aadesh-sain-002191317" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-slate-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-center"
                  aria-label="Discord"
                >
                  <FaDiscord className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-50 dark:bg-slate-700/40 p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name
                </label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  required 
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com" 
                  required 
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?" 
                  required 
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Your message..." 
                  required 
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-y"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <MessagesSquare className="h-4 w-4" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
