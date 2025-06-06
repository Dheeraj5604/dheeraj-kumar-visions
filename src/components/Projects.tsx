
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Water Potability Detector',
      description: 'XGBoost and Python Streamlit model to predict water potability using sensor data. Improved classification accuracy and implemented data visualization techniques for better insights.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
      technologies: ['XGBoost', 'Python', 'Streamlit', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      category: 'ml',
      github: 'https://github.com/Dheeraj5604',
      live: '#'
    },
    {
      id: 2,
      title: 'Doctor Appointment Chatbot',
      description: 'AWS Lex chatbot with Lambda and DynamoDB integration. Features automated booking, rescheduling, and appointment notifications with real-time SMS updates.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      technologies: ['AWS Lex', 'AWS Lambda', 'Amazon DynamoDB', 'AWS S3', 'Amazon Cognito'],
      category: 'cloud',
      github: 'https://github.com/Dheeraj5604',
      live: '#'
    },
    {
      id: 3,
      title: 'Smart Cafe Recommendation System',
      description: 'Real-time cafe recommendation system using React.js, Express.js, and SQL. Features authentication, interactive maps, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Express.js', 'SQL', 'Node.js'],
      category: 'web',
      github: 'https://github.com/Dheeraj5604',
      live: '#'
    }
  ];

  const categories = ['all', 'ml', 'cloud', 'web'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categoryLabels = {
    all: 'All Projects',
    ml: 'Machine Learning',
    cloud: 'Cloud Computing',
    web: 'Web Development'
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-muted-foreground hover:text-foreground hover:shadow-md'
                }`}
              >
                {categoryLabels[category as keyof typeof categoryLabels]}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github}
                      className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.live}
                      className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
