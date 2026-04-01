import { Link } from 'react-router-dom'

export default function PrMedia() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-container/10 via-transparent to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/20 text-secondary mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest font-label">Media & Press Coverage</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter mb-8 leading-[0.9]" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Get Your Brand <span className="text-accent">Seen.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We help your brand get featured on trusted platforms, so people see you as credible and take you seriously.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/10 shadow-2xl relative group">
              <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Press conference" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9bSXUQgGxeRsDlAKRR5DlqBMmvxNuY6OCFNsOu2D55lCNwQbkqTOZj4YAedh4gpHkjLVu6TDUUARLq62ZK8o9dBpbm34ohyujeBkQHQjbxzyvRS5qxqSf5bhZ4tcE81_iDybevo0UfDHFe_0hw5rMIn88RdqYRLoqKDo6M76LsrPvmlXQhwwMKZdH1mhhYsawAP75AcG5qiX13ij72NZkRXHGEn3xI7bQOcTFwtWdvgiqoUpdMxbjDp-wlN2H3bTz6yI86PPpGqs" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container p-6 rounded-xl border border-outline-variant/20 shadow-xl shadow-[0_0_40px_-10px_rgba(0,227,253,0.3)] max-w-[240px]">
              <div className="flex items-center gap-4 mb-2">
                <span className="material-symbols-outlined text-secondary-container">verified</span>
                <span className="font-bold text-sm tracking-tight uppercase font-headline">Verified Authority</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">Get featured on platforms like Forbes, TechCrunch, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="sticky top-40">
              <h2 className="text-4xl font-extrabold font-headline mb-6 uppercase tracking-tight">How We Build Your Presence</h2>
              <p className="text-on-surface-variant leading-loose mb-12">
                PR today is about getting the right people to talk about you. We focus on real stories that make your brand stand out and get noticed.
              </p>
              <div className="flex flex-col gap-8">
                {[
                  { icon: 'newspaper', title: 'Media Relations', desc: 'We connect you with journalists and platforms that actually matter for your brand.' },
                  { icon: 'campaign', title: 'Strategic Pitching', desc: 'We create the right story and pitch it in a way that gets attention.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {[
                { icon: 'auto_graph', title: 'Reputation Management', desc: "We help protect your brand and handle any negative situations the right way.", offset: '' },
                { icon: 'psychology', title: 'Thought Leadership', desc: 'We help you build a strong personal brand and become a trusted voice in your field.', offset: 'mt-12' },
                { icon: 'cast_connected', title: 'Crisis Communication', desc: 'If something goes wrong, we step in quickly and help you control the situation.', offset: 'mt-12' },
              ].map((card, i) => (
                <div key={i} className={`p-8 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-secondary/30 transition-all group ${card.offset}`}>
                  <div className="text-secondary-container mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-5xl">{card.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4">{card.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Bento */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black font-headline mb-16 text-center">Core <span className="text-secondary-container">Capabilities.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 row-span-1 bg-surface-container p-8 rounded-2xl border border-outline-variant/10 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 font-headline">Global Media Network</h3>
                <p className="text-on-surface-variant max-w-md">Leverage our established relationships with tier-1 media outlets across North America, Europe, and Asia-Pacific.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-full -z-0">
                <img className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" alt="Global connections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrM2cceRiySPFbUlR1qKCNir3CrDcAQE9Y7OSYUX-_nT_VO76Q9BKfIgobb4ZPx6k5tLWYVwTWVC9RVJC3s0piTofexSwnybIcIKC6jblX5NZW5JldqUHxLNxUPBwXVD5C-xn7PGYoBKz2FlFJ2WRdIHY1tUhToEEKhkXUiQ1Oh9V3tiAzdbxL50QkCJtvQX2GC7c8itF7N7L-hlBhxn9KIG3NpJ3NGoiIywW1lL2_7PDU-3t6zp-migXz8vlCAR_Bqsz9Cua-T3g" />
              </div>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 flex flex-col justify-end group">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">event_note</span>
              <h3 className="text-xl font-bold mb-2 font-headline">Event PR</h3>
              <p className="text-sm text-on-surface-variant">Maximizing impact at major trade shows, product launches, and conferences.</p>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 flex flex-col justify-between group">
              <h3 className="text-xl font-bold font-headline">Digital PR & SEO</h3>
              <p className="text-sm text-on-surface-variant mb-4">Backlink strategy integrated with high-authority media placements to boost organic search rankings.</p>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-secondary-container w-3/4" />
              </div>
            </div>
            <div className="md:col-span-2 bg-secondary-container p-10 md:p-14 rounded-2xl border border-outline-variant/10 flex items-center text-on-secondary-container">
              <div className="max-w-xl">
                <h3 className="text-3xl font-extrabold font-headline mb-4 tracking-wide">Our Guarantee</h3>
                <p className="text-lg font-medium opacity-90 leading-relaxed">
                  We focus on getting real results, not just promises. If we don’t secure strong media coverage, we keep working until we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-32 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 relative">
              <div className="absolute -inset-10 bg-secondary-container/20 blur-[100px] rounded-full opacity-50" />
              <div className="relative z-10 aspect-video md:aspect-square w-full rounded-3xl bg-gradient-to-br from-secondary-container/20 to-primary-container/10 border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,227,253,0.15)_0%,transparent_70%)]" />
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Center Icon: Reach */}
                  <span className="material-symbols-outlined text-7xl md:text-8xl text-[#00e3fd] opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(0,227,253,0.6)] transition-all duration-700 select-none z-10" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                    settings_input_antenna
                  </span>
                  
                  {/* Surrounding Icons */}
                  <span className="absolute top-1/4 left-1/4 material-symbols-outlined text-4xl text-[#00e3fd]/60 group-hover:opacity-100 animate-float-slow select-none transition-all duration-700" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                    newspaper
                  </span>
                  <span className="absolute bottom-1/4 right-1/4 material-symbols-outlined text-4xl text-[#00e3fd]/60 group-hover:opacity-100 animate-float transition-all duration-700 select-none" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                    campaign
                  </span>
                  <span className="absolute top-1/3 right-1/4 material-symbols-outlined text-3xl text-[#00e3fd]/60 group-hover:opacity-100 animate-pulse transition-all duration-700 select-none" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                    verified
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
            <div className="flex-1">
              <span className="text-primary font-bold tracking-widest uppercase text-xs font-label">REAL CLIENT RESULT</span>
              <h2 className="text-4xl md:text-5xl font-black font-headline mt-4 mb-6 leading-tight">Real Results From Our Recent Clients.</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                We recently helped a client strengthen their online presence through targeted media placements and strategic visibility.<br /><br />
                Within a few months, their brand became easier to find, more trusted, and more recognized by their audience.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black text-white font-headline">15+</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest font-label">Media Placements</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white font-headline">2–8</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest font-label">Weeks Average Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
