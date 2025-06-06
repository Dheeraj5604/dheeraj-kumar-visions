
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led a team of 5 developers in building scalable web applications. Implemented microservices architecture resulting in 40% improvement in system performance.',
      achievements: [
        'Architected and delivered 3 major client projects ahead of schedule',
        'Reduced deployment time by 60% through CI/CD implementation',
        'Mentored junior developers and conducted technical interviews'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Improved site performance by 35% through optimization techniques',
        'Contributed to open-source projects with 1000+ GitHub stars'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Worked on various client projects ranging from e-commerce platforms to content management systems. Gained expertise in full-stack development.',
      achievements: [
        'Delivered 10+ successful client projects',
        'Learned modern web technologies and best practices',
        'Received "Rising Star" award for exceptional performance'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                } md:w-1/2 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-auto md:right-[-4px] w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 top-6" 
                     style={{ 
                       left: index % 2 === 0 ? 'auto' : '4px',
                       right: index % 2 === 0 ? '-4px' : 'auto'
                     }} 
                />

                <div className="ml-12 md:ml-0 bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
