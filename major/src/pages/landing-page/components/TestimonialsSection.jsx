import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    branch: 'Computer Science Engineering',
    university: 'IIT Delhi',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_101904fc7-1763294024485.png",
    imageAlt: 'Professional headshot of young Indian woman with long black hair wearing blue formal blazer smiling confidently',
    quote: 'CareerCraft AI helped me identify my skill gaps and provided a clear roadmap. I secured an internship at Google within 3 months of following the personalized plan.',
    achievement: 'Google SWE Intern',
    beforeCGPA: '7.8',
    afterPlacement: 'Google',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Verma',
    branch: 'Electronics & Communication',
    university: 'NIT Trichy',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17c989f9e-1763293351359.png",
    imageAlt: 'Professional headshot of young Indian man with short black hair wearing white shirt and navy blazer with warm smile',
    quote: 'The AI analysis revealed my strength in embedded systems. The project recommendations were spot-on and helped me build a portfolio that impressed recruiters at Texas Instruments.',
    achievement: 'Texas Instruments',
    beforeCGPA: '8.2',
    afterPlacement: 'Texas Instruments',
    rating: 5
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    branch: 'Information Technology',
    university: 'BITS Pilani',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17fe48960-1763298299490.png",
    imageAlt: 'Professional headshot of young Indian woman with shoulder-length black hair wearing formal grey blazer with confident expression',
    quote: 'I was confused between web development and data science. The psychometric assessment and market analysis helped me choose the right path. Now working as a Data Analyst at Amazon.',
    achievement: 'Amazon Data Analyst',
    beforeCGPA: '8.5',
    afterPlacement: 'Amazon',
    rating: 5
  }];


  const universities = [
  { name: 'IIT Delhi', logo: 'GraduationCap' },
  { name: 'NIT Trichy', logo: 'School' },
  { name: 'BITS Pilani', logo: 'BookOpen' },
  { name: 'VIT Vellore', logo: 'Library' }];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="success-stories" className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Success Stories from B.Tech Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real students, real results - see how AI-powered guidance transformed their careers
          </p>
        </div>

        <div className="relative mb-12">
          <div className="bg-card rounded-2xl shadow-card border border-border p-8 sm:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonials?.[activeIndex]?.image}
                    alt={testimonials?.[activeIndex]?.imageAlt}
                    className="w-full h-full object-cover" />

                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(testimonials?.[activeIndex]?.rating)]?.map((_, i) =>
                    <Icon key={i} name="Star" size={16} className="text-warning fill-warning" />
                    )}
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                    <Icon name="Briefcase" size={14} />
                    {testimonials?.[activeIndex]?.achievement}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <Icon name="Quote" size={40} className="text-primary/20 mb-4" />
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {testimonials?.[activeIndex]?.quote}
                </p>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-foreground">
                    {testimonials?.[activeIndex]?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials?.[activeIndex]?.branch}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonials?.[activeIndex]?.university}
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <div className="flex-1 bg-muted/50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">Before</div>
                    <div className="text-lg font-semibold text-foreground">
                      {testimonials?.[activeIndex]?.beforeCGPA} CGPA
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="ArrowRight" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 bg-success/10 rounded-lg p-3">
                    <div className="text-xs text-success mb-1">After</div>
                    <div className="text-lg font-semibold text-success">
                      {testimonials?.[activeIndex]?.afterPlacement}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30'}`
              }
              aria-label={`View testimonial ${index + 1}`} />

            )}
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Trusted by Students from Top Universities
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {universities?.map((uni, index) =>
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">

                <Icon name={uni?.logo} size={20} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{uni?.name}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { label: 'Success Rate', value: '94%', icon: 'TrendingUp' },
          { label: 'Avg. Salary Increase', value: '45%', icon: 'DollarSign' },
          { label: 'Time to Placement', value: '3.2 months', icon: 'Clock' },
          { label: 'Student Satisfaction', value: '4.8/5', icon: 'Star' }]?.
          map((stat, index) =>
          <div
            key={index}
            className="bg-card rounded-lg p-4 border border-border text-center hover:border-primary/50 transition-all duration-300">

              <Icon name={stat?.icon} size={24} className="text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-xs text-muted-foreground">{stat?.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;