import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsChecklist = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const benefits = [0, 1, 2, 3, 4, 5, 6, 7];
    benefits?.forEach((index) => {
      setTimeout(() => {
        setCheckedItems(prev => [...prev, index]);
      }, index * 300);
    });
  }, [isVisible]);

  const benefits = [
    {
      title: 'Structured Learning Paths',
      description: 'Clear, step-by-step guidance eliminating confusion about what to learn next',
      icon: 'Route',
      metric: '100% clarity'
    },
    {
      title: 'Industry-Relevant Projects',
      description: 'Build portfolio projects that directly align with job requirements at target companies',
      icon: 'Rocket',
      metric: '3x interview calls'
    },
    {
      title: 'Targeted Skill Development',
      description: 'Focus on high-impact skills that matter most for your desired career path',
      icon: 'Target',
      metric: '60% faster learning'
    },
    {
      title: 'Placement Preparation',
      description: 'Comprehensive interview prep, resume optimization, and application strategies',
      icon: 'Award',
      metric: '94% success rate'
    },
    {
      title: 'Time-Saving Automation',
      description: 'AI handles research and planning so you can focus on actual skill building',
      icon: 'Clock',
      metric: '20+ hours saved'
    },
    {
      title: 'Confidence Building',
      description: 'Data-driven insights replace uncertainty with actionable confidence',
      icon: 'TrendingUp',
      metric: '85% confidence boost'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stand out from peers with personalized strategies and proven methodologies',
      icon: 'Zap',
      metric: '2x placement offers'
    },
    {
      title: 'Continuous Adaptation',
      description: 'Roadmap evolves with your progress and changing market demands',
      icon: 'RefreshCw',
      metric: 'Always current'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Transform Your Career Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience measurable improvements in every aspect of your career preparation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-6 border-2 transition-all duration-500 ${
                checkedItems?.includes(index)
                  ? 'border-success shadow-lg'
                  : 'border-border'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {checkedItems?.includes(index) ? (
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center animate-scale-in">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {benefit?.title}
                    </h3>
                    <div className={`p-2 rounded-lg ${
                      checkedItems?.includes(index) ? 'bg-success/10' : 'bg-muted'
                    }`}>
                      <Icon 
                        name={benefit?.icon} 
                        size={20} 
                        className={checkedItems?.includes(index) ? 'text-success' : 'text-muted-foreground'}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {benefit?.description}
                  </p>

                  {checkedItems?.includes(index) && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 rounded-full animate-fade-in">
                      <Icon name="TrendingUp" size={14} className="text-success" />
                      <span className="text-xs font-medium text-success">
                        {benefit?.metric}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 rounded-lg border border-success/20">
            <Icon name="CheckCircle2" size={20} className="text-success" />
            <span className="text-sm font-medium text-success">
              All benefits included in every personalized roadmap
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsChecklist;