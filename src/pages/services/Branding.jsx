import { Link } from 'react-router-dom'

export default function Branding() {
  return (
    <main className="relative overflow-hidden pt-32">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[120px] bg-[radial-gradient(circle,rgba(0,227,253,0.15)_0%,rgba(0,227,253,0)_70%)] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] blur-[120px] bg-[radial-gradient(circle,rgba(0,227,253,0.15)_0%,rgba(0,227,253,0)_70%)] -z-10 -translate-x-1/2 translate-y-1/2 opacity-30" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed-dim/10 border border-secondary-fixed-dim/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse" />
              <span className="text-secondary text-xs font-label uppercase tracking-widest font-semibold">Strategic Design</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-tight mb-8">
              Branding <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">& Design</span>
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed font-light">
              We don't just create logos. We architect visual identities that command attention and build lasting trust in the digital age.
            </p>
          </div>
          <div className="md:w-1/3 pt-12">
            <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">brush</span>
              </div>
              <h3 className="text-white font-headline font-bold text-xl mb-4">The Aesthetic Standard</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Blending strategic depth with editorial precision to create brands that feel like heritage but function for tomorrow.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Explore Work <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">Crafted Identities</h2>
              <p className="text-on-surface-variant text-lg">A curation of our recent visual transformations.</p>
            </div>
            <div className="flex gap-4">
              <button className="p-4 rounded-full border border-outline-variant/20 hover:bg-white/5 transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-4 rounded-full border border-outline-variant/20 hover:bg-white/5 transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative aspect-video md:aspect-auto md:h-[600px] overflow-hidden rounded-2xl bg-surface-container">
              <img alt="Luxury minimalist branding" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7PhQJhaFm2nrD9MKDFQedK_y3V1iUUnhsm4mn9Os3vGphDLX3fI23k9U707RYePLtZdyDTO0wZbboQvGc-i-pCdkCC5Hk72Chh24L93dYhpHmwEiOoAgxYfkpoBDBQm2WxvQuw393KYlLu2jdWM-9Qw1ooLlEqjccWhSGJOqh4YFfwug-i9jfjGmfNVg8xf_jC8dMcvc1Jim1MJb8JFKyXSm_dGNG0wKeVH5pgOniLNzrcXHYfQGb4dWmPhO8yOPiWX8fpK1SkEQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-12">
                <span className="text-secondary-fixed-dim font-label text-xs tracking-widest uppercase mb-2 block">Case Study 01</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-2">The Noir Collective</h3>
                <p className="text-on-surface-variant max-w-md">Global rebranding for a luxury architectural firm in Zurich.</p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="h-1/2 group relative overflow-hidden rounded-2xl bg-surface-container">
                <img alt="Tech Brand Design" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDer0QOfFPAqVrrt0t1OaCZQ6qO1627TrWPUR0f1Tq3pzWUBPRFw3uzmHUzwQSkDylAgAcA-z5p0gRpK8eB_rwfpbuj8IFq3yaJX-8YUuiT0GMgS5OK_yzt2Gu_F0FFNCJ836dLRb8ZxBAPlgv0iGf_GplD_36Tf-ipQqbDusjpK7Mi1sI2Kg1f8h55ofz07fzkN5UOFb2IoUVXSwSbpP-brTXl0qYM2XoifvTSfqlM5aVp2MpmQm7B03zpMu1pDN_w1P0SylDn56Q" />
                <div className="absolute inset-0 flex items-end p-8">
                  <h4 className="text-xl font-headline font-bold text-white">Lumina Tech</h4>
                </div>
              </div>
              <div className="h-1/2 group relative overflow-hidden rounded-2xl bg-surface-container">
                <img alt="Editorial Layout" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjYiq4VcuZr0RWzfbobX3LJjklPhDqKJLOiGI5uSjD5mJMWM0UIw1OA89xZtxLJ0G1JV4mnBo6mzCsv9BSpsTuFL9jDFObfY2Ut9cSylkXs2QCItGPCx9J0aeew0fVrPziYur-7Gt73mOxiRT-8TpD_MLG8zZoIfhjY0DGZVwdgeohmZ2QoCoTvnR9B1WwYMFQqUsiDLujPMGeisy3dpGsccCrRM675lLyeo2IKdW8_J-nJDVVOHQBy-LCy9lbMGRmm4yCB73kBhU" />
                <div className="absolute inset-0 flex items-end p-8">
                  <h4 className="text-xl font-headline font-bold text-white">Vogue Digital</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Services Section */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-8">
              Our Process <br /> Is Our <span className="text-secondary-container">Product.</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              We follow a rigid yet adaptive framework that transforms abstract ideas into concrete visual assets. Every pixel serves a purpose; every color choice is backed by psychology.
            </p>
            <div className="space-y-8">
              {[
                { icon: 'travel_explore', title: 'Visual Discovery', desc: 'Auditing your market and defining the visual competitive edge.' },
                { icon: 'architecture', title: 'Brand Architecture', desc: 'Building the foundation of logos, typography, and color systems.' },
                { icon: 'auto_awesome', title: 'Digital Execution', desc: 'Deploying the identity across all touchpoints with pixel perfection.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary border border-outline-variant/10 group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-headline font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                  <h5 className="text-primary font-bold text-3xl mb-1">150+</h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Brands Launched</p>
                </div>
                <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/5">
                  <h5 className="text-secondary font-bold text-3xl mb-1">12</h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Design Awards</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/5">
                  <h5 className="text-tertiary font-bold text-3xl mb-1">98%</h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Client Retention</p>
                </div>
                <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                  <h5 className="text-white font-bold text-3xl mb-1">8yr</h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Market Presence</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-[80px]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center relative">
        <div className="bg-surface-container-low rounded-[3rem] p-16 md:p-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">Stand Out?</span>
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12 font-light">
              Let's collaborate on building a brand that defines your future, not just your current state.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full md:w-auto px-12 py-5 bg-white text-background font-bold rounded-xl hover:bg-primary transition-all duration-300">
                Book a Strategy Call
              </Link>
              <Link to="/contact" className="w-full md:w-auto px-12 py-5 border border-outline-variant/30 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
