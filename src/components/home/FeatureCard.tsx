
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const FeatureCard = ({ feature, index, isActive, onMouseEnter, onMouseLeave }: FeatureCardProps) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative group p-6 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer glass-card",
        isActive ? "shadow-lg scale-[1.02]" : "hover:shadow-md hover:scale-[1.01]"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Feature Icon Background */}
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all",
        feature.color
      )}>
        <Icon size={20} className="text-primary" />
      </div>
      
      <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{feature.description}</p>
      
      <div className="flex items-center text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
        <span>Learn more</span>
        <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>

      {/* Subtle hover effect overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 transition-opacity duration-300",
        isActive ? "opacity-100" : "group-hover:opacity-80"
      )} />
    </motion.div>
  );
};

export default FeatureCard;
