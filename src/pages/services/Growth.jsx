import { Link } from 'react-router-dom'

export default function Growth() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#1a2027_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 -z-10" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary-container/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed-dim/10 border border-secondary-fixed-dim/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span className="text-secondary text-xs font-bold uppercase tracking-widest font-label">Growth & Engagement</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight tracking-tighter text-white mb-6">
                Scalable growth. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-primary">Deep engagement.</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                We help ambitious brands expand their reach and deepen customer relationships through data-driven strategies and creative performance marketing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold font-headline flex items-center gap-2 hover:bg-secondary-fixed transition-colors">
                  Start Your Journey
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-xl border border-outline-variant/30 font-bold font-headline hover:bg-white/5 transition-colors">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'trending_up', value: '140%', label: 'Avg. ROI Growth', color: 'text-secondary-container', mt: '' },
                  { icon: 'group_add', value: '2.4M', label: 'Users Engaged', color: 'text-tertiary', mt: 'mt-8' },
                  { icon: 'bolt', value: '0.4s', label: 'Lead Response', color: 'text-primary', mt: '-mt-4' },
                  { icon: 'query_stats', value: '92%', label: 'Retention Rate', color: 'text-secondary-fixed-dim', mt: 'mt-4' },
                ].map((stat, i) => (
                  <div key={i} className={`bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 shadow-xl ${stat.mt}`}>
                    <span className={`material-symbols-outlined ${stat.color} mb-4 text-4xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                    <div className="text-4xl font-black text-white mb-1 font-headline">{stat.value}</div>
                    <div className="text-sm text-on-surface-variant font-label uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Bento Grid */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold font-headline text-white mb-4">Our Growth Ecosystem</h2>
            <div className="w-24 h-1 bg-secondary-container rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-10 relative overflow-hidden group border border-outline-variant/10">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold font-headline text-white mb-4">Omnichannel Acquisition</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">
                    Strategic placement across search, social, and display networks using AI-driven audience modeling to ensure your message reaches the right person at the optimal moment.
                  </p>
                </div>
                <div className="mt-12 flex gap-4">
                  {['Search', 'Social', 'Programmatic'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-surface-variant/50 text-xs font-bold text-secondary font-label uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-[160px] text-secondary-container">hub</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-container to-blue-900 rounded-2xl p-10 border border-white/10 shadow-2xl">
              <span className="material-symbols-outlined text-white text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <h3 className="text-2xl font-bold font-headline text-white mb-4">Trust Framework</h3>
              <p className="text-white/80 leading-relaxed">
                Building long-term brand equity through transparent engagement and community building strategies.
              </p>
            </div>
            <div className="bg-surface-container rounded-2xl p-10 border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
              <h3 className="text-2xl font-bold font-headline text-white mb-4">Data Analytics</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Real-time reporting dashboards that turn raw numbers into actionable growth insights.
              </p>
            </div>
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
              <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img className="w-full h-full object-cover" alt="Analytics dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4K-rzgSXpvc5AeikXn16rB-DOxE150HXQ1fNcV0D3w_ZUm7iSG13NxYMWDo_2F798c4wgTZclkCSw_uDTUAgvELxB3Hx-mghWPjW0Lo9lCULqvxSUTE0lkFnter8T1RJoJEIla-dz5nnTiJN2KtxPdWhXzwMaX6dOjyNBsCNP2uiVrQAxuKDqpAp3YwbQSIVIVC-8DHkCxl26ihnTB6HmSu0jqrF2GZBkdiPy8iIHAfmY7GI0t_QHLiqmQRQB97TPSpCp8Y6dRs4" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-headline text-white mb-4">Behavioral Science</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  We leverage psychological triggers and behavioral mapping to optimize the user journey, increasing conversion rates and lifetime value (LTV).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-12">
              {[
                { icon: 'ads_click', title: 'Precision Targeting', desc: 'Micro-segmentation of audiences based on intent, interest, and behavioral history for maximum conversion.', bg: 'bg-secondary-fixed-dim/20', color: 'text-secondary-container' },
                { icon: 'campaign', title: 'Content Strategy', desc: 'Engagement-focused content that resonates with your core audience and encourages organic virality.', bg: 'bg-primary-fixed-dim/20', color: 'text-primary' },
                { icon: 'psychology', title: 'AI Optimization', desc: 'Continuous automated A/B testing and creative optimization powered by machine learning algorithms.', bg: 'bg-tertiary-fixed-dim/20', color: 'text-tertiary' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 font-headline">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary-container/20 to-transparent blur-3xl -z-10" />
            <img className="rounded-2xl shadow-2xl border border-outline-variant/20 grayscale contrast-125 hover:grayscale-0 transition-all duration-700" alt="Marketing performance metrics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC09I2Sst3r3PUt0SOdZeNbUm1--npefjdpa5R6v0nBWWSYtljkX17GdfYeNg0H_LpIZB5AEAtV5HmSn5Zx4rzhZV8Jep1tV1EpUsSztsSq2ailGa51y4x6xSGGjMYLxbH-4N6x6qiaVpDwAAc7ui_c8Qyz-vNoNf84UAjAubTpQ9D8ygJVsryQiAqMiOsMvCRjfArOigUJEh7Jg8RLg07AXOST-tHkZThMpIfJaIbbiX5rnswYGuRoMUaroGs_duRg4GwhBnm-Oc0" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 md:p-24 relative overflow-hidden bg-surface-container-high border border-outline-variant/10 text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-container to-transparent" />
          <h2 className="text-4xl md:text-6xl font-black font-headline text-white mb-8">Ready to amplify your presence?</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12">
            Join dozens of high-growth brands who have scaled their operations through our Engagement framework.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-gradient-to-r from-secondary-container to-primary text-on-primary-container px-10 py-5 rounded-2xl font-bold font-headline text-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all">
              Book a Strategy Session
            </Link>
            <Link to="/contact" className="bg-white/5 border border-outline-variant/30 text-white px-10 py-5 rounded-2xl font-bold font-headline text-lg hover:bg-white/10 transition-all">
              Explore Results
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
