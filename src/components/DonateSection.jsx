import React from 'react';

const DonateSection = () => {
  return (
    <section 
      className="py-16 relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(180deg, #0E6A56 0%, #0A705D 50%, #0E6A56 100%)'
      }}
    >
      {/* Decorative wavy lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,10 50,20 T100,20 L100,100 L0,100 Z" fill="white" />
          <path d="M0,40 Q25,30 50,40 T100,40 L100,100 L0,100 Z" fill="white" />
          <path d="M0,60 Q25,50 50,60 T100,100 L0,100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Let's Help Other With<br />
              Your Charity
            </h2>
          </div>

          {/* Right side - Button */}
          <div className="flex-shrink-0">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
