export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About me</h2>
            <p className="mt-4 text-slate-300">
              I’m a web designer and front-end developer focused on crafting playful yet professional experiences. I combine crisp typography, modern layouts, and subtle 3D to tell your story in a way that sticks.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300/90">
              <li>• 6+ years designing and building for the web</li>
              <li>• Performance-first approach (Core Web Vitals)</li>
              <li>• JAMstack and modern frameworks</li>
              <li>• Collaborative, transparent process</li>
            </ul>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-sky-500/10 to-fuchsia-500/10 p-1">
              <div className="rounded-3xl bg-slate-900 p-6">
                <p className="text-slate-300">
                  "Working with you felt effortless. The site looks incredible and actually moves the needle for our business."
                </p>
                <div className="mt-4 text-sm text-slate-400">— Happy client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
