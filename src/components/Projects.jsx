const projects = [
  {
    title: 'SaaS Marketing Site',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Creator Portfolio',
    tags: ['Vite', 'Three/Spline', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Fintech Dashboard',
    tags: ['React', 'Charts', 'Design System'],
    image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM0NTcxNTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
          <p className="mt-3 text-slate-300">A few recent projects. More available upon request.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={p.image} alt="" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300/90">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
