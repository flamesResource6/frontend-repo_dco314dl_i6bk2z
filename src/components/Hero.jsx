import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Booking new projects for Q1–Q2
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Playful web design that still means business
            </h1>
            <p className="mt-4 text-lg text-slate-200/90">
              I craft fast, modern websites with a clean aesthetic and interactive touches. Perfect for startups, creators, and established brands that want personality without sacrificing performance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition">Start a project</a>
              <a href="#projects" className="inline-flex items-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium border border-white/15 hover:bg-white/15 transition">See work</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
