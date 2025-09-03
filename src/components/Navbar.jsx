export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2">
      {/* Left side - Logo on beige background */}
      <div className="bg-brand-beige flex items-center justify-start pl-8 h-16">
        <div className="flex items-center">
          <div className="font-serif text-3xl font-light italic tracking-wide text-brand-dark" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Ta
          </div>
          <div className="ml-1 flex items-center gap-0.5">
            <div className="flex flex-col items-center justify-center relative h-8">
              <div className="w-3 h-0.5 bg-brand-green transform rotate-12 rounded-full -mt-1.5"></div>
              <div className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2.5"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Navigation on yellow background */}
      <div className="bg-brand-yellow flex items-center justify-end pr-8 h-16">
        <ul className="hidden md:flex items-center gap-4 text-sm font-medium text-brand-dark">
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li className="text-brand-dark">•</li>
          <li><a href="#campaign" className="hover:underline">Campaign</a></li>
          <li className="text-brand-dark">•</li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
}
