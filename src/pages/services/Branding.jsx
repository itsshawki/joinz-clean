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
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-snug mb-8">
              Branding <br />
              <span className="text-accent">& Design</span>
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg md:text-2xl max-w-2xl leading-relaxed font-light">
              We don't just design logos. <br />
              We build brands people actually remember.
            </p>
          </div>
          <div className="md:w-1/3 pt-12">
            <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">brush</span>
              </div>
              <h3 className="text-white font-headline font-bold text-xl mb-4">The Aesthetic Standard</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Clean design. Clear message. <br />
                That's what makes a brand work.
              </p>

            </div>
          </div>
        </div>
      </section>



      {/* Process & Services Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-8">
              Our Process <br /> Is Our <span className="text-secondary-container">Product.</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              We keep things simple. <br />
              Understand your idea → build it right → make it stand out.
            </p>
            <div className="space-y-8">
              {[
                { icon: 'travel_explore', title: 'Understanding Your Brand', desc: 'We figure out what makes you different — and what people should notice first.' },
                { icon: 'architecture', title: 'Building Your Look', desc: 'We design how your brand actually looks and feels — simple and clear.' },
                { icon: 'auto_awesome', title: 'Putting It Live', desc: 'We apply everything across your pages so it actually works in real life.' },
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
                  <h5 className="text-primary font-bold text-3xl mb-1">40+</h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Projects Delivered</p>
                </div>
                <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/5">
                  <h5 className="text-secondary font-bold text-3xl mb-1">6+</h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Industries Served</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/5">
                  <h5 className="text-tertiary font-bold text-3xl mb-1">98%</h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Most Clients Come Back</p>
                </div>
                <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                  <h5 className="text-white font-bold text-3xl mb-1">Direct</h5>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Real Work, Not Ads</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-[80px]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 md:py-20 text-center relative">
        <div className="bg-surface-container-low rounded-[3rem] p-16 md:p-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-headline font-extrabold tracking-tighter mb-8 leading-snug">
              <span className="text-white">Ready to </span>
              <span 
                className="bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] bg-clip-text"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Stand Out?
              </span>
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              If you’re serious about your brand, <br />
              we’ll make sure people take it seriously too.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="w-full md:w-auto px-16 py-6 bg-white text-background text-xl font-black rounded-2xl hover:bg-primary hover:scale-105 transition-all duration-500 shadow-2xl">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
