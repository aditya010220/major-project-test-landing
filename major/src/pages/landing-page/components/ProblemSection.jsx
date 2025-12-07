import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    anxious: 0,
    skillGap: 0,
    generic: 0
  });
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

    const targets = { anxious: 78, skillGap: 65, generic: 82 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets)?.map(key => {
      const increment = targets?.[key] / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= targets?.[key]) {
          setCounters(prev => ({ ...prev, [key]: targets?.[key] }));
          clearInterval(interval);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepDuration);
      
      return interval;
    });

    return () => intervals?.forEach(clearInterval);
  }, [isVisible]);

  const problems = [
    {
      key: 'anxious',
      icon: 'AlertCircle',
      iconColor: 'text-destructive',
      title: 'Placement Anxiety',
      description: 'B.Tech students feel uncertain about career direction and job market competitiveness',
      stat: `${counters?.anxious}%`,
      statLabel: 'students report career confusion'
    },
    {
      key: 'skillGap',
      icon: 'TrendingDown',
      iconColor: 'text-warning',
      title: 'Academic-Industry Gap',
      description: 'Struggle with transitioning from theoretical knowledge to practical industry requirements',
      stat: `${counters?.skillGap}%`,
      statLabel: 'face skill mismatch issues'
    },
    {
      key: 'generic',
      icon: 'XCircle',
      iconColor: 'text-error',
      title: 'Generic Advice Problem',
      description: 'Lack personalized guidance for skill development and structured roadmaps for success',
      stat: `${counters?.generic}%`,
      statLabel: 'receive one-size-fits-all guidance'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            The Career Guidance Crisis in B.Tech Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands of engineering students struggle with career uncertainty despite strong academic performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems?.map((problem, index) => (
            <div 
              key={problem?.key}
              className={`bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-muted ${problem?.iconColor}`}>
                  <Icon name={problem?.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {problem?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem?.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">
                    {problem?.stat}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {problem?.statLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-destructive/10 rounded-lg border border-destructive/20">
            <Icon name="AlertTriangle" size={20} className="text-destructive" />
            <span className="text-sm font-medium text-destructive">
              Traditional career counseling fails to provide data-driven, personalized guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;