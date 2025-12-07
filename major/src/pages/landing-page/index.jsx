import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import DashboardMockup from './components/DashboardMockup';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import FeaturesGrid from './components/FeaturesGrid';
import BenefitsChecklist from './components/BenefitsChecklist';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import RoadmapForm from './components/RoadmapForm';
import SampleRoadmapModal from './components/SampleRoadmapModal';

const LandingPage = () => {
  const [showRoadmapForm, setShowRoadmapForm] = useState(false);
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e?.clientY <= 0 && !showRoadmapForm && !showSampleModal) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showRoadmapForm, showSampleModal]);

  const handleGenerateRoadmap = () => {
    setShowRoadmapForm(true);
    setShowSampleModal(false);
    setShowExitIntent(false);
  };

  const handleViewSample = () => {
    setShowSampleModal(true);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setShowRoadmapForm(false);
    alert('Roadmap generation started! Check your email for the complete analysis.');
  };

  const handleCloseExitIntent = () => {
    setShowExitIntent(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection 
          onGenerateRoadmap={handleGenerateRoadmap}
          onViewSample={handleViewSample}
        />
        
        <DashboardMockup />
        
        <ProblemSection />
        
        <SolutionSection />
        
        <HowItWorksSection />
        
        <TestimonialsSection />
        
        <FeaturesGrid />
        
        <BenefitsChecklist />
        
        <FinalCTA onGenerateRoadmap={handleGenerateRoadmap} />
      </main>

      <Footer />

      {showRoadmapForm && (
        <RoadmapForm
          onSubmit={handleFormSubmit}
          onClose={() => setShowRoadmapForm(false)}
        />
      )}

      {showSampleModal && (
        <SampleRoadmapModal
          onClose={() => setShowSampleModal(false)}
          onGenerateOwn={handleGenerateRoadmap}
        />
      )}

      {showExitIntent && !showRoadmapForm && !showSampleModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-2xl border border-border max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Wait! Don't Miss Out
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 1,200+ B.Tech students who transformed their careers with AI-powered guidance. Get early access with exclusive benefits!
            </p>
            <div className="space-y-3">
              <button
                onClick={handleGenerateRoadmap}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get My Free Roadmap
              </button>
              <button
                onClick={handleCloseExitIntent}
                className="w-full px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;