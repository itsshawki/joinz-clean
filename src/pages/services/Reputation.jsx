import { Link } from 'react-router-dom'

export default function Reputation() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary-container/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed-dim/10 border border-secondary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-secondary">Expert Protection</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.1] mb-8 tracking-tighter text-white">
              Reputation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-primary">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Take control of your brand's digital narrative. We protect your image, suppress negative content, and amplify the positive stories that define your success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition-colors">
                Secure Your Brand
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-xl font-bold border border-outline-variant hover:bg-surface-container transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-container to-primary-container rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-surface-container rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-outline-variant/20">
              <img
                alt="Abstract 3D visualization of digital nodes and connections in cyan and deep blue hues representing data integrity"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwtEGAiDNeKXUbAtgjb5whzopTvF80jZEe6FSzhJBGCATKwvQFQ3lrTU0nKIq0-IRwTPEJdK2-Oa5jRV82kr1OWCTyyxPqYePimlrokB64l01z5eeJxHjlsCQ64CgHLKFfS6xA743DcN68IpdwLa1VzcKOvvalG3LC5WeTmmr7n0BqNh6CVO8lrAc_qA0Fai8HEAzsPT69A0dT6c1qicYzlpceNwQ0Ccw74Twta4NAghqjYFmWnW4wqG5XvwFby2pYMquBmwrutbw"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <div className="text-xs text-secondary uppercase font-bold tracking-widest mb-1">Recovery Rate</div>
                  <div className="text-2xl font-black text-white font-headline tracking-tighter">98.4%</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 mb-12 md:mb-0 sticky top-32">
              <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-white mb-6">
                Why Digital <br />Reputation Matters
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                In a hyper-connected world, your search results are your first impression. We ensure it's a reflection of your true value, not an outdated narrative.
              </p>
              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">monitoring</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Real-time Monitoring</h4>
                    <p className="text-sm text-on-surface-variant">We track every mention across the web, from social media to press releases.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">visibility_off</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Strategic Suppression</h4>
                    <p className="text-sm text-on-surface-variant">Push unwanted content to the second page of search results and beyond.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 gap-6">
              {[
                { num: '01', icon: 'policy', title: 'Crisis Management', desc: 'Rapid response strategies to mitigate damage during active PR crises. We handle the noise while you focus on the solution.', offset: '' },
                { num: '02', icon: 'star', title: 'Review Engineering', desc: 'Cultivate a 5-star presence by automating customer feedback loops and managing negative reviews with professional diplomacy.', offset: 'translate-y-4' },
                { num: '03', icon: 'newspaper', title: 'Positive Content Promotion', desc: 'We create and rank high-authority assets like guest posts, interviews, and professional profiles to dominate your search landscape.', offset: 'translate-y-8' },
              ].map((card, i) => (
                <div key={i} className={`glass-card p-10 rounded-2xl hover:bg-surface-container transition-all group ${card.offset}`}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-5xl font-black text-outline/10 group-hover:text-secondary-container/20 transition-colors">{card.num}</span>
                    <span className="material-symbols-outlined text-secondary-container text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-headline">{card.title}</h3>
                  <p className="text-on-surface-variant">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-black font-headline tracking-tighter text-white mb-4 uppercase">Advanced Analytics</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Full transparency into your reputation growth with our proprietary tracking dashboard.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'SENTIMENT', value: '+42%', sub: 'Positive Shift' },
            { label: 'VISIBILITY', value: 'Top 3', sub: 'SERP Placement' },
            { label: 'REMOVALS', value: '124', sub: 'Negative Links' },
            { label: 'REACH', value: '1.2M', sub: 'Positive Impressions' },
          ].map((stat, i) => (
            <div key={i} className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 flex flex-col items-center text-center">
              <div className="mb-4 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-secondary-fixed-dim/10 text-secondary-fixed-dim font-bold text-xs tracking-tighter">
                {stat.label}
              </div>
              <div className="text-4xl font-black text-white font-headline mb-2">{stat.value}</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-24 flex flex-col items-center text-center">
            <div className="absolute inset-0 z-0">
              <img alt="Deep dark background with subtle cyan light streaks" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAxc_Vw5HYYY3hZ8fheFswYc1gwHfqXou1g-0aVN3W23q9TJqbBtrI7voTiSYpANtt6TqGAY7erP4Ck1Gb5ghu3GB2wtLminkCq6qrOoEaF61HxA8TR3NHHehEtQYqfUMkwziSrhZG4OJcEf4oKSBr1WO9_gemJsICvEIeGu_xpxRx6LzHMutRn3D6_3TE9cpbNBgozMitLki_-nobDlvVIe9dxzaFDiK7ihxfTU_JE3a_CMBtJ4JcudQqceoZ7cGp35xeD0DSwug" />
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-black font-headline tracking-tighter text-white mb-8">Ready to define your narrative?</h2>
              <p className="text-xl text-on-surface-variant mb-12">Don't let others tell your story. Partner with Joinz Agency to build a legacy of trust and excellence.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(0,227,253,0.15)]">
                  Start Your Consultation
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
                  Request Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
