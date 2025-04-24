import { Bot, Users, PieChart, MessageSquare, UserCheck } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const services = [
    {
      icon: <Bot size={24} />,
      title: "AI Lead Generation",
      description: "Our AI systems automatically find and filter high-fit prospects, then engage them with personalized messages that sound like you. We handle the entire process from identification to conversation.",
      features: [
        "Automatic prospect identification",
        "Multi-channel outreach (email, LinkedIn)",
        "Smart follow-up sequences",
        "Response handling and routing"
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Custom AI Agents",
      description: "We build autonomous AI agents that work behind the scenes to engage prospects, answer questions, and nurture leads - all while maintaining your unique voice and values.",
      features: [
        "Tailored to your specific workflow",
        "Multi-tool integration capability",
        "24/7 operation and monitoring",
        "Human-in-the-loop fallback options"
      ]
    },
    {
      icon: <PieChart size={24} />,
      title: "Analytics & Optimization",
      description: "Our systems continuously learn from interactions, improving messaging and targeting over time for better results with less maintenance.",
      features: [
        "Response rate monitoring",
        "Message effectiveness tracking",
        "A/B testing capability",
        "Conversion path optimization"
      ]
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Seamless Integration",
      description: "We integrate with your existing CRM, email, and communication tools, ensuring a smooth flow of information and preventing any disruption to your current processes.",
      features: [
        "CRM synchronization",
        "Email provider integration",
        "Calendar connection for booking",
        "Notification systems"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-emerald-600">What We Build</span>
            </h2>
            <p className="text-lg text-gray-700">
              We set up a done-for-you AI lead gen system that works while you focus on delivery
            </p>
          </div>
          
          <div className="flex flex-wrap border-b border-gray-200 mb-10">
            {services.map((service, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-3 font-medium text-sm transition-colors focus:outline-none sm:px-6 ${
                  activeTab === index
                    ? "border-b-2 border-emerald-600 text-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="mr-2">{service.icon}</span>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                {services[activeTab].icon}
              </div>
              <h3 className="text-xl font-bold">{services[activeTab].title}</h3>
            </div>
            
            <p className="text-gray-700 mb-8">{services[activeTab].description}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {services[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <UserCheck className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;