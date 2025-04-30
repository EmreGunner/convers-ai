import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 rounded-lg">
              <Zap size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-white ml-3">Convers<span className="text-emerald-400">AI</span></span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
         
            <a href="#how" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
              How it Works
            </a>
          
            <a 
              href="#contact" 
              className="text-sm font-medium px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              Get Started
            </a>
          </nav>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-lg border-b border-white/10">
          <nav className="flex flex-col p-6 space-y-6">
         
            <a 
              href="#how" 
              className="text-lg font-medium text-white hover:text-emerald-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
         
            <a 
              href="#contact" 
              className="inline-block text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;