import { Mail, MapPin, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Zap size={32} className="text-emerald-400 mr-2" />
                <span className="font-bold text-xl">Morningside AI</span>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-sm">
                We build AI-powered lead engines that save you time, bring in qualified conversations, and fit into how you already work.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-emerald-400">Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Contact</p>
                    <a href="mailto:support@morningside.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      support@morningside.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    AI Lead Generation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Custom AI Agents
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Analytics & Optimization
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Seamless Integration
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#who" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Who We Serve
                  </a>
                </li>
                <li>
                  <a href="#included" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    What's Included
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Morningside AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;