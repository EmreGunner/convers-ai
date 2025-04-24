import { SearchIcon, MessageSquare, Brain, BarChart4, BookOpen } from 'lucide-react';

const WhatsIncluded = () => {
  const includedItems = [
    {
      icon: <SearchIcon size={24} className="text-emerald-600" />,
      title: "ICP Discovery",
      description: "We map your best-fit customer profile based on real data"
    },
    {
      icon: <MessageSquare size={24} className="text-emerald-600" />,
      title: "Messaging Engine",
      description: "Personalized GPT outreach scripts based on your tone and audience"
    },
    {
      icon: <Brain size={24} className="text-emerald-600" />,
      title: "AI Agent Setup",
      description: "Custom-built agents for email, LinkedIn, or both"
    },
    {
      icon: <BarChart4 size={24} className="text-emerald-600" />,
      title: "Live Dashboard",
      description: "Track replies, booked calls, and lead status in real time"
    },
    {
      icon: <BookOpen size={24} className="text-emerald-600" />,
      title: "System Training",
      description: "Walkthrough so your team knows how to use it (or we run it for you)"
    }
  ];

  return (
    <section id="included" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-emerald-400">What's Included</span>
            </h2>
            <p className="text-lg text-gray-300">
              Our comprehensive solution covers everything you need for effective AI-powered lead generation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {includedItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 transition-transform hover:-translate-y-1 hover:shadow-emerald-900/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-emerald-400">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;