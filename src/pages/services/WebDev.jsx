import { Link } from 'react-router-dom'
import Typewriter from '../../components/Typewriter'

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
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-snug text-white">
              Websites That <br /> <span className="text-accent">Actually Work.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed min-h-[3em]">
              <Typewriter 
                text="We build fast, clean websites that help your business look better and get more customers."
                speed={20}
                delay={800}
              />
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed px-10 py-5 rounded-2xl font-headline font-black text-xl shadow-[0_0_25px_rgba(0,227,253,0.3)] hover:scale-[1.05] hover:translate-y-[-4px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all">
                Start Your Project
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
      <section className="py-16 md:py-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight leading-snug">Built to Be Fast, Simple, and Reliable</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">We build websites that load fast, feel smooth, and work perfectly on all devices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-10 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 group-hover:scale-110 transition-transform block">rocket_launch</span>
              <h3 className="text-3xl font-headline font-bold text-white mb-4">Fast Loading Websites</h3>
              <p className="text-on-surface-variant text-lg mb-8 max-w-lg">Your website loads quickly everywhere, so visitors stay longer and don’t leave.</p>
              <div className="flex gap-4">
                {['Next.js', 'Vercel', 'Rust'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-xs font-label uppercase tracking-widest text-secondary">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-surface-container rounded-2xl p-10 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 group-hover:scale-110 transition-transform block">security</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">Secure by Default</h3>
              <p className="text-on-surface-variant leading-relaxed">We make sure your website is safe and protected from day one.</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-10 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 group-hover:scale-110 transition-transform block">responsive_layout</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">Looks Good Everywhere</h3>
              <p className="text-on-surface-variant leading-relaxed">Your site works perfectly on mobile, tablet, and desktop.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-10 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 group-hover:scale-110 transition-transform block">auto_awesome</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-4">Grows With You</h3>
                <p className="text-on-surface-variant text-lg">Your website is built to handle more traffic as your business grows.</p>
              </div>
              <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                <img className="w-full h-full object-cover" alt="Code on monitor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXzFOUmYB6RshJ8TyHSJxqs-FeepX8kcjvTrhy8dCGdy9foLk9h5Z51cgOe-BqObAbxONxBwU7B2AiBd-LcTA_YiV6KiefsfTC88iaokOEsoRY34VORnqymGnWxIBOHeIDv7_S9zvGlCen12ilVoffsTfORRLwmQyBQ60L4wqJipqH-_7bD_Qj_pGdkmIbgrobJLI4jWedGVcTBtykWdCz7cVik3VmmWAIwwnd_eUEMixy0hfQfMrLgdNaPiSCbVsqfK0CFXu6yg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight leading-snug">How We Work</h2>
              <p className="text-on-surface-variant text-lg max-w-xl">A simple step-by-step process to get your website live and ready for real results.</p>
            </div>
            <div className="text-right">
              <span className="text-7xl font-headline font-black text-outline/10">01—04</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-outline-variant/20 mt-6" />
            {[
              { num: 1, title: 'Understanding Your Business', desc: 'We start by understanding your business, your goals, and what you actually need.' },
              { num: 2, title: 'Design & Setup', desc: 'We design your website and take care of the basics like your domain, hosting, and business email setup.' },
              { num: 3, title: 'Building Your Website', desc: 'We build your website to be fast, clean, and easy to use on all devices.' },
              { num: 4, title: 'Launch & Go Live', desc: 'We test everything, connect your domain, and launch your website ready for customers.' },
            ].map((step, i) => (
              <div key={i} className="space-y-6 pt-12 relative">
                <div className="absolute top-0 left-0 w-12 h-12 bg-[#0f172a] opacity-70 group-hover:opacity-100 rounded-full border border-secondary/30 flex items-center justify-center text-white font-bold -mt-6">{step.num}</div>
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
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tighter leading-snug">Ready to get your website live?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">We’ll handle everything — design, domain, hosting, and launch — so you can focus on your business.</p>
            <div className="pt-8">
              <Link to="/contact" className="inline-block bg-white text-slate-950 px-10 py-5 rounded-xl font-headline font-black text-xl hover:scale-105 transition-transform">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
