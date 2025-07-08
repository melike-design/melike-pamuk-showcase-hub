
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
              alt="Melike Pamuk"
              className="w-44 h-44 rounded-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Melike Pamuk
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Aspiring Management Information Systems graduate passionate about AI and software development.
          </p>
          
          <button
            onClick={scrollToSkills}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
