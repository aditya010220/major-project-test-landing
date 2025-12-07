import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const FeaturesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const features = [
    {
      id: 'psychometric',
      icon: 'Brain',
      iconColor: 'text-primary',
      iconBg: 'bg-primary/10',
      title: 'Psychometric Insights',
      description: 'Advanced personality assessment to match your traits with ideal career paths and work environments',
      preview: ['Personality type analysis', 'Career fit scoring', 'Work style preferences', 'Team role identification'],
      badge: 'AI-Powered'
    },
    {
      id: 'coding',
      icon: 'Code2',
      iconColor: 'text-accent',
      iconBg: 'bg-accent/10',
      title: 'Coding Profile Analysis',
      description: 'Comprehensive evaluation of your programming skills across multiple platforms and languages',
      preview: ['GitHub contribution analysis', 'LeetCode problem-solving patterns', 'HackerRank skill assessment', 'Language proficiency mapping'],
      badge: 'Multi-Platform'
    },
    {
      id: 'internship',
      icon: 'Briefcase',
      iconColor: 'text-success',
      iconBg: 'bg-success/10',
      title: 'Internship Matching',
      description: 'Smart algorithm connects your profile with relevant internship opportunities at top companies',
      preview: ['Company-skill alignment', 'Application timeline planning', 'Resume optimization tips', 'Interview preparation guides'],
      badge: 'Smart Match'
    },
    {
      id: 'projects',
      icon: 'FolderGit2',
      iconColor: 'text-warning',
      iconBg: 'bg-warning/10',
      title: 'Project Recommendations',
      description: 'Curated project ideas tailored to your skill level and career goals with implementation guides',
      preview: ['Difficulty-based suggestions', 'Technology stack guidance', 'Portfolio building tips', 'Industry relevance scoring'],
      badge: 'Personalized'
    },
    {
      id: 'skillgap',
      icon: 'Target',
      iconColor: 'text-destructive',
      iconBg: 'bg-destructive/10',
      title: 'Skill Gap Identification',
      description: 'Precise analysis of missing skills required for your target roles with learning resources',
      preview: ['Current vs required skills', 'Priority-based learning paths', 'Resource recommendations', 'Timeline estimation'],
      badge: 'Data-Driven'
    },
    {
      id: 'visualization',
      icon: 'LineChart',
      iconColor: 'text-secondary',
      iconBg: 'bg-secondary/10',
      title: 'Career Path Visualization',
      description: 'Interactive roadmap showing your journey from current state to dream job with milestones',
      preview: ['Visual progress tracking', 'Milestone celebrations', 'Alternative path exploration', 'Success probability metrics'],
      badge: 'Interactive'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Powerful Features for Career Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your B.Tech journey into a successful career path
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features?.map((feature, index) => (
            <div
              key={feature?.id}
              className={`bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(feature?.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${feature?.iconBg}`}>
                    <Icon name={feature?.icon} size={24} className={feature?.iconColor} />
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {feature?.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature?.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature?.description}
                </p>

                {hoveredCard === feature?.id && (
                  <div className="mt-4 pt-4 border-t border-border space-y-2 animate-fade-in">
                    {feature?.preview?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;