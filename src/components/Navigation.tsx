import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-primary shadow-glow flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                {/* Magnifying glass circle */}
                <circle 
                  cx="10" 
                  cy="10" 
                  r="6" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2"
                />
                {/* Magnifying glass handle */}
                <line 
                  x1="14.5" 
                  y1="14.5" 
                  x2="19" 
                  y2="19" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                {/* Q tail - small diagonal line inside the circle */}
                <line 
                  x1="12" 
                  y1="12" 
                  x2="14" 
                  y2="14" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold">qluz</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="pt-4">
              <Button className="w-full bg-gradient-primary">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
