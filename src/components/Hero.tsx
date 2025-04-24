import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-black overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/5 px-4 py-1.5 rounded-full mb-6 md:mb-8">
            <div className="h-2 w-2 rounded-full bg-primary-400 mr-2"></div>
            <span className="text-sm font-medium text-primary-400">FOR $10K-100K/MO BUSINESSES</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 text-white">
            Stop Chasing Leads.<br className="hidden sm:block" />
            <span className="text-primary-400">Let AI Find Them For You.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We build automated lead generation systems for SaaS founders and agency owners. 
            No more manual outreach or cold calling - just qualified conversations in your inbox.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 px-4 sm:px-0">
            {[
              'Finds perfect-fit leads automatically',
              'Writes messages that sound like you',
              'Books calls while you sleep'
            ].map((item) => (
              <div key={item} className="flex items-center bg-white/5 px-4 py-3 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary-400 flex-shrink-0 mr-3" />
                <span className="text-sm text-gray-300 text-left">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
            <a 
              href="#contact" 
              className="w-full sm:w-auto btn-primary"
            >
              See If You Qualify
            </a>
            
            <a 
              href="#how" 
              className="w-full sm:w-auto btn-secondary"
            >
              How It Works
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 md:mt-16 p-6 bg-white/5 rounded-xl mx-4 sm:mx-0">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              "Perfect for busy founders who need leads but hate cold outreach. 
              Our AI system found 127 qualified leads in the first month - all on autopilot."
            </p>
            <div className="mt-4 text-white font-medium">
              Sarah Chen, SaaS Founder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;