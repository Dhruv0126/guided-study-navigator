
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import AnimatedCursor from '@/components/ui/AnimatedCursor';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';

const Index = () => {
  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedCursor />
      <Header />
      <Sidebar />
      
      <main className="pt-20">
        <Hero />
        <Features />
        
        {/* Testimonials Section */}
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 inline-block"
              >
                Success Stories
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6"
              >
                Loved by Students & Educators
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground"
              >
                Discover how StudyAI is transforming the learning experience for students around the world.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <span className="text-lg font-medium">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">James Smith</h4>
                    <p className="text-sm text-muted-foreground">Computer Science Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "StudyAI completely transformed how I prepare for exams. The personalized roadmaps and flashcards helped me understand complex concepts more efficiently than ever before."
                </p>
              </motion.div>
              
              {/* Testimonial 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <span className="text-lg font-medium">EL</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Emma Lee</h4>
                    <p className="text-sm text-muted-foreground">Medical Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The timetable designer and progress tracking features have been game-changers for me. I can now manage my heavy course load without feeling overwhelmed."
                </p>
              </motion.div>
              
              {/* Testimonial 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <span className="text-lg font-medium">RH</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Robert Harris</h4>
                    <p className="text-sm text-muted-foreground">University Professor</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As an educator, I've recommended StudyAI to all my students. The platform helps them stay organized and focused, resulting in better classroom engagement and performance."
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl overflow-hidden"
            >
              <div className="p-10 md:p-16 text-center">
                <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6 inline-block">
                  Get Started Today
                </span>
                
                <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 max-w-2xl mx-auto">
                  Ready to Transform Your Learning Experience?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Join thousands of students who are already using StudyAI to optimize their study time and achieve better results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium"
                  >
                    Create Free Account
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-white/80 text-foreground border border-border/50 font-medium"
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
