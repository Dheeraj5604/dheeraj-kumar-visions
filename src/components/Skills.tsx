
import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C/C++', level: 85 },
        { name: 'HTML', level: 92 },
        { name: 'CSS', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Pandas', level: 88 },
        { name: 'NumPy', level: 85 },
        { name: 'Matplotlib', level: 82 },
        { name: 'Seaborn', level: 80 }
      ]
    },
    tools: {
      title: 'Platforms & Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'XGBoost', level: 75 },
        { name: 'AWS Lambda', level: 70 },
        { name: 'DynamoDB', level: 72 }
      ]
    },
    soft: {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Leadership', level: 85 },
        { name: 'Teamwork', level: 92 },
        { name: 'Creative Mind', level: 88 },
        { name: 'Attention to Detail', level: 90 },
        { name: 'Critical Thinking', level: 87 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="bg-muted rounded-full p-1 flex flex-nowrap min-w-max">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 py-3 rounded-full transition-all duration-300 text-sm whitespace-nowrap ${
                    activeCategory === key
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
