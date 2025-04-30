import { ArrowRight, Bot, MessageSquare, Calendar } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Bot className="h-8 w-8 text-emerald-400" />,
      title: "AI Finds Your Ideal Leads",
      description: "Our system identifies and filters perfect-fit prospects based on your successful customers."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-emerald-400" />,
      title: "Personalized Outreach",
      description: "Automated messages that sound exactly like you, with follow-ups that keep conversations warm."
    },
    {
      icon: <Calendar className="h-8 w-8 text-emerald-400" />,
      title: "Qualified Calls Booked",
      description: "Interested prospects are automatically scheduled into your calendar."
    }
  ];

  return (
    <section id="how" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It <span className="text-emerald-400">Works</span>
            </h2>
            <p className="text-xl text-gray-400">
              A simple 3-step process that runs on autopilot
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 h-full border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <div className="mb-6 bg-emerald-900/30 w-16 h-16 rounded-xl flex items-center justify-center">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight 
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-400" 
                    size={24}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
            >
              Start Your Lead Engine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;