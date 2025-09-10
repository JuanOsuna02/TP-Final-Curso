import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-beige">
      {/* Dark teal header band */}
      <div className="h-1 bg-teal-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Four columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter to get more informations</p>
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

          {/* Navigation Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Campaign</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Team</a></li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Address</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Donar Guide</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">We Are Hiring</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Returns</a></li>
            </ul>
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
