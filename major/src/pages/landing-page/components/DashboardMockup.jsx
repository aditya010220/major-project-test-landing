import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const DashboardMockup = () => {
  const [skillProgress, setSkillProgress] = useState({
    dataStructures: 0,
    webDevelopment: 0,
    machineLearning: 0,
    systemDesign: 0
  });

  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillProgress({
        dataStructures: 85,
        webDevelopment: 72,
        machineLearning: 45,
        systemDesign: 60
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { 
      key: 'dataStructures', 
      label: 'Data Structures & Algorithms', 
      icon: 'Code2',
      description: 'Strong foundation with room for advanced topics',
      recommendation: 'Focus on dynamic programming and graph algorithms'
    },
    { 
      key: 'webDevelopment', 
      label: 'Web Development', 
      icon: 'Globe',
      description: 'Good progress in frontend technologies',
      recommendation: 'Explore backend frameworks and databases'
    },
    { 
      key: 'machineLearning', 
      label: 'Machine Learning', 
      icon: 'Brain',
      description: 'Beginner level with growth potential',
      recommendation: 'Start with supervised learning projects'
    },
    { 
      key: 'systemDesign', 
      label: 'System Design', 
      icon: 'Network',
      description: 'Intermediate understanding of scalability',
      recommendation: 'Study distributed systems patterns'
    }
  ];

  const projects = [
    { title: 'E-commerce Platform', difficulty: 'Intermediate', match: 92 },
    { title: 'ML Price Predictor', difficulty: 'Advanced', match: 78 },
    { title: 'Real-time Chat App', difficulty: 'Intermediate', match: 88 }
  ];

  const internships = [
    { company: 'TCS', role: 'Software Developer', match: 94 },
    { company: 'Infosys', role: 'Data Analyst', match: 87 },
    { company: 'Wipro', role: 'Full Stack Developer', match: 91 }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Your AI-Powered Career Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time analysis of your skills, personalized project recommendations, and matched internship opportunities
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card border border-border p-6 sm:p-8 space-y-8 animate-slide-up">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                Skills Assessment
              </h3>
              <span className="text-sm text-muted-foreground">Live Analysis</span>
            </div>

            <div className="space-y-4">
              {skills?.map((skill, index) => (
                <div 
                  key={skill?.key}
                  className="relative"
                  onMouseEnter={() => setActiveTooltip(skill?.key)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon name={skill?.icon} size={18} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">{skill?.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {skillProgress?.[skill?.key]}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skillProgress?.[skill?.key]}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>

                  {activeTooltip === skill?.key && (
                    <div className="absolute left-0 top-full mt-2 w-full sm:w-80 bg-popover border border-border rounded-lg shadow-lg p-4 z-10 animate-fade-in">
                      <p className="text-sm text-popover-foreground mb-2">{skill?.description}</p>
                      <p className="text-xs text-muted-foreground flex items-start gap-2">
                        <Icon name="Lightbulb" size={14} className="text-warning mt-0.5 flex-shrink-0" />
                        <span>{skill?.recommendation}</span>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Icon name="Briefcase" size={20} className="text-accent" />
                Recommended Projects
              </h3>
              <div className="space-y-3">
                {projects?.map((project, index) => (
                  <div 
                    key={index}
                    className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground">{project?.title}</h4>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {project?.match}% match
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{project?.difficulty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Icon name="Target" size={20} className="text-success" />
                Matched Internships
              </h3>
              <div className="space-y-3">
                {internships?.map((internship, index) => (
                  <div 
                    key={index}
                    className="bg-background rounded-lg p-4 border border-border hover:border-success/50 transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-foreground">{internship?.company}</h4>
                        <p className="text-sm text-muted-foreground">{internship?.role}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-success/10 text-success rounded-full">
                        {internship?.match}% fit
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMockup;