import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Success Stories', href: '#success-stories' },
      { label: 'Pricing', href: '#pricing' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' }
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'FAQs', href: '#faqs' }
    ]
  };

  const socialLinks = [
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Instagram', href: '#', label: 'Instagram' },
    { icon: 'Youtube', href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-primary" />
              </div>
              <span className="text-xl font-bold">CareerCraft AI</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              AI-powered career guidance platform helping B.Tech students achieve their dream placements through personalized roadmaps.
            </p>
            <div className="flex gap-3">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.href}
                  aria-label={social?.label}
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks?.product?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link?.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks?.company?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link?.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks?.support?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link?.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} CareerCraft AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;