export default function Hero() {
  return (
    <section className="grid grid-cols-2 min-h-[80vh] relative">
      {/* Left side - Content on beige background */}
      <div className="bg-brand-beige flex items-center justify-center px-8 py-16 relative">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl font-recoleta leading-[1.1] text-brand-dark mb-6 font-semibold">
            Charity Is An <br/> 
            Act Of A Soft <br/> 
            Heart.
          </h1>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-md font-ultine">
            We've spent the last 5 years helping over 25,000 
            teams just like yours create and sustain 
            successful online support.
          </p>
          <div className="mb-12 flex items-center gap-8">
            <button className="bg-brand-green text-white px-8 py-3 rounded-md font-medium hover:bg-brand-teal transition-colors">
              Donate Now
            </button>
            
            {/* Wavy arrow between buttons - mejorada con 2 ondas y punta visible */}
            <svg className="w-16 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 64 32" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16 Q12 8, 20 16 T36 16 Q44 8, 52 16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M56 12 L60 16 L56 20" />
            </svg>
            
            {/* Circular "Learn about us through this video" element */}
            <div className="relative">
              <div className="w-36 h-36 border-2 border-slate-300 rounded-full relative flex items-center justify-center cursor-pointer hover:border-slate-400 transition-colors bg-brand-beige">
                {/* Play button in center */}
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center relative z-10">
                  <svg className="w-6 h-6 text-brand-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                
                                {/* SVG Circular text - automático y perfectamente alineado */}
                <svg className="w-36 h-36 absolute inset-0" viewBox="0 0 144 144">
                  <defs>
                    <path 
                      id="textcircle" 
                      d="M 72 20 A 52 52 0 1 1 72 124 A 52 52 0 1 1 72 20 A 52 52 0 1 1 72 124 A 52 52 0 1 1 72 20"
                      fill="none"
                    />
                  </defs>
                  <text className="text-xs font-medium" fill="#374151" letterSpacing="3">
                                        <textPath href="#textcircle" startOffset="0%" textLength="290" lengthAdjust="spacingAndGlyphs">
                      Learn about us through this video
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex gap-8 text-sm text-slate-600">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Youtube</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Instagram</a>
          </div>
        </div>
      </div>
      
      {/* Right side - Image on yellow background, image flush to the split */}
      <div className="bg-brand-yellow flex items-center justify-start pr-8 py-16 relative">
        {/* Image container sits exactly at the split (no negative margin) */}
        <div className="w-full max-w-md ml-0 relative z-10">
          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-orange-200 shadow-lg">
            <img 
              src="/PadreEHijo.jpeg" 
              alt="Padre e Hijo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
