import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const RoadmapForm = ({ onSubmit, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    branch: '',
    currentYear: '',
    cgpa: '',
    githubProfile: '',
    leetcodeProfile: '',
    careerGoal: '',
    targetCompanies: '',
    preferredDomain: ''
  });

  const [errors, setErrors] = useState({});

  const branchOptions = [
    { value: 'cse', label: 'Computer Science Engineering' },
    { value: 'ece', label: 'Electronics & Communication' },
    { value: 'it', label: 'Information Technology' },
    { value: 'mechanical', label: 'Mechanical Engineering' },
    { value: 'civil', label: 'Civil Engineering' },
    { value: 'electrical', label: 'Electrical Engineering' }
  ];

  const yearOptions = [
    { value: '1', label: 'First Year' },
    { value: '2', label: 'Second Year' },
    { value: '3', label: 'Third Year' },
    { value: '4', label: 'Fourth Year' }
  ];

  const domainOptions = [
    { value: 'software', label: 'Software Development' },
    { value: 'data', label: 'Data Science & Analytics' },
    { value: 'ml', label: 'Machine Learning & AI' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile App Development' },
    { value: 'devops', label: 'DevOps & Cloud' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    if (field === 'email' && value?.includes('@')) {
      const domain = value?.split('@')?.[1];
      if (domain && domain?.includes('iit')) {
        setFormData(prev => ({ ...prev, university: 'IIT' }));
      } else if (domain && domain?.includes('nit')) {
        setFormData(prev => ({ ...prev, university: 'NIT' }));
      }
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.fullName?.trim()) newErrors.fullName = 'Full name is required';
      if (!formData?.email?.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
      if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
      else if (!/^\d{10}$/?.test(formData?.phone)) newErrors.phone = 'Phone must be 10 digits';
    }

    if (step === 2) {
      if (!formData?.university?.trim()) newErrors.university = 'University is required';
      if (!formData?.branch) newErrors.branch = 'Branch is required';
      if (!formData?.currentYear) newErrors.currentYear = 'Current year is required';
      if (!formData?.cgpa?.trim()) newErrors.cgpa = 'CGPA is required';
      else if (isNaN(formData?.cgpa) || formData?.cgpa < 0 || formData?.cgpa > 10) {
        newErrors.cgpa = 'CGPA must be between 0 and 10';
      }
    }

    if (step === 3) {
      if (!formData?.careerGoal?.trim()) newErrors.careerGoal = 'Career goal is required';
      if (!formData?.preferredDomain) newErrors.preferredDomain = 'Preferred domain is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateStep(3)) {
      onSubmit(formData);
    }
  };

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">
              Generate Your Career Roadmap
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close form"
            >
              <Icon name="X" size={24} className="text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Step {currentStep} of 3</span>
              <span className="text-primary font-medium">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {currentStep === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Basic Information
              </h3>

              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData?.fullName}
                onChange={(e) => handleInputChange('fullName', e?.target?.value)}
                error={errors?.fullName}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@university.edu"
                description="We'll auto-detect your university from email domain"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="10-digit mobile number"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                required
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Academic Details
              </h3>

              <Input
                label="University/College"
                type="text"
                placeholder="Enter your university name"
                value={formData?.university}
                onChange={(e) => handleInputChange('university', e?.target?.value)}
                error={errors?.university}
                required
              />

              <Select
                label="Branch/Department"
                options={branchOptions}
                value={formData?.branch}
                onChange={(value) => handleInputChange('branch', value)}
                error={errors?.branch}
                placeholder="Select your branch"
                required
              />

              <Select
                label="Current Year"
                options={yearOptions}
                value={formData?.currentYear}
                onChange={(value) => handleInputChange('currentYear', value)}
                error={errors?.currentYear}
                placeholder="Select current year"
                required
              />

              <Input
                label="Current CGPA"
                type="number"
                placeholder="Enter CGPA (0-10)"
                value={formData?.cgpa}
                onChange={(e) => handleInputChange('cgpa', e?.target?.value)}
                error={errors?.cgpa}
                required
              />

              <Input
                label="GitHub Profile (Optional)"
                type="url"
                placeholder="https://github.com/username"
                value={formData?.githubProfile}
                onChange={(e) => handleInputChange('githubProfile', e?.target?.value)}
              />

              <Input
                label="LeetCode Profile (Optional)"
                type="url"
                placeholder="https://leetcode.com/username"
                value={formData?.leetcodeProfile}
                onChange={(e) => handleInputChange('leetcodeProfile', e?.target?.value)}
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Career Preferences
              </h3>

              <Input
                label="Career Goal"
                type="text"
                placeholder="e.g., Software Engineer at FAANG"
                value={formData?.careerGoal}
                onChange={(e) => handleInputChange('careerGoal', e?.target?.value)}
                error={errors?.careerGoal}
                required
              />

              <Select
                label="Preferred Domain"
                options={domainOptions}
                value={formData?.preferredDomain}
                onChange={(value) => handleInputChange('preferredDomain', value)}
                error={errors?.preferredDomain}
                placeholder="Select your preferred domain"
                required
              />

              <Input
                label="Target Companies (Optional)"
                type="text"
                placeholder="e.g., Google, Microsoft, Amazon"
                description="Comma-separated list of companies"
                value={formData?.targetCompanies}
                onChange={(e) => handleInputChange('targetCompanies', e?.target?.value)}
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-border">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Back
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                variant="default"
                onClick={handleNext}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="default"
                iconName="Sparkles"
                iconPosition="left"
              >
                Generate Roadmap
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoadmapForm;