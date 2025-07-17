import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Instagram, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'khushi.rajput.cg@gmail.com', href: 'mailto:khushi.rajput.cg@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9638647776', href: 'tel:+919638647776' },
    { icon: MapPin, label: 'Location', value: 'Planpur, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/KhushiRajput18007', username: '@KhushiRajput18007' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/khushi-rajput', username: '@khushi-rajput' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/Khushi1812007', username: '@Khushi1812007' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/sunshinee_018007', username: '@sunshinee_018007' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life. I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center p-4 bg-gradient-card rounded-lg hover:shadow-card transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me On
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gradient-card rounded-lg hover:shadow-card transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{social.label}</p>
                        <p className="text-muted-foreground text-xs">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-card shadow-soft animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-card rounded-2xl shadow-soft animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm excited to help bring your ideas to life. Let's discuss how we can work together 
              to create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground"
                onClick={() => window.open('mailto:khushi.rajput.cg@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('tel:+919638647776', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;