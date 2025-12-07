import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      icon: 'FileText',
      title: 'Input Your Data',
      description: 'Share your academic records, coding profiles, and career preferences through our smart form',
      details: [
        'Upload semester marksheets or enter CGPA',
        'Connect GitHub, LeetCode, HackerRank profiles',
        'Complete quick psychometric assessment',
        'Specify career interests and target companies'
      ],
      time: '5 minutes',
      color: 'primary'
    },
    {
      number: '02',
      icon: 'Brain',
      title: 'AI Analysis',
      description: 'Our advanced AI engine processes your data to identify strengths, gaps, and opportunities',
      details: [
        'Academic performance pattern recognition',
        'Coding skill level assessment',
        'Personality-career fit analysis',
        'Market demand comparison'
      ],
      time: '30 seconds',
      color: 'accent'
    },
    {
      number: '03',
      icon: 'Map',
      title: 'Roadmap Generation',
      description: 'Receive a personalized, step-by-step career roadmap tailored to your unique profile',
      details: [
        'Customized learning paths for skill development',
        'Project recommendations with difficulty levels',
        'Internship targets with application strategies',
        'Timeline with achievable milestones'
      ],
      time: '15 seconds',
      color: 'success'
    },
    {
      number: '04',
      icon: 'TrendingUp',
      title: 'Track Progress',
      description: 'Monitor your growth with real-time updates and adaptive recommendations as you advance',
      details: [
        'Skill progress visualization',
        'Completed vs pending tasks tracking',
        'Achievement badges and milestones',
        'Dynamic roadmap adjustments'
      ],
      time: 'Ongoing',
      color: 'warning'
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            How CareerCraft AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From data input to career success in four simple steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success -translate-x-1/2" />

          <div className="space-y-12">
            {steps?.map((step, index) => (
              <div 
                key={index}
                className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="flex-1 w-full">
                    <div className={`bg-card rounded-xl p-6 border-2 transition-all duration-300 ${
                      activeStep === index 
                        ? `border-${step?.color} shadow-lg` 
                        : 'border-border hover:border-primary/50'
                    }`}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-${step?.color}/10`}>
                          <Icon name={step?.icon} size={24} className={`text-${step?.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-3xl font-bold text-${step?.color}`}>
                              {step?.number}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground">
                              {step?.title}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            {step?.description}
                          </p>
                        </div>
                      </div>

                      {activeStep === index && (
                        <div className="mt-4 pt-4 border-t border-border space-y-2 animate-fade-in">
                          {step?.details?.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-4 flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-medium">
                          {step?.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary shadow-md z-10">
                    <div className={`w-6 h-6 rounded-full bg-${step?.color}`} />
                  </div>

                  <div className="flex-1 w-full md:block hidden" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;