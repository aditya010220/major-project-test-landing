import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SampleRoadmapModal = ({ onClose, onGenerateOwn }) => {
  const sampleData = {
    student: 'Rahul Kumar',
    branch: 'Computer Science Engineering',
    currentYear: 'Third Year',
    cgpa: '8.2',
    targetRole: 'Software Engineer'
  };

  const roadmapPhases = [
    {
      phase: 'Month 1-2: Foundation Strengthening',
      icon: 'BookOpen',
      color: 'primary',
      tasks: [
        { task: 'Complete Data Structures & Algorithms course', status: 'completed' },
        { task: 'Solve 50 LeetCode Easy problems', status: 'completed' },
        { task: 'Build personal portfolio website', status: 'in-progress' },
        { task: 'Learn Git and GitHub basics', status: 'pending' }
      ]
    },
    {
      phase: 'Month 3-4: Skill Development',
      icon: 'Code2',
      color: 'accent',
      tasks: [
        { task: 'Master React.js fundamentals', status: 'in-progress' },
        { task: 'Build 2 full-stack projects', status: 'pending' },
        { task: 'Solve 30 LeetCode Medium problems', status: 'pending' },
        { task: 'Contribute to open-source projects', status: 'pending' }
      ]
    },
    {
      phase: 'Month 5-6: Interview Preparation',
      icon: 'Target',
      color: 'success',
      tasks: [
        { task: 'System design fundamentals', status: 'pending' },
        { task: 'Mock interviews practice', status: 'pending' },
        { task: 'Resume optimization', status: 'pending' },
        { task: 'Apply to 20+ companies', status: 'pending' }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return { name: 'CheckCircle2', color: 'text-success' };
      case 'in-progress':
        return { name: 'Clock', color: 'text-warning' };
      default:
        return { name: 'Circle', color: 'text-muted-foreground' };
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-2xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Sample Career Roadmap
              </h2>
              <p className="text-sm text-muted-foreground">
                Example roadmap for {sampleData?.student} - {sampleData?.branch}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <Icon name="X" size={24} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-muted/50 rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Current Year</div>
              <div className="text-sm font-semibold text-foreground">{sampleData?.currentYear}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">CGPA</div>
              <div className="text-sm font-semibold text-foreground">{sampleData?.cgpa}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Target Role</div>
              <div className="text-sm font-semibold text-foreground">{sampleData?.targetRole}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Timeline</div>
              <div className="text-sm font-semibold text-foreground">6 Months</div>
            </div>
          </div>

          <div className="space-y-6">
            {roadmapPhases?.map((phase, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${phase?.color}/10`}>
                    <Icon name={phase?.icon} size={20} className={`text-${phase?.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{phase?.phase}</h3>
                </div>

                <div className="space-y-3">
                  {phase?.tasks?.map((item, idx) => {
                    const statusIcon = getStatusIcon(item?.status);
                    return (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                        <Icon name={statusIcon?.name} size={18} className={`${statusIcon?.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm text-foreground flex-1">{item?.task}</span>
                        {item?.status === 'completed' && (
                          <span className="text-xs px-2 py-1 bg-success/10 text-success rounded-full">
                            Done
                          </span>
                        )}
                        {item?.status === 'in-progress' && (
                          <span className="text-xs px-2 py-1 bg-warning/10 text-warning rounded-full">
                            Active
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Icon name="Lightbulb" size={24} className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">This is just a sample!</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your personalized roadmap will be tailored to your specific academic performance, coding skills, career goals, and current market demands. Generate your own roadmap to get started.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-card border-t border-border p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              variant="default"
              fullWidth
              onClick={onGenerateOwn}
              iconName="Sparkles"
              iconPosition="left"
            >
              Generate My Roadmap
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleRoadmapModal;