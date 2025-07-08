
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Business Dashboard",
      description: "Interactive dashboard integrating machine learning models to predict business trends and automate reporting processes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
      githubUrl: "https://github.com/melike-pamuk/ai-dashboard",
      liveUrl: "https://ai-dashboard-demo.vercel.app"
    },
    {
      title: "Data Visualization Platform",
      description: "Comprehensive platform for creating interactive data visualizations with real-time updates and collaborative features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["D3.js", "Node.js", "MongoDB", "WebSocket"],
      githubUrl: "https://github.com/melike-pamuk/data-viz-platform",
      liveUrl: "https://dataviz-platform-demo.netlify.app"
    },
    {
      title: "Enterprise System Integration",
      description: "Microservices architecture solution connecting multiple business systems with automated workflow management.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
      technologies: ["Spring Boot", "Docker", "Kubernetes", "Redis"],
      githubUrl: "https://github.com/melike-pamuk/enterprise-integration",
      liveUrl: "https://enterprise-demo.herokuapp.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions that bridge technology and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
