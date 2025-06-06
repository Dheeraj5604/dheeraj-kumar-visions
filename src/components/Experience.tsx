
import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Computer Science Student',
      company: 'Vellore Institute of Technology (VIT)',
      location: 'Vellore, Tamil Nadu',
      period: '2022 - Present',
      description: 'Currently pursuing Bachelor of Technology in Computer Science and Engineering. Actively learning modern web technologies and building projects to enhance practical skills.',
      achievements: [
        'Maintaining excellent academic performance',
        'Building full-stack web applications using React and Node.js',
        'Participating in coding competitions and hackathons',
        'Contributing to open-source projects on GitHub'
      ]
    },
    {
      title: 'Aspiring Full Stack Developer',
      company: 'Personal Projects & Learning',
      location: 'Rewari, Haryana',
      period: '2023 - Present',
      description: 'Self-motivated learning journey focused on modern web development technologies. Building portfolio projects and gaining hands-on experience in full-stack development.',
      achievements: [
        'Completed multiple web development projects',
        'Learned React, TypeScript, and modern CSS frameworks',
        'Practiced responsive design and user experience principles',
        'Exploring backend technologies like Node.js and databases'
      ]
    },
    {
      title: 'High School Graduate',
      company: 'Secondary Education',
      location: 'Rewari, Haryana',
      period: '2020 - 2022',
      description: 'Completed higher secondary education with a focus on science and mathematics. Developed strong analytical and problem-solving skills that form the foundation for programming.',
      achievements: [
        'Achieved excellent grades in Mathematics and Science',
        'Developed logical thinking and problem-solving abilities',
        'First exposure to computer programming concepts',
        'Prepared for engineering entrance examinations'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Journey
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
                      <GraduationCap size={14} />
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
