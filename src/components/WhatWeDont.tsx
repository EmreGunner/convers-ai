import { XCircle } from 'lucide-react';

function WhatWeDont() {
  const dontDoItems = [
    "We don't sell leads — we build systems that get them",
    "We don't offer vague \"consulting\" — we build and ship",
    "We don't do mass spam or fake personalization",
    "We don't promise unicorn growth — just solid systems that compound"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              What We <span className="text-emerald-500">Don't</span> Do
            </h2>
            <p className="text-lg text-gray-300">
              Just as important as what we do is what we don't do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {dontDoItems.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 flex items-start gap-4"
              >
                <XCircle className="text-red-500 flex-shrink-0 mt-1" size={22} />
                <p className="font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDont;