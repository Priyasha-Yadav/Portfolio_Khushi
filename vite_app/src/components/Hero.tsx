import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10"
    >
      {/* Modern background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric accents */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-primary/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-12 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <div className="space-y-10 animate-fade-in">
          <div className="space-y-6">
            {/* Greeting with modern pill design */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-primary font-medium tracking-wide text-sm">
                Hello there, nice to meet you 👋 I am
              </p>
            </div>
            
            {/* Enhanced name typography */}
            <div className="space-y-2">
              <h1 className="text-6xl lg:text-8xl font-bold text-foreground leading-none tracking-tight">
                Khushi
              </h1>
              <h1 className="text-6xl lg:text-8xl font-bold text-primary leading-none tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Rajput
              </h1>
            </div>
            
            {/* Modern role card with glassmorphism */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-background/30 backdrop-blur-md border border-primary/30 p-6 rounded-2xl hover:bg-background/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="w-5 h-5 text-primary" />
                  <Palette className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xl lg:text-2xl font-semibold text-foreground">
                  Full-Stack Developer | UI/UX Enthusiast
                </p>
                <div className="mt-3 flex gap-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <div className="w-8 h-1 bg-secondary/50 rounded-full"></div>
                  <div className="w-4 h-1 bg-primary/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced description */}
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Crafting seamless digital experiences from front to back. 
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl leading-relaxed">
              I specialize in building dynamic and scalable applications with a passion 
              for clean UI and intuitive user experiences.
            </p>
          </div>

          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="group relative border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Let's Connect
              </span>
            </Button>
          </div>

          {/* Enhanced social links */}
          <div className="flex items-center gap-8 pt-6">
            <p className="text-sm text-muted-foreground font-medium">Follow me:</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/KhushiRajput18007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
                <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://linkedin.com/in/khushi-rajput" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
                <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="mailto:khushi.rajput.cg@gmail.com"
                className="group relative p-3 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
                <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Profile Section */}
        <div className="relative animate-slide-up">
          <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative group">
            {/* Outer ring with gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full p-1">
              <div className="w-full h-full bg-background rounded-full"></div>
            </div>
            
            {/* Main content area */}
            <div className="relative w-full h-full bg-gradient-to-br from-background/90 to-secondary/10 rounded-full flex items-center justify-center shadow-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
              <div className="text-center space-y-4 p-8">
                {/* Profile icon */}
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                
                {/* Profile text */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Professional Photo
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your professional headshot<br />
                    will be displayed here
                  </p>
                </div>
                
                {/* Upload hint */}
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary font-medium">Ready for upload</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating tech icons */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl rotate-12 animate-float flex items-center justify-center shadow-xl border border-white/20">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg -rotate-12 animate-float flex items-center justify-center shadow-lg border border-white/20" style={{ animationDelay: '2s' }}>
              <Palette className="w-4 h-4 text-white" />
            </div>
            <div className="absolute top-1/3 -right-12 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full animate-float border-2 border-background shadow-lg" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-primary hover:text-primary/80 transition-colors"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;