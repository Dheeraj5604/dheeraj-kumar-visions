
import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful interfaces that users love to interact with"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every pixel and byte for lightning-fast experiences"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Putting user needs at the center of every decision"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm Dheeraj Kumar, a passionate developer who loves turning complex problems 
                into simple, beautiful, and intuitive solutions. With over 5 years of experience in 
                web development, I've had the privilege of working with amazing teams and clients 
                across various industries.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with curiosity about how websites work, and it has evolved into a 
                deep passion for creating digital experiences that not only look great but also 
                perform exceptionally well. I believe that great design and clean code go hand in hand.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                eager to take on new challenges and collaborate on exciting projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
