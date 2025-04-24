import { AlertCircle } from 'lucide-react';

const RealTalk = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-emerald-600">Real Talk</span>
            </h2>
            <p className="text-lg text-gray-700">
              We believe in transparency and setting realistic expectations
            </p>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <AlertCircle size={24} className="text-amber-600 mr-3" />
              <h3 className="text-xl font-bold text-amber-800">This is not a magic switch</h3>
            </div>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">•</span>
                <p>It takes about 10–14 days to launch, and results depend on your offer, niche, and willingness to test.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">•</span>
                <p>We don't promise 15 booked calls in 30 days. Sometimes you'll get 3 good ones. Sometimes more.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">•</span>
                <p>This is about consistency and leverage — not overnight miracles.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTalk;