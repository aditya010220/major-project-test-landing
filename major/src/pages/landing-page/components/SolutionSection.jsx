import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SolutionSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
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

  const solutions = [
    {
      id: 'personalized',
      icon: 'User',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      title: 'Personalized Analysis',
      shortDesc: 'AI-powered evaluation of your unique academic profile, coding skills, and career aspirations',
      details: [
        'Academic performance analysis across all semesters',
        'Coding profile evaluation from GitHub, LeetCode, and HackerRank',
        'Psychometric assessment for career alignment',
        'Industry-specific skill gap identification'
      ],
      checkmarks: ['Data-driven insights', 'Real-time updates', 'Privacy protected']
    },
    {
      id: 'actionable',
      icon: 'ListChecks',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
      title: 'Actionable Steps',
      shortDesc: 'Clear, structured roadmap with specific tasks, timelines, and milestones for career success',
      details: [
        'Week-by-week learning schedules tailored to your pace',
        'Project recommendations matching your skill level',
        'Internship application strategies with company targets',
        'Interview preparation guides for specific roles'
      ],
      checkmarks: ['Step-by-step guidance', 'Progress tracking', 'Deadline management']
    },
    {
      id: 'industry',
      icon: 'Building2',
      iconBg: 'bg-success/10',
      iconColor: 'text-success',
      title: 'Industry Alignment',
      shortDesc: 'Connect your skills with real market demands and placement opportunities at top companies',
      details: [
        'Current job market trends and demand analysis',
        'Company-specific skill requirements mapping',
        'Salary expectations based on your profile',
        'Networking opportunities with industry professionals'
      ],
      checkmarks: ['Market insights', 'Company matching', 'Placement support']
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full border border-success/20 mb-4">
            <Icon name="CheckCircle2" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">The Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            AI-Powered Career Guidance Built for B.Tech Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your career uncertainty into a clear, actionable roadmap with personalized AI analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions?.map((solution, index) => (
            <div 
              key={solution?.id}
              className={`bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              } ${expandedCard === solution?.id ? 'md:col-span-3' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setExpandedCard(expandedCard === solution?.id ? null : solution?.id)}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${solution?.iconBg}`}>
                    <Icon name={solution?.icon} size={24} className={solution?.iconColor} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {solution?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution?.shortDesc}
                    </p>
                  </div>
                  <Icon 
                    name={expandedCard === solution?.id ? 'ChevronUp' : 'ChevronDown'} 
                    size={20} 
                    className="text-muted-foreground flex-shrink-0"
                  />
                </div>

                {expandedCard === solution?.id && (
                  <div className="mt-6 pt-6 border-t border-border space-y-4 animate-fade-in">
                    <div className="space-y-3">
                      {solution?.details?.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon name="Check" size={18} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {solution?.checkmarks?.map((mark, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {mark}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;