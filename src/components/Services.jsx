import { Sparkles, Layout, Rocket, Palette } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Websites & Landing Pages',
    desc: 'Clean, responsive websites that load fast and look great on every device.',
  },
  {
    icon: Rocket,
    title: 'Web Apps & MVPs',
    desc: 'From idea to interactive product with modern, scalable tech.',
  },
  {
    icon: Palette,
    title: 'Brand & UI Kits',
    desc: 'Design systems, color palettes, and components for consistent visuals.',
  },
  {
    icon: Sparkles,
    title: 'Animations & Interactions',
    desc: 'Delightful motion and micro-interactions that elevate the experience.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Services</h2>
          <p className="mt-3 text-slate-300">Everything you need to go from idea to polished, high-converting presence.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 hover:bg-white/10 transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white shadow-lg">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
