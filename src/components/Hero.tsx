import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 py-24 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/30 via-transparent to-indigo-900/40 pointer-events-none" />
      <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-400 drop-shadow-lg">
        AI Lead Generation, <br /> Done For You
      </h1>
      <p className="relative z-10 mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
        Unlock more revenue with a fully automated, personalized AI outreach system. Focus on delivery, let us handle the pipeline.
      </p>
      <div className="relative z-10 mt-10 flex gap-4 justify-center">
        <a
          href="#get-started"
          className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg transition"
        >
          Get Started
        </a>
        <a
          href="#learn-more"
          className="px-8 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;