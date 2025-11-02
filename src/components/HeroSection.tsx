import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animate opacity-50"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-glow-pulse">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Futuristic Hackathon Platform</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow-cyan text-primary">
          Hackathon Management
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          System
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Manage teams, mentors, and scores — all in one futuristic dashboard
        </p>
        
        <Link to="/dashboard">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full neon-border-cyan transition-all duration-300 hover:scale-105">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
