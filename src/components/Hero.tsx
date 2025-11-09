import React from "react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional consulting services" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-subtle opacity-80" />
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
        <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Strategic Business Solutions
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transform Your Business
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            With Expert Guidance
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          RobStar Consulting delivers innovative strategies and proven methodologies 
          to drive growth, optimize operations, and achieve sustainable success.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold tracking-wide px-8"
            asChild
          >
            <a href="#contact">Get Started</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold tracking-wide px-8"
            asChild
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
