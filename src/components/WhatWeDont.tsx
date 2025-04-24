import { XCircle } from 'lucide-react';

const WhatWeDont = () => {
  const dontDoItems = [
    "We don't sell leads — we build systems that get them",
    "We don't offer vague \"consulting\" — we build and ship",
    "We don't do mass spam or fake personalization",
    "We don't promise unicorn growth — just solid systems that compound"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gray-800">What We Don't Do</span>
            </h2>
            <p className="text-lg text-gray-700">
              Just as important as what we do is what we don't do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {dontDoItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <XCircle className="text-red-500 flex-shrink-0 mt-1" size={22} />
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDont;