import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Auth'],
      icon: '⚙️'
    },
    {
      title: 'Languages',
      skills: ['JavaScript', 'C', 'C++', 'HTML', 'CSS'],
      icon: '💻'
    },
    {
      title: 'Tools & Design',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'ShadCN'],
      icon: '🛠️'
    }
  ];

  const highlights = [
    { label: 'MERN Stack', level: 85 },
    { label: 'React.js', level: 90 },
    { label: 'UI/UX Design', level: 80 },
    { label: 'JavaScript', level: 88 },
    { label: 'MongoDB', level: 75 },
    { label: 'Node.js', level: 82 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="w-full justify-center py-1 bg-secondary/50 hover:bg-accent/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skill Progress Bars */}
          <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((skill, index) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.label}</span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-4">Currently learning:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-primary text-primary-foreground px-4 py-2">
                Advanced React Patterns
              </Badge>
              <Badge className="bg-accent text-accent-foreground px-4 py-2">
                TypeScript
              </Badge>
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
                Next.js
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;