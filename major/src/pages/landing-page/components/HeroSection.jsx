import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onGenerateRoadmap, onViewSample }) => {
  const [activeUsers, setActiveUsers] = useState(1247);
  const [recentGenerations, setRecentGenerations] = useState(89);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Get Your Personalized B.Tech Career Roadmap in 60 Seconds';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText?.length) {
        setTypedText(fullText?.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const userInterval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    const genInterval = setInterval(() => {
      setRecentGenerations(prev => prev + 1);
    }, 8000);

    return () => {
      clearInterval(userInterval);
      clearInterval(genInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-20 pb-16 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse animation-delay-200" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 animate-slide-down">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by {activeUsers?.toLocaleString('en-IN')}+ B.Tech Students
            </span>
          </div>

          <div className="space-y-4 animate-slide-up animation-delay-200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {typedText}
              <span className="inline-block w-1 h-12 bg-primary ml-1 animate-pulse" />
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI-powered career analysis combining your academic performance, coding profiles, and psychometric insights to create personalized roadmaps for skills, projects, internships, and placements
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
            <Button
              variant="default"
              size="lg"
              onClick={onGenerateRoadmap}
              iconName="Sparkles"
              iconPosition="left"
              className="shadow-cta hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Generate My Roadmap
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onViewSample}
              iconName="Eye"
              iconPosition="left"
              className="hover:bg-muted/50 transition-all duration-300"
            >
              See Sample Roadmap
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground animate-fade-in animation-delay-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>{recentGenerations} roadmaps generated today</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span>100% Data Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={16} className="text-warning" />
              <span>60-second analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;