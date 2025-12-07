import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    { label: 'How It Works', anchor: '#how-it-works', offset: 80 },
    { label: 'Features', anchor: '#features', offset: 80 },
    { label: 'Success Stories', anchor: '#success-stories', offset: 80 },
    { label: 'Get Started', anchor: '#get-started', offset: 80, isPrimary: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement?.scrollHeight;
      
      setIsScrolled(scrollPosition > 20);
      
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      const sections = navigationItems?.filter(item => !item?.isPrimary)?.map(item => ({
          id: item?.anchor?.substring(1),
          offset: item?.offset
        }));

      let currentSection = '';
      sections?.forEach(section => {
        const element = document.getElementById(section?.id);
        if (element) {
          const rect = element?.getBoundingClientRect();
          if (rect?.top <= 150 && rect?.bottom >= 150) {
            currentSection = section?.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, anchor, offset) => {
    e?.preventDefault();
    const targetId = anchor?.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const elementPosition = element?.getBoundingClientRect()?.top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-nav shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <div className="flex items-center">
              <a 
                href="/" 
                className="flex items-center space-x-2 group"
                aria-label="CareerCraft AI Home"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20">
                  <Icon 
                    name="Sparkles" 
                    size={24} 
                    className="text-primary transition-transform duration-200 group-hover:scale-110" 
                  />
                </div>
                <span className="text-xl font-bold text-foreground hidden sm:block">
                  CareerCraft AI
                </span>
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => {
                if (item?.isPrimary) {
                  return (
                    <Button
                      key={item?.label}
                      variant="default"
                      size="default"
                      onClick={(e) => handleNavClick(e, item?.anchor, item?.offset)}
                      className="ml-4"
                    >
                      {item?.label}
                    </Button>
                  );
                }

                const isActive = activeSection === item?.anchor?.substring(1);
                
                return (
                  <a
                    key={item?.label}
                    href={item?.anchor}
                    onClick={(e) => handleNavClick(e, item?.anchor, item?.offset)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                      isActive 
                        ? 'text-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item?.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted/50 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <Icon 
                name={isMobileMenuOpen ? 'X' : 'Menu'} 
                size={24} 
              />
            </button>
          </div>
        </div>

        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[150] lg:hidden"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />
          
          <nav 
            className="fixed top-16 left-0 right-0 bottom-0 bg-background z-[200] lg:hidden overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navigationItems?.map((item) => {
                  if (item?.isPrimary) {
                    return (
                      <Button
                        key={item?.label}
                        variant="default"
                        size="lg"
                        fullWidth
                        onClick={(e) => handleNavClick(e, item?.anchor, item?.offset)}
                        className="mt-4"
                      >
                        {item?.label}
                      </Button>
                    );
                  }

                  const isActive = activeSection === item?.anchor?.substring(1);
                  
                  return (
                    <a
                      key={item?.label}
                      href={item?.anchor}
                      onClick={(e) => handleNavClick(e, item?.anchor, item?.offset)}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                        isActive 
                          ? 'text-primary bg-primary/10' :'text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {item?.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;