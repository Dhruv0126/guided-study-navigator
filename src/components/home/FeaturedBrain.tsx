
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface FeaturedBrainProps {
  activeFeature: string | null;
}

const FeaturedBrain = ({ activeFeature }: FeaturedBrainProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Simulate brain activity based on active feature
  useEffect(() => {
    if (activeFeature) {
      setIsVisible(true);
    } else {
      // Small delay before hiding to make the transition smoother
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      
      return () => clearTimeout(timeout);
    }
  }, [activeFeature]);

  // Get appropriate title and description based on active feature
  const getFeatureContent = () => {
    switch (activeFeature) {
      case 'roadmap':
        return {
          title: 'Intelligent Roadmap Generation',
          description: 'Our advanced algorithms analyze your learning materials and create structured, personalized study roadmaps that guide you through complex topics at your own pace.'
        };
      case 'timetable':
        return {
          title: 'Smart Timetable Designer',
          description: 'The AI-powered scheduler automatically creates optimized study timetables based on your availability, learning preferences, and priority subjects.'
        };
      case 'todo':
        return {
          title: 'Intelligent Task Management',
          description: 'Keep track of all your study tasks with smart prioritization, automatic reminders, and seamless calendar integration.'
        };
      case 'plans':
        return {
          title: 'Dynamic Study Plans',
          description: 'Your study plans adapt in real-time based on your progress, learning pace, and changing priorities to ensure optimal knowledge retention.'
        };
      case 'flashcards':
        return {
          title: 'AI-Generated Learning Materials',
          description: 'Transform your notes into interactive flashcards and concise summaries that highlight key concepts and make revision more effective.'
        };
      case 'progress':
        return {
          title: 'Advanced Progress Analytics',
          description: 'Visualize your learning journey with detailed analytics that track your time spent, topics mastered, and overall knowledge growth.'
        };
      case 'team':
        return {
          title: 'Collaborative Learning Environment',
          description: 'Study more effectively with peers through synchronized sessions, shared resources, and real-time collaboration tools.'
        };
      case 'search':
        return {
          title: 'Intelligent Knowledge Search',
          description: 'Our AI search engine understands complex queries and provides precise answers from your study materials and trusted academic sources.'
        };
      case 'gamification':
        return {
          title: 'Motivational Reward System',
          description: 'Stay engaged with your learning goals through achievements, badges, and a points system that makes studying more enjoyable and rewarding.'
        };
      default:
        return {
          title: 'Interactive Brain Visualization',
          description: 'Hover over any feature to see how StudyAI enhances different aspects of your learning process with advanced AI technology.'
        };
    }
  };

  const content = getFeatureContent();

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-secondary to-secondary/20 glass-card">
      <div className="p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="z-10">
          <motion.h3 
            key={activeFeature ? activeFeature : 'default'} // Key change forces animation restart
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-display font-bold mb-6"
          >
            {content.title}
          </motion.h3>
          
          <motion.p
            key={`desc-${activeFeature ? activeFeature : 'default'}`} // Key change forces animation restart
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            {content.description}
          </motion.p>
          
          <Button className="rounded-full px-8">
            Explore Feature
          </Button>
        </div>
        
        <div ref={canvasRef} className="relative h-[350px] flex items-center justify-center">
          {/* Simulated Brain Visualization */}
          <div className="relative w-[300px] h-[300px]">
            {/* Brain outline - base shape */}
            <div className="absolute inset-0 rounded-[42%_58%_38%_62%_/_63%_43%_57%_37%] border-2 border-primary/20 backdrop-blur-sm"></div>
            
            {/* Brain lobes - represented as glowing blobs */}
            <motion.div 
              className={`absolute w-2/5 h-2/5 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-primary/30 filter blur-md transition-all duration-1000 top-[10%] left-[15%] ${activeFeature === 'roadmap' || activeFeature === 'plans' ? 'opacity-90 scale-110 animate-pulse-light' : 'opacity-30'}`}
            ></motion.div>
            
            <motion.div 
              className={`absolute w-1/3 h-1/3 rounded-[40%_60%_70%_30%_/_40%_50%_50%_60%] bg-blue-400/30 filter blur-md transition-all duration-1000 top-[15%] right-[20%] ${activeFeature === 'timetable' || activeFeature === 'search' ? 'opacity-90 scale-110 animate-pulse-light' : 'opacity-30'}`}
            ></motion.div>
            
            <motion.div 
              className={`absolute w-2/5 h-2/5 rounded-[50%_50%_40%_60%_/_40%_60%_60%_40%] bg-purple-400/30 filter blur-md transition-all duration-1000 bottom-[15%] left-[20%] ${activeFeature === 'todo' || activeFeature === 'progress' ? 'opacity-90 scale-110 animate-pulse-light' : 'opacity-30'}`}
            ></motion.div>
            
            <motion.div 
              className={`absolute w-1/3 h-1/3 rounded-[60%_40%_60%_40%_/_40%_60%_40%_60%] bg-emerald-400/30 filter blur-md transition-all duration-1000 bottom-[10%] right-[15%] ${activeFeature === 'flashcards' || activeFeature === 'team' || activeFeature === 'gamification' ? 'opacity-90 scale-110 animate-pulse-light' : 'opacity-30'}`}
            ></motion.div>
            
            {/* Connecting neural pathways */}
            <motion.div 
              className="absolute inset-0 z-0 opacity-60"
              style={{
                background: `
                  radial-gradient(circle at 35% 30%, transparent 0%, transparent 5px, rgba(59, 130, 246, 0.1) 5px, transparent 20px),
                  radial-gradient(circle at 65% 30%, transparent 0%, transparent 5px, rgba(168, 85, 247, 0.1) 5px, transparent 20px),
                  radial-gradient(circle at 35% 70%, transparent 0%, transparent 5px, rgba(16, 185, 129, 0.1) 5px, transparent 20px),
                  radial-gradient(circle at 65% 70%, transparent 0%, transparent 5px, rgba(249, 115, 22, 0.1) 5px, transparent 20px)
                `
              }}
            ></motion.div>
            
            {/* Animated neural connections */}
            <motion.div 
              className={`absolute h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform rotate-45 transition-all duration-700 top-[35%] left-0 right-0 ${activeFeature ? 'opacity-80' : 'opacity-30'}`}
              animate={{ 
                width: activeFeature ? "100%" : "80%",
                left: activeFeature ? "0%" : "10%" 
              }}
            ></motion.div>
            
            <motion.div 
              className={`absolute w-[1px] bg-gradient-to-b from-purple-400/0 via-purple-400/50 to-purple-400/0 transition-all duration-700 top-0 bottom-0 left-[40%] ${activeFeature ? 'opacity-80' : 'opacity-30'}`}
              animate={{ 
                height: activeFeature ? "100%" : "80%",
                top: activeFeature ? "0%" : "10%" 
              }}
            ></motion.div>
            
            {/* Center glow */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-white/20 filter blur-xl"
              animate={{
                scale: isVisible ? [1, 1.2, 1] : 1,
                opacity: isVisible ? [0.5, 0.8, 0.5] : 0.5
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrain;
