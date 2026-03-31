import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-container/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-secondary-container/10 text-secondary-container mb-8 border border-secondary-container/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
            <span className="text-xs font-label tracking-[0.2em] uppercase font-semibold">The Collective</span>
          </div>
            <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-8 max-w-4xl mx-auto leading-[0.9]">
              Who <span className="text-accent">We Are</span>
            </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We are your <span className="text-white font-semibold">silent partners</span>, architects of digital influence working behind the scenes to turn complex challenges into seamless victories.
          </p>
        </div>
      </section>

      {/* Story & Expertise Section */}
      <section className="py-24 md:py-48 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary-container/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                alt="Creative team collaborating"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlyBVqPDJlNBe5wiAc3rZXbXLRsARUc-mll82CiRzOTarHqWDGmYBpDoYcKdzDYm-Zv8IRRQYZ9mOC1l0gnKH-30hHWdC_WxFNo7Xf6lYyAibmIVOScrDgwHP6jxVmDfouyusjlk_WGSkptqTDWupmDMw0vW9HScpkuLeobD8AgxaCq64J7fZLjYE8ugChsUfO3R34-N0B9UtcVr3CuZvVsj5WT12dEJChYbVOlZLk4PkI02buPMk_Gmj9_b_zP21-8mN_ZjLKosk"
              />
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white">Our Story &amp; Expertise</h2>
              <div className="h-1 w-20 bg-secondary-container" />
            </div>
            <div className="space-y-8 font-body text-lg text-on-surface-variant leading-relaxed">
              <p>Founded on the principle of curated excellence, our agency began as a boutique collective of specialists dedicated to high-stakes digital execution. We don't just build products; we craft legacies.</p>
              <p>Our expertise spans the intersection of strategy, design, and technical mastery. We prioritize the "how" as much as the "what," ensuring every deliverable meets the highest standards of the global market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 rounded-2xl bg-surface-container border border-white/5 flex flex-col items-center text-center group hover:bg-surface-container-high transition-all duration-500">
              <span className="text-6xl font-headline font-black text-secondary-container mb-4 glow-text">98%</span>
              <span className="font-label text-sm tracking-[0.3em] uppercase text-on-surface-variant">Success Rate</span>
            </div>
            <div className="p-12 rounded-2xl bg-surface-container border border-white/5 flex flex-col items-center text-center group hover:bg-surface-container-high transition-all duration-500">
              <span className="text-6xl font-headline font-black text-white mb-4">500+</span>
              <span className="font-label text-sm tracking-[0.3em] uppercase text-on-surface-variant">Cases Handled</span>
            </div>
            <div className="p-12 rounded-2xl bg-surface-container border border-white/5 flex flex-col items-center text-center group hover:bg-surface-container-high transition-all duration-500">
              <div className="flex items-center space-x-2 text-secondary-container mb-4">
                <span className="material-symbols-outlined text-5xl">support_agent</span>
              </div>
              <span className="text-3xl font-headline font-bold text-white mb-2">24/7 Support</span>
              <span className="font-label text-sm tracking-[0.3em] uppercase text-on-surface-variant">Dedicated Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-48 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">What Makes Us Different</h2>
              <p className="text-on-surface-variant text-xl leading-relaxed">We operate at the edge of what's possible, balancing speed with surgical precision.</p>
            </div>
            <div className="pb-4">
              <span className="material-symbols-outlined text-6xl text-secondary-container/20">diversity_3</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-outline-variant/10 rounded-2xl overflow-hidden">
            {[
              { icon: 'bolt', color: 'secondary-container', title: 'Speed Without Compromise', desc: 'Rapid deployment cycles that maintain elite-level quality control. We move as fast as your market demands.' },
              { icon: 'shield', color: 'secondary-container', title: 'Absolute Confidentiality', desc: 'Your intellectual property and strategic initiatives are protected with enterprise-grade security protocols.' },
              { icon: 'auto_graph', color: 'secondary-container', title: 'Result-Driven Assurance', desc: "We don't just deliver reports; we deliver tangible growth and measurable impact for every single partner." },
            ].map((item, i) => (
              <div key={i} className="p-12 bg-surface hover:bg-surface-container transition-colors duration-500 group">
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-container/10 flex items-center justify-center text-${item.color} mb-8 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto p-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl">
          <div className="bg-surface-container-lowest p-16 md:p-24 rounded-3xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">Ready to build your digital legacy?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full md:w-auto btn-primary">
                Get Started
              </Link>
              <Link to="/services" className="w-full md:w-auto btn-secondary">
                View Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
