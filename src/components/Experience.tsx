import React from 'react';
import { Calendar, MapPin, GraduationCap, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'B.Tech in Information Technology',
      company: 'Vellore Institute of Technology (VIT)',
      location: 'Vellore, Tamil Nadu',
      period: '2022 - Present (Expected May 2026)',
      description: 'Currently pursuing Bachelor of Technology in Information Technology with focus on modern programming languages, data structures, and software development.',
      achievements: [
        'Maintaining excellent academic performance',
        'Specialized in cpp programming and web dev',
        'Working on machine learning and web projects',
        'Active participation in coding competitions'
      ],
      type: 'education'
    },
    {
      title: 'Senior Secondary Education',
      company: 'Canal Valley Public School',
      location: 'Rewari, Haryana',
      period: '2020 - 2022 (March 2022)',
      description: 'Completed senior secondary education with strong foundation in Mathematics and Science, preparing for engineering entrance examinations.',
      achievements: [
        'Achieved excellent grades in Mathematics and Science',
        'Developed analytical and problem-solving skills',
        'First exposure to computer programming concepts',
        'Qualified for engineering entrance examinations'
      ],
      type: 'education'
    },
    {
      title: 'Intern',
      company: 'LabMentix.EduTech.Pvt.Ltd',
      location: 'Work from Home',
      period: ' 15 June 2025 - Present',
      description: 'Working as an intern gaining hands-on experience in technology projects and collaborative development in a dynamic environment.',
      achievements: [
        'Developed skills in collaborative Web development',
        'Enhanced leadership skills through team collab',
        'Improve communication and project management',
        'Build Projects using React.js, Node.js, and SQL'
      ],
      type: 'work'
    },
    {
      title: 'Intern',
      company: 'Dhenu Dharma Foundation',
      location: 'Remote',
      period: '1st may 2025 - 30 may 2025',
      description: 'Completed comprehensive training on machine learning and developed practical projects in water potability detection and data analysis.',
      achievements: [
        'Completed training on machine learning and various models',
        'Developed water potability detection project using Python',
        'Gained experience in data preprocessing and model optimization',
        'Applied machine learning concepts to real-world problems'
      ],
      type: 'work'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education & Experience
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
                      {exp.type === 'education' ? <GraduationCap size={14} /> : <Building size={14} />}
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
