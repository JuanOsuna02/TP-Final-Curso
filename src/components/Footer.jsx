import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-beige">
      {/* Dark teal header band */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Four columns grid */}
        <div className="flex flex-col lg:flex-row gap-20 mb-8">
          
          {/* Newsletter Column */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-recoleta font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4 font-ultine">Subscribe to our newsletter to get more informations</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-600 text-white px-4 py-2 text-sm hover:bg-teal-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Grouped Columns Container */}
          <div className="lg:w-3/4 flex flex-col md:flex-row" style={{gap: 0}}>
            {/* Navigation Column */}
            <div className="w-1/3" style={{paddingRight: 0, marginRight: 0}}>
              <h3 className="text-lg font-recoleta font-semibold text-gray-800 mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">Home</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">Campaign</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">Team</a></li>
              </ul>
            </div>

            {/* About Us Column */}
            <div className="w-1/3" style={{paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0}}>
              <h3 className="text-lg font-recoleta font-semibold text-gray-800 mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">Address</a></li>
              </ul>
            </div>

            {/* Help Column */}
            <div className="w-1/3" style={{paddingLeft: 0, marginLeft: 0}}>
              <h3 className="text-lg font-recoleta font-semibold text-gray-800 mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">Donar Guide</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">FAQ</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">We Are Hiring</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800 font-ultine">Returns</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>Designed By Tanim Khan</p>
          <p>WWW.Dribbble.Com/Tanim_ui</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
