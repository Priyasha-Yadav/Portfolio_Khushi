import { Palette, Film, Plane, Music, PenTool, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const hobbies = [
    { icon: Code, title: 'UI/UX Designing', description: 'Creating intuitive interfaces' },
    { icon: Film, title: 'Sci-fi Movies', description: 'Exploring futuristic narratives' },
    { icon: Plane, title: 'Traveling', description: 'Discovering new places' },
    { icon: Music, title: 'Music', description: 'Finding inspiration in melodies' },
    { icon: PenTool, title: 'Sketching', description: 'Bringing ideas to life' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Full-Stack Developer from Planpur
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently pursuing Computer Science while dedicating myself to crafting 
                  dynamic and scalable web applications. My journey in technology is driven by 
                  a passion for creating seamless user experiences and robust backend solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in the MERN stack and have a keen eye for UI/UX design, 
                  combining technical expertise with creative problem-solving. Currently, 
                  I'm building <span className="text-primary font-medium">Zenova TV</span>, 
                  a movie streaming platform that showcases my full-stack development skills.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest sci-fi movies, 
                  sketching new design ideas, or discovering new places that inspire my creativity.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Passion</div>
                </div>
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {hobbies.map((hobby, index) => (
                  <Card 
                    key={hobby.title} 
                    className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card border-primary/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <hobby.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{hobby.title}</h4>
                        <p className="text-sm text-muted-foreground">{hobby.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;