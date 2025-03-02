
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary link-underline",
        className
      )}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled ? "glass shadow-sm backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-display text-xl font-semibold">StudyAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <Button size="sm" className="ml-4 rounded-full">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-50 glass-dark md:hidden pt-24 px-8 flex flex-col transition-all duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center mt-8">
          <NavLink href="/" className="text-lg" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/features" className="text-lg" onClick={() => setIsOpen(false)}>
            Features
          </NavLink>
          <NavLink href="/about" className="text-lg" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink href="/contact" className="text-lg" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <Button size="lg" className="mt-8 w-full rounded-full">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
