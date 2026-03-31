import { Link } from 'react-router-dom'

export default function Username() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-24 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed-dim/10 border border-secondary-fixed-dim/20 text-secondary-fixed-dim text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse" />
            Identity Restoration
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-tight">
            Secure Your <br />
            <span className="text-accent">Dream Username</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            Obtain high-value, inactive, or trademarked social media handles. We specialize in reclaiming digital identities across Instagram, Twitter (X), TikTok, and Facebook.
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-secondary-container/20 blur-3xl rounded-full" />
          <div className="relative glass-card border border-outline-variant/20 rounded-lg p-1 overflow-hidden shadow-2xl">
            <img
              alt="Cybersecurity visualization"
              className="rounded-lg object-cover w-full h-[400px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByFJHV2PwDxKPZNQKkSlbWL5WEkuNptYtYXqhCKJvUSOd0khhF04wliHkwlnuLbh63MA0bGYOIhWv5DjAzq61jRZHUXhvozxKHoR2nKc6dptWmGPgCPxxlW43sLaeKGr9WTBtMQgUq2XBF0Mi6Sf63P0x1nloKKsO6V44L5F7Uplf3J0C8hZlhlaaFkjsOkc0kjwu7QZzT1yQZR8d6FJvGt9dVoXjO-1YSIPSGGtC8IDehVq-AAzcMmwenm2NMP25SDeK8COM4vII"
            />
          </div>
        </div>
      </header>

      {/* Bento Grid Service Features */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
        <div className="md:col-span-8 glass-card border border-outline-variant/10 p-10 rounded-lg group hover:bg-surface-container transition-all duration-500">
          <div className="flex flex-col h-full justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">verified_user</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Unlocking Inactive Handles</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg max-w-2xl">
                Is your brand name taken by a dormant account with zero activity? Our proprietary legal outreach and platform partnerships allow us to facilitate the transfer of inactive usernames directly to your control.
              </p>
            </div>
            <div className="mt-12 flex gap-4">
              <div className="flex -space-x-3">
                {['alternate_email', 'tag', 'brand_awareness'].map((icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 italic flex items-center">Supporting all major platforms</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/10 p-8 rounded-lg">
          <span className="material-symbols-outlined text-primary text-3xl mb-4">gavel</span>
          <h4 className="text-xl font-headline font-bold mb-2">Trademark Claims</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Protect your intellectual property. We leverage trademark laws to reclaim usernames that infringe on your brand's legal rights globally.
          </p>
        </div>
        <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/10 p-8 rounded-lg">
          <span className="material-symbols-outlined text-secondary text-3xl mb-4">shield_person</span>
          <h4 className="text-xl font-headline font-bold mb-2">Impersonation Removal</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Swift action against fake accounts. We secure your identity by removing impersonators and claiming the correct handle for your public profile.
          </p>
        </div>
        <div className="md:col-span-8 glass-card border border-outline-variant/10 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h4 className="text-2xl font-headline font-bold mb-2">White-Glove Support</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Dedicated account managers guide you through the entire verification and claim process. Zero risk, 100% confidentiality, and guaranteed results or you don't pay.
            </p>
          </div>
          <div className="bg-surface-container-highest p-4 rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">support_agent</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Available 24/7</p>
                <p className="font-bold">Expert Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Form Section */}
      <section className="max-w-4xl mx-auto mb-32 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        <div className="relative glass-card border border-outline-variant/20 rounded-lg p-12 shadow-[0_0_40px_-10px_rgba(0,227,253,0.15)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Start Your Claim</h2>
            <p className="text-on-surface-variant">Provide the details below and our specialists will assess your case within 24 hours.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-label text-slate-400 ml-1">Current Platform</label>
              <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all outline-none appearance-none">
                <option>Instagram</option>
                <option>Twitter (X)</option>
                <option>TikTok</option>
                <option>YouTube</option>
                <option>Facebook</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-label text-slate-400 ml-1">Desired Username</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">@</span>
                <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl pl-8 pr-4 py-3 text-on-surface focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all outline-none" placeholder="yourbrand" type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-label text-slate-400 ml-1">Your Full Name</label>
              <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all outline-none" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-label text-slate-400 ml-1">Contact Email</label>
              <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all outline-none" placeholder="john@company.com" type="email" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-label text-slate-400 ml-1">Case Details (Reason for claim, Trademark info, etc.)</label>
              <textarea className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all outline-none resize-none" placeholder="Briefly describe why you are entitled to this handle..." rows="4" />
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="w-full bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed font-headline font-bold py-4 rounded-xl shadow-[0_0_25px_rgba(0,227,253,0.2)] hover:scale-[1.03] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all transform active:scale-[0.98]" type="submit">
                Submit Investigation Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low rounded-lg p-12 border border-outline-variant/10 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '500+', label: 'Usernames Claimed' },
            { value: '94%', label: 'Success Rate' },
            { value: '12h', label: 'Avg Response' },
            { value: '100%', label: 'Secure Escrow' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-headline font-black text-secondary-container mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
