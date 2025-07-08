
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Melike Pamuk
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Management Information Systems Graduate
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Melike Pamuk
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with passion and modern web technologies
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Crafting innovative solutions at the intersection of technology and business
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
