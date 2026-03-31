import { Link } from 'react-router-dom'

export default function WebDev() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,227,253,0.15)_0%,transparent_70%)] -z-10" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-fixed-dim/10 border border-secondary-fixed-dim/20 text-secondary-fixed-dim text-sm font-label tracking-widest uppercase">
              Digital Craftsmanship
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-white">
              Next-Gen <br /> <span className="text-accent">Web Dev.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We build high-performance, accessible, and scalable digital solutions that transform user engagement into measurable business growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-[0_0_25px_rgba(0,227,253,0.2)] hover:scale-[1.03] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all">
                Start Your Project
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-xl border border-outline-variant/30 text-white font-headline font-bold text-lg hover:bg-white/5 transition-all">
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary-container/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-outline-variant/20 bg-surface-container">
              <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Modern website interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEbKxxXKayvkjeOr9F8vb7MJ43tbhchqPuES4YrQLedwCt3pV1w8fwqpoKJNIxbp3E7YxKh0ufb3DZQbnrGmH2g5ve31mIbFvL1Pc5Ow6Ut5eJw1qXbWnRSmAk6TjLIlnpcCBmN3Ss05M0dTtfcflpzAcKl20Fp0B7q6pP8SAVWCLkFOUVpvMcZ9uRomGQSX_fY1MzAvpZL2vN4-QEfB1OhlrqHlf-TePVTrq7SQkhau3Dx4g9xw_lWYabkugNzx2x5ZUbiU9MCqI" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">Engineered for Performance</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">Our development stack is optimized for speed, security, and the future of the web.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-10 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 group-hover:scale-110 transition-transform block">rocket_launch</span>
              <h3 className="text-3xl font-headline font-bold text-white mb-4">Ultra-Fast Infrastructure</h3>
              <p className="text-on-surface-variant text-lg mb-8 max-w-lg">We leverage edge computing and modern frameworks to ensure sub-second load times globally, boosting SEO and user retention.</p>
              <div className="flex gap-4">
                {['Next.js', 'Vercel', 'Rust'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-xs font-label uppercase tracking-widest text-secondary">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-surface-container rounded-2xl p-10 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 group-hover:scale-110 transition-transform block">security</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">Vault Security</h3>
              <p className="text-on-surface-variant leading-relaxed">Enterprise-grade security protocols integrated from the first line of code to deployment.</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-10 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 group-hover:scale-110 transition-transform block">responsive_layout</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">Adaptive UI</h3>
              <p className="text-on-surface-variant leading-relaxed">Flawless experiences across all devices, from ultra-wide monitors to mobile handhelds.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-10 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 group-hover:scale-110 transition-transform block">auto_awesome</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-4">Scalable Architecture</h3>
                <p className="text-on-surface-variant text-lg">Building for tomorrow. Our codebases are designed to grow with your business, supporting millions of users without friction.</p>
              </div>
              <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                <img className="w-full h-full object-cover" alt="Code on monitor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXzFOUmYB6RshJ8TyHSJxqs-FeepX8kcjvTrhy8dCGdy9foLk9h5Z51cgOe-BqObAbxONxBwU7B2AiBd-LcTA_YiV6KiefsfTC88iaokOEsoRY34VORnqymGnWxIBOHeIDv7_S9zvGlCen12ilVoffsTfORRLwmQyBQ60L4wqJipqH-_7bD_Qj_pGdkmIbgrobJLI4jWedGVcTBtykWdCz7cVik3VmmWAIwwnd_eUEMixy0hfQfMrLgdNaPiSCbVsqfK0CFXu6yg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">Our Workflow</h2>
              <p className="text-on-surface-variant text-lg max-w-xl">A transparent, data-driven approach to engineering digital excellence.</p>
            </div>
            <div className="text-right">
              <span className="text-7xl font-headline font-black text-outline/10">01—04</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-outline-variant/20 mt-6" />
            {[
              { num: 1, title: 'Strategy & Discovery', desc: 'Deep dive into your business goals, target audience, and technical requirements to build a solid roadmap.' },
              { num: 2, title: 'Design & Prototyping', desc: 'Translating strategy into high-fidelity UI/UX designs that prioritize user flow and brand identity.' },
              { num: 3, title: 'Engineering', desc: 'Agile development using the latest tech stacks, ensuring modularity, speed, and cross-browser stability.' },
              { num: 4, title: 'QA & Launch', desc: 'Rigorous testing cycles followed by a seamless deployment and 24/7 post-launch monitoring.' },
            ].map((step, i) => (
              <div key={i} className="space-y-6 pt-12 relative">
                <div className="absolute top-0 left-0 w-12 h-12 bg-surface-container rounded-full border border-secondary/30 flex items-center justify-center text-secondary font-bold -mt-6">{step.num}</div>
                <h4 className="text-xl font-headline font-bold text-white">{step.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 relative">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90" />
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" />
          <div className="relative p-12 md:p-20 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tighter">Ready to build the future?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Join the ranks of high-growth companies scaling their digital presence with Joinz.</p>
            <div className="pt-8">
              <Link to="/contact" className="inline-block bg-white text-slate-950 px-10 py-5 rounded-xl font-headline font-black text-xl hover:scale-105 transition-transform">
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
