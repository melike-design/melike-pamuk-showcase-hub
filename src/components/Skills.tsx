
import { Database, BarChart3, Brain, Code, Zap, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets using statistical methods and visualization tools."
    },
    {
      icon: TrendingUp,
      title: "System Analysis",
      description: "Analyzing business processes and designing efficient information systems solutions."
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Transforming raw data into actionable business insights and strategic recommendations."
    },
    {
      icon: Database,
      title: "SQL",
      description: "Advanced database querying, optimization, and management for data-driven applications."
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Implementing artificial intelligence solutions to automate and enhance business processes."
    },
    {
      icon: Code,
      title: "System Design",
      description: "Architecting scalable and maintainable software solutions for complex business requirements."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise with business acumen to drive innovation and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.title}
                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {skill.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
