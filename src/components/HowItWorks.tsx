import { ArrowRight, Bot, MessageSquare, Calendar } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Bot className="h-8 w-8 text-primary-400" />,
      title: "AI Finds Your Ideal Leads",
      description: "Our system identifies and filters perfect-fit prospects based on your successful customers."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary-400" />,
      title: "Personalized Outreach",
      description: "Automated messages that sound exactly like you, with follow-ups that keep conversations warm."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-400" />,
      title: "Qualified Calls Booked",
      description: "Interested prospects are automatically scheduled into your calendar."
    }
  ];

  return (
    <section id="how" className="section bg-black/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              How It <span className="text-primary-400">Works</span>
            </h2>
            <p className="text-xl text-gray-400">
              A simple 3-step process that runs on autopilot
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 rounded-xl p-8 h-full">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight 
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary-400" 
                    size={24}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#contact" className="btn-primary">
              Start Your Lead Engine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;