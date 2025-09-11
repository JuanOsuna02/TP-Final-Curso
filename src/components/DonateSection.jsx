import React from 'react';

const DonateSection = () => {
  return (
    <section 
      className="py-16 relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(180deg, #0E6A56 0%, #0A705D 50%, #0E6A56 100%)'
      }}
    >
      {/* Background with image overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg,#0E6A56_0%,#0A705D_50%,#0E6A56_100%)'
        }}
      ></div>
      
      {/* Image overlay with blend mode */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/381824514_053f767c-f2ea-4454-ac77-d7673436c1ec.jpg" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
          style={{
            mixBlendMode: 'overlay'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-recoleta font-semibold text-white leading-tight">
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
