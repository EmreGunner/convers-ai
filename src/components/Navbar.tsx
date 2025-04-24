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
        scrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Zap size={28} className="text-white" />
            <span className="font-medium text-lg text-white ml-3">Convers</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Product
            </a>
            <a href="#how" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium px-5 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <nav className="flex flex-col p-6 space-y-6">
            <a 
              href="#product" 
              className="text-lg font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </a>
            <a 
              href="#how" 
              className="text-lg font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              className="text-lg font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium text-white"
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