export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-slate-100 sticky top-0 z-50">
      <nav className="container-1100 h-14 flex items-center justify-between">
        <div className="font-display text-xl tracking-tight">
          Ta<span className="align-super text-[10px]">•</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm text-slate-700">
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#campaign" className="hover:underline">Campaign</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
        <button className="rounded-md bg-brand-green text-white px-3 py-2 text-sm">
          Donate Now
        </button>
      </nav>
    </header>
  );
}
