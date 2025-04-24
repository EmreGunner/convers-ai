import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-emerald-600 to-emerald-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See If It Fits?
          </h2>
          
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Reach out. We'll audit your current system (or lack of one), and show you how this setup can fit in — or not.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-emerald-800 text-xl font-bold mb-6">Get in Touch</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-1">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900"
                  placeholder="Tell us about your current lead generation process..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2 group"
              >
                Submit Request
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;