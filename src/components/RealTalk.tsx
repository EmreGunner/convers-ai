import { AlertCircle } from 'lucide-react';

function RealTalk() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Real <span className="text-emerald-500">Talk</span>
            </h2>
            <p className="text-lg text-gray-300">
              We believe in transparency and setting realistic expectations
            </p>
          </div>
          
          <div className="glass-card p-8 border-l-4 border-l-amber-500">
            <div className="flex items-center mb-6">
              <AlertCircle size={24} className="text-amber-400 mr-3" />
              <h3 className="text-xl font-bold text-white">This is not a magic switch</h3>
            </div>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-amber-400 font-bold mr-2">•</span>
                <p>It takes about 10–14 days to launch, and results depend on your offer, niche, and willingness to test.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 font-bold mr-2">•</span>
                <p>We don't promise 15 booked calls in 30 days. Sometimes you'll get 3 good ones. Sometimes more.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 font-bold mr-2">•</span>
                <p>This is about consistency and leverage — not overnight miracles.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealTalk;