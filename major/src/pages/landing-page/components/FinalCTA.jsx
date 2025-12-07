import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FinalCTA = ({ onGenerateRoadmap }) => {
  const [recentSignups, setRecentSignups] = useState([]);

  const mockSignups = [
    { name: 'Priya S.', university: 'IIT Delhi', time: '2 minutes ago' },
    { name: 'Rahul M.', university: 'NIT Trichy', time: '5 minutes ago' },
    { name: 'Ananya K.', university: 'BITS Pilani', time: '8 minutes ago' },
    { name: 'Arjun P.', university: 'VIT Vellore', time: '12 minutes ago' }
  ];

  useEffect(() => {
    setRecentSignups([mockSignups?.[0]]);

    const interval = setInterval(() => {
      setRecentSignups(prev => {
        const nextIndex = prev?.length % mockSignups?.length;
        return [mockSignups?.[nextIndex]];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="get-started" className="py-16 px-4 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <Icon name="Users" size={16} className="text-white" />
            <span className="text-sm font-medium text-white">
              Join 1,247+ students already using AI career guidance
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your Career Journey?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get your personalized B.Tech career roadmap in just 60 seconds. No credit card required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="xl"
              onClick={onGenerateRoadmap}
              iconName="Sparkles"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90 shadow-cta hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Generate My Roadmap Now
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-white" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-white" />
              <span>60-second setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-white" />
              <span>Instant results</span>
            </div>
          </div>

          {recentSignups?.length > 0 && (
            <div className="mt-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-white">
                  <strong>{recentSignups?.[0]?.name}</strong> from {recentSignups?.[0]?.university} just generated their roadmap {recentSignups?.[0]?.time}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'Shield', label: '100% Secure' },
            { icon: 'Zap', label: 'Instant Access' },
            { icon: 'TrendingUp', label: '94% Success Rate' },
            { icon: 'Users', label: '1,200+ Students' }
          ]?.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
            >
              <Icon name={item?.icon} size={24} className="text-white mx-auto mb-2" />
              <span className="text-sm text-white font-medium">{item?.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;