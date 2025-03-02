
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Calendar, Brain, ChartLine, CheckCircle, Clock, GraduationCap, Rocket, UserCircle, Users, Award, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isCollapsed: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, isCollapsed }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "flex items-center p-3 text-sm font-medium rounded-lg transition-all",
        isActive 
          ? "bg-primary/10 text-primary" 
          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        isCollapsed ? "justify-center" : "space-x-3"
      )}
    >
      <Icon size={20} />
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const features = [
    { icon: BookOpen, label: 'Roadmap Generation', href: '/features/roadmap' },
    { icon: Calendar, label: 'Timetable Designer', href: '/features/timetable' },
    { icon: CheckCircle, label: 'To-Do App', href: '/features/todo' },
    { icon: Brain, label: 'Personalized Plans', href: '/features/plans' },
    { icon: GraduationCap, label: 'Flashcards & Summaries', href: '/features/flashcards' },
    { icon: ChartLine, label: 'Progress Tracking', href: '/features/progress' },
    { icon: Users, label: 'Team Study Sessions', href: '/features/team' },
    { icon: Rocket, label: 'AI Search Engine', href: '/features/search' },
    { icon: Award, label: 'Gamification', href: '/features/gamification' },
  ];

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 flex flex-col glass border-r border-border/50 transition-all duration-300 ease-in-out transform pt-20",
        isCollapsed ? "w-[80px]" : "w-[280px]"
      )}
    >
      <div className="flex flex-col h-full px-4 py-6">
        <div className="space-y-1">
          <p className={cn(
            "text-xs font-medium text-muted-foreground mb-2 transition-opacity",
            isCollapsed ? "opacity-0" : "opacity-100"
          )}>
            FEATURES
          </p>
          {features.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>

        <div className="mt-auto">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ArrowRightCircle size={18} /> : <ArrowLeftCircle size={18} />}
            {!isCollapsed && <span className="ml-2">Collapse</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
