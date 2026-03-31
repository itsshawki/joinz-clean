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
              <span className="text-xs font-bold uppercase tracking-widest font-label">Public Relations & Media</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter mb-8 leading-[0.9]" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Strategic <span className="text-accent">Visibility.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We bridge the gap between your brand and the world's leading publications, creating narrative authority that drives trust and scale.
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
              <p className="text-xs text-on-surface-variant leading-relaxed">Placement in Forbes, TechCrunch, and Bloomberg for our tier-1 partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="sticky top-40">
              <h2 className="text-4xl font-black font-headline mb-6 uppercase tracking-tighter">The Narrative Architecture</h2>
              <p className="text-on-surface-variant leading-loose mb-12">
                PR is no longer about sending out mass emails. It's about precision-guided storytelling that resonates with journalists and your target audience simultaneously. We don't just ask for attention; we earn it.
              </p>
              <div className="flex flex-col gap-8">
                {[
                  { icon: 'newspaper', title: 'Media Relations', desc: 'Direct access to editors and journalists across global tech, finance, and lifestyle publications.' },
                  { icon: 'campaign', title: 'Strategic Pitching', desc: 'Data-backed narrative development designed to fit current editorial trends and news cycles.' },
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
                { icon: 'auto_graph', title: 'Reputation Management', desc: "Protecting your brand's integrity in the digital landscape through proactive monitoring and strategic response frameworks.", offset: '' },
                { icon: 'psychology', title: 'Thought Leadership', desc: 'Positioning your executives as the definitive voices in their industry through guest columns and keynote opportunities.', offset: 'mt-12' },
                { icon: 'cast_connected', title: 'Crisis Communication', desc: 'Rapid-response strategies to mitigate risks and control the conversation when it matters most.', offset: 'mt-12' },
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
            <div className="md:col-span-2 bg-secondary-container p-8 rounded-2xl border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-center text-on-secondary-container">
              <div className="flex-1">
                <h3 className="text-3xl font-black font-headline mb-4 uppercase italic tracking-tighter">The Joinz Guarantee</h3>
                <p className="font-medium opacity-80">We guarantee visibility through our performance-based PR model. If we don't land the coverage, we don't stop working.</p>
              </div>
              <Link to="/contact" className="bg-on-secondary-container text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shrink-0">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-32 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              <img className="relative z-10 w-full h-auto rounded-xl shadow-2xl" alt="Case study laptop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6nA0borB6IzI_908dg-4oXqqaZWz8StgdxRQvBHVEzXIQ1uTnj1jzwiJIB95p1jWgVs7ePxIcQCMbddgPuQUN83F6KFaComwi7eOTwjO8UGqiGfw5WARTN4G_H20LdpvuQC45ixKnXd_ZAvADclPGSHdRQ2dOJbcBCFqD31eNu3kUtnohsoCuigzQsQ-x_B0l028VUYqRv2F6THB0JZbHdZB6gilZExxOsbf5s3B0ARYUFGdI9dnPAPfamXANqRxJohMhW8pa4ug" />
            </div>
            <div className="flex-1">
              <span className="text-primary font-bold tracking-widest uppercase text-xs font-label">Success Story</span>
              <h2 className="text-4xl md:text-5xl font-black font-headline mt-4 mb-6 leading-tight">120+ High Authority Placements in 6 Months.</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                For our recent FinTech client, we secured consecutive features in Forbes, TechCrunch, and VentureBeat, resulting in a 400% increase in inbound investor inquiries and a successful Series B round.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black text-white font-headline">40M+</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest font-label">Estimated Reach</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white font-headline">12.5k</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest font-label">Social Shares</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
