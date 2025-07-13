import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center space-y-8">
            {/* Logo/Name */}
            <div>
              <h3 className="text-3xl font-bold mb-2">Khushi Rajput</h3>
              <p className="text-background/80">
                Full-Stack Developer | UI/UX Enthusiast
              </p>
            </div>

            {/* Quote */}
            <div className="max-w-2xl mx-auto">
              <blockquote className="text-lg italic text-background/90">
                "Code is like humor. When you have to explain it, it's bad."
              </blockquote>
              <cite className="text-background/70 text-sm">- Cory House</cite>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-background/20"></div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/70">
              <p className="flex items-center">
                © {currentYear} Khushi Rajput. Made with 
                <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
                and lots of ☕
              </p>
              <p>
                Designed & Developed with passion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="sm"
        className="absolute bottom-8 right-8 bg-background text-foreground hover:bg-background/90 rounded-full w-12 h-12 p-0"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-background rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-background rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-background rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-8 h-8 border-2 border-background rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;