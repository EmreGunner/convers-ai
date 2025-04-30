import { CheckCircle2, XCircle } from 'lucide-react';

const WhoThisIsFor = () => {
  const idealCustomers = [
    'SaaS founders doing $10k-100k monthly revenue',
    'Marketing agency owners with 5+ clients',
    'B2B companies with $3k+ deal values',
    'Businesses with proven products/services'
  ];

  const painPoints = [
    'Spending hours manually searching for leads',
    'Paying for multiple tools that don\'t work together',
    'Tired of inconsistent results from VAs and freelancers',
    'Need more sales calls but hate cold outreach'
  ];

  return (
    <section id="who" className="section bg-black">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Is This Right For <span className="text-primary-400">You?</span>
            </h2>
            <p className="text-xl text-gray-400">
              Our AI lead generation system works best for specific types of businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-6">Perfect For You If:</h3>
              <div className="space-y-4">
                {idealCustomers.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-6">Common Problems We Solve:</h3>
              <div className="space-y-4">
                {painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <XCircle className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-primary-400/10 p-8 rounded-xl text-center">
            <p className="text-xl text-white">
             If your problem on lead generation but you dont have problem on delivering good service  — let's talk.
            </p>
            <a 
              href="#contact" 
              className="mt-6 inline-block btn-primary"
            >
              See If You Qualify
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;