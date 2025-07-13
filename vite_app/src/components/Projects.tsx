
import { useState } from 'react';
import { ExternalLink, Github, Star, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Frontend', 'Full-Stack', 'Fun'];

  const projects = [
    {
      id: 1,
      title: 'Zenova TV',
      description: 'A modern movie streaming platform with real-time TMDb API integration, featuring free streaming links and an intuitive user interface.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'Node.js', 'TMDb API', 'MongoDB', 'Tailwind CSS'],
      category: 'Full-Stack',
      featured: true,
      links: {
        demo: '#',
        github: '#'
      },
      highlights: [
        'Real-time movie data integration',
        'Free streaming links',
        'Responsive design',
        'User authentication'
      ]
    },
    {
      id: 2,
      title: 'Spotify Clone',
      description: 'A pixel-perfect recreation of Spotify with responsive design and interactive music player interface.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'CSS3', 'JavaScript'],
      category: 'Frontend',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'YouTube Clone',
      description: 'Complete YouTube interface clone with video grid, search functionality, and responsive layout.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Frontend',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 4,
      title: 'Static Chess & Ludo',
      description: 'Interactive board games built with vanilla JavaScript, featuring game logic and smooth animations.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Fun',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 5,
      title: 'Random Joke Generator',
      description: 'A fun React app that fetches and displays random jokes with a clean, engaging interface.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'API Integration', 'CSS3'],
      category: 'Fun',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 6,
      title: 'Food Website',
      description: 'Responsive food delivery website with modern design and smooth scrolling animations.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Frontend',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey, featuring projects that demonstrate 
            my skills in full-stack development and creative problem-solving.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <Card className="mb-16 overflow-hidden bg-gradient-card border-none shadow-card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured Project
                  </Badge>
                </div>
                
                <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
                  {featuredProject.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {featuredProject.highlights?.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-primary text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>

              <div className="p-8 lg:p-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="relative w-full h-64 lg:h-80 object-cover rounded-lg shadow-soft"
                  />
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className={`${
                activeFilter === filter 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border border-border"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="mr-2 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
