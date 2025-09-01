export default function Hero() {
  return (
    <section className="section bg-white">
      <div className="container-1100 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl leading-tight">
            Charity Is An <br/> Act Of A Soft <br/> Heart.
          </h1>
          <p className="mt-4 text-slate-600 max-w-md">
            We&apos;ve spent the last 5 years helping over 25,000 teams just like yours
            create and sustain successful online support.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-md bg-brand-green text-white px-5 py-3">Donate Now</button>
            <button className="rounded-md border border-slate-300 px-5 py-3">Learn about us</button>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-slate-200">
          {/* Reemplazá por la foto exacta del diseño */}
          <div className="absolute inset-0 grid place-items-center text-slate-500 text-sm">Foto</div>
        </div>
      </div>
    </section>
  );
}
