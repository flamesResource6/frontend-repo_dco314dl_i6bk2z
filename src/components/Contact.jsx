import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! I’ll get back to you within 24 hours.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build something great</h2>
          <p className="mt-3 text-slate-300">Tell me about your project and I’ll reach out shortly.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 max-w-xl">
          <input required name="name" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
          <input required name="email" type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
          <input name="budget" placeholder="Estimated budget (optional)" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
          <textarea required name="message" placeholder="Project details" rows={5} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition">Send message</button>
          {status && <div className="text-emerald-300/90 text-sm">{status}</div>}
        </form>
      </div>
    </section>
  )
}
