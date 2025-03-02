
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Brain, ChartLine, CheckCircle, Clock, GraduationCap, Rocket, Users, Award } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FeaturedBrain from './FeaturedBrain';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features: Feature[] = [
    {
      id: 'roadmap',
      title: 'Roadmap Generation',
      description: 'Automatically extract key topics and create structured study plans based on your materials.',
      icon: BookOpen,
      color: 'bg-blue-400/10'
    },
    {
      id: 'timetable',
      title: 'Timetable Designer',
      description: 'Create personalized study schedules that adapt to your availability and learning preferences.',
      icon: Calendar,
      color: 'bg-purple-400/10'
    },
    {
      id: 'todo',
      title: 'To-Do App',
      description: 'Keep track of your daily study tasks with intelligent prioritization and reminders.',
      icon: CheckCircle,
      color: 'bg-green-400/10'
    },
    {
      id: 'plans',
      title: 'Personalized Study Plans',
      description: 'Tailor your study plan to fit your schedule, goals, and learning pace.',
      icon: Brain,
      color: 'bg-indigo-400/10'
    },
    {
      id: 'flashcards',
      title: 'Flashcards & Summaries',
      description: 'Boost your retention with AI-powered flashcards and concise topic summaries.',
      icon: GraduationCap,
      color: 'bg-amber-400/10'
    },
    {
      id: 'progress',
      title: 'Progress Tracking',
      description: 'Visualize your learning journey and celebrate milestones with detailed analytics.',
      icon: ChartLine,
      color: 'bg-rose-400/10'
    },
    {
      id: 'team',
      title: 'Team Study Sessions',
      description: 'Collaborate and learn together with synchronized study sessions and shared resources.',
      icon: Users,
      color: 'bg-sky-400/10'
    },
    {
      id: 'search',
      title: 'AI Search Engine',
      description: 'Get instant answers to your study queries with our intelligent search system.',
      icon: Rocket,
      color: 'bg-emerald-400/10'
    },
    {
      id: 'gamification',
      title: 'Gamification',
      description: 'Stay motivated with achievements, badges, and rewards for completing study goals.',
      icon: Award,
      color: 'bg-orange-400/10'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 inline-block"
          >
            All-in-One Platform
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6"
          >
            Powerful Features for Effective Learning
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            StudyAI combines powerful AI technology with intuitive design to create the ultimate study companion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isActive={activeFeature === feature.id}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            />
          ))}
        </div>

        <FeaturedBrain activeFeature={activeFeature} />
      </div>
    </section>
  );
};

export default Features;
