import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: ''
  })

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 text-secondary-container text-xs font-bold tracking-widest uppercase mb-6 border border-secondary-container/20">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shadow-[0_0_8px_rgba(0,227,253,1)]" />
              Status: Taking Projects
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight mb-8">
              Get in Touch
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed opacity-80">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate your digital future.
            </p>
          </div>
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-4 bg-secondary-container/10 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-60" />
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/5">
              <img
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9a2vCQ3zx9SMCKwR1PGBhONK9CTGC0n1d88V4PbeA5UJGSEv5XSRH9hHDUs5h_ZNGc6GQcSoASF1jyPh5sMYteuYgppIUYlpzwN1u1e9esCDpyHU2Sh32WD_tCDCqFy9e3uYaqRslXnE9Osg9J1d2FEyrH_Mxbfn9fTu2vjt30ME-BUDr7LkA_7QVzAyk9Xqd_UIPrI1FOlzXNSQM93-WaYWNStjVVMuRS25zvlFxuAErSESLgnm1JHiY8_doWepPCw4lUCggwI"
                alt="Modern office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <section className="lg:col-span-8 space-y-12">
          <div className="p-8 md:p-12 rounded-2xl bg-surface-container-low border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/5 blur-[100px] rounded-full -mr-32 -mt-32" />
            <h2 className="font-headline text-2xl font-bold text-white mb-2 relative">Start Your Request in 30 Seconds</h2>
            <p className="text-on-surface-variant text-sm mb-10 opacity-70 relative">Fill out the form below and we'll get back to you within 24 hours.</p>
            <form className="space-y-8 relative" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-slate-400 ml-1">Full Name</label>
                  <input
                    className="w-full bg-surface-container border-none rounded-xl px-4 py-4 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-secondary-container/40 transition-all"
                    placeholder="John Doe"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-slate-400 ml-1">Email Address</label>
                  <input
                    className="w-full bg-surface-container border-none rounded-xl px-4 py-4 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-secondary-container/40 transition-all"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-slate-400 ml-1">Service Needed</label>
                <div className="relative">
                  <select
                    className="w-full bg-surface-container border-none rounded-xl px-4 py-4 text-on-surface focus:ring-1 focus:ring-secondary-container/40 appearance-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option>Social Media Verification</option>
                    <option>Reputation Management</option>
                    <option>Account Recovery</option>
                    <option>Username Claim</option>
                    <option>Branding & Design</option>
                    <option>Web Development</option>
                    <option>PR & Media</option>
                    <option>Growth & Engagement</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">expand_more</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-slate-400 ml-1">Case Details &amp; URLs</label>
                <textarea
                  className="w-full bg-surface-container border-none rounded-xl px-4 py-4 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-secondary-container/40 transition-all resize-none"
                  placeholder="Tell us about your project or provide relevant links..."
                  rows="5"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>
              <button className="btn-primary" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="p-8 rounded-2xl bg-surface-container border border-white/5 transition-all hover:bg-surface-container-high group">
            <span className="material-symbols-outlined text-secondary-container text-3xl mb-6 block">mail</span>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Direct Inquiry</h3>
            <a className="text-xl font-headline font-bold text-white hover:text-secondary-container transition-colors" href="mailto:info@joinz.agency">info@joinz.agency</a>
          </div>
          <div className="p-8 rounded-2xl bg-surface-container border border-white/5">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-6">Social Connect</h3>
            <div className="space-y-4">
              {['Instagram', 'Facebook'].map((social) => (
                <a key={social} className="flex items-center justify-between group p-3 -mx-3 rounded-xl hover:bg-white/5 transition-all" href="#">
                  <span className="text-on-surface group-hover:text-secondary-container font-medium transition-colors">{social}</span>
                  <span className="material-symbols-outlined text-slate-600 group-hover:text-secondary-container transition-all translate-x-0 group-hover:translate-x-1">north_east</span>
                </a>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/5">
            <img
              className="w-full h-full object-cover brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbzDlZ2Bbjxu9en8tprU_YQqm75poHayoO7taRoCjyOZJRz4LxNxw4gsuMRMyQmRsdClLz4iY9XStEyz1jnFlLyoXRcdw4EcVfr0Hv8ZOQEBkiOK2l5bTOWvHt66Husv7sSCats_LjPd7TrC6bIpqgHSZr3JJ7e-XNO3XKmq2xO1cybt3AqK0nRH9GEhhAtg4YjWqYhZL0sUgCFytUb63TD8LLObnmgWyIRmjPCFzWT7NzjG_WA9AhUT3X9MV7SVtqyOP4Q-J-F0I"
              alt="Office space"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-bold text-white uppercase tracking-widest opacity-60 mb-1">Global Studio</p>
              <h4 className="text-white font-bold">Remote-First Culture</h4>
            </div>
          </div>
        </aside>
      </div>

      {/* WhatsApp Banner */}
      <section className="mt-12">
        <a className="block group relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary-container/20 to-primary-container/10 border border-secondary-container/20 p-8 md:p-12 transition-all hover:border-secondary-container/40" href="https://wa.me/201020366187" target="_blank" rel="noopener noreferrer">
          <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
            <span className="material-symbols-outlined text-9xl text-secondary-container">chat</span>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary-container text-4xl">forum</span>
                <h2 className="text-3xl font-headline font-black text-white uppercase tracking-tight">WhatsApp</h2>
              </div>
              <p className="text-on-surface-variant opacity-80">
                Prefer a faster conversation? Jump into a chat with our project managers right now for instant feedback on your ideas.
              </p>
            </div>
            <div>
              <div className="btn-primary">
                Start Chat
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        </a>
      </section>
    </main>
  )
}
