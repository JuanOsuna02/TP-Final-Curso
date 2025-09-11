import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Imagen a la izquierda con forma semicircular */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Forma semicircular completa en la parte superior */}
              <div 
                className="h-96 lg:h-[500px] flex items-center justify-center overflow-hidden"
                style={{
                  borderTopLeftRadius: '50% 50%',
                  borderTopRightRadius: '50% 50%',
                  borderBottomLeftRadius: '0',
                  borderBottomRightRadius: '0'
                }}
              >
                {/* Imagen que ocupa toda la zona con fondo marrón/beige */}
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#D2B48C' }}>
                  <img 
                    src="/AbouUsIMG.png" 
                    alt="About Us" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contenido de texto a la derecha */}
          <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12">
            <h2 className="text-4xl lg:text-5xl font-recoleta font-semibold text-gray-900 mb-4">
              About Us
            </h2>
            
            {/* Línea separadora */}
            <div className="w-16 h-0.5 bg-gray-800 mb-6"></div>
            
            {/* Párrafo de texto */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-ultine">
              The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment, and the way in which charity law affects charitable organizations also vary.
            </p>
            
            {/* Enlace Read More */}
            <a 
              href="#" 
              className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
        
        {/* Bottom Border Line */}
        <div className="mt-24 border-t border-gray-300"></div>
      </div>
    </section>
  );
};

export default AboutUs;
