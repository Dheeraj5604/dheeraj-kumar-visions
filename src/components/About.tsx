
import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Problem Solving",
      description: "Strong analytical skills with expertise in Python and data structures"
    },
    {
      icon: Palette,
      title: "Creative Mind",
      description: "Innovative approach to developing user-friendly applications"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and frameworks"
    },
    {
      icon: Heart,
      title: "Team Player",
      description: "Excellent collaboration and communication skills in team environments"
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
                Hello! I'm Dheeraj Kumar, a passionate Information Technology student at VIT Vellore 
                with a strong foundation in Python programming and web development. I love transforming 
                complex problems into elegant, efficient solutions through code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in technology began with curiosity about how software works, and it has 
                evolved into a deep passion for machine learning, cloud computing, and full-stack 
                development. I believe in continuous learning and applying theoretical knowledge 
                to real-world projects.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As a fresher entering the corporate world, I bring fresh perspectives, enthusiasm 
                for innovation, and a strong desire to contribute meaningfully to technology teams. 
                I'm excited to apply my skills in Python, AWS, and web technologies to create 
                impactful solutions.
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
