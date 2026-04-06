import { Link } from 'react-router-dom'
import Typewriter from '../../components/Typewriter'

export default function Growth() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 py-24 md:py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#1a2027_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 -z-10" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary-container/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-secondary text-[13px] font-semibold tracking-wide">Growth & engagement</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-snug tracking-tighter text-white mb-6">
                Scalable growth. <br />
                <span className="text-accent">Real engagement.</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl min-h-[4em]">
                <Typewriter 
                  text="We don't just grow your numbers. We help you build real audience, real engagement, and real results."
                  speed={20}
                  delay={800}
                />
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold font-headline flex items-center gap-2 hover:bg-secondary-fixed transition-all hover:scale-105 shadow-xl">
                  Start Now →
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'verified', value: 'Real', label: 'Followers', color: 'text-secondary-container', mt: '' },
                  { icon: 'favorite', value: 'Higher', label: 'Engagement', color: 'text-tertiary', mt: 'mt-8' },
                  { icon: 'bolt', value: 'Better', label: 'Reach', color: 'text-primary', mt: '-mt-4' },
                  { icon: 'query_stats', value: 'Consistent', label: 'Growth', color: 'text-secondary-fixed-dim', mt: 'mt-4' },
                ].map((stat, i) => (
                  <div key={i} className={`bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 shadow-xl ${stat.mt}`}>
                    <span className={`material-symbols-outlined ${stat.color} mb-4 text-4xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                    <div className="text-4xl font-black text-white mb-1 font-headline">{stat.value}</div>
                    <div className="text-[11px] text-on-surface-variant font-medium tracking-wide font-label uppercase opacity-60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Bento Grid */}
      <section className="bg-surface-container-low py-16 md:py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-headline text-white mb-4">How we actually grow your account</h2>
            <div className="w-24 h-1 bg-secondary-container rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-10 relative overflow-hidden group border border-outline-variant/10">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold font-headline text-white mb-4">Get more people to your account</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">
                    We help you reach the right audience on TikTok, Instagram, and more — not just random views.
                  </p>
                </div>
                <div className="mt-12 flex gap-4">
                  {['TikTok', 'Instagram', 'Twitter'].map((tag, i) => (
                    <span key={i} className="text-[11px] font-semibold text-secondary tracking-wide">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-[160px] text-secondary-container">hub</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-container to-blue-900 rounded-2xl p-10 border border-white/10 shadow-2xl">
              <span className="material-symbols-outlined text-white text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <h3 className="text-2xl font-bold font-headline text-white mb-4">Build trust, not just numbers</h3>
              <p className="text-white/80 leading-relaxed">
                We make your account look real, credible, and worth following.
              </p>
            </div>
            <div className="bg-surface-container rounded-2xl p-10 border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
              <h3 className="text-2xl font-bold font-headline text-white mb-4">Know what’s working (and fix what’s not)</h3>
              <p className="text-on-surface-variant leading-relaxed">
                We track performance and adjust your strategy to keep growing consistently.
              </p>
            </div>
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
              <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img className="w-full h-full object-cover" alt="Analytics dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4K-rzgSXpvc5AeikXn16rB-DOxE150HXQ1fNcV0D3w_ZUm7iSG13NxYMWDo_2F798c4wgTZclkCSw_uDTUAgvELxB3Hx-mghWPjW0Lo9lCULqvxSUTE0lkFnter8T1RJoJEIla-dz5nnTiJN2KtxPdWhXzwMaX6dOjyNBsCNP2uiVrQAxuKDqpAp3YwbQSIVIVC-8DHkCxl26ihnTB6HmSu0jqrF2GZBkdiPy8iIHAfmY7GI0t_QHLiqmQRQB97TPSpCp8Y6dRs4" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-headline text-white mb-4">Turn views into real engagement</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  We optimize your content so people don’t just scroll — they follow, engage, and come back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-12">
              {[
                { icon: 'ads_click', title: 'Reach the right audience', desc: 'We help your content show up to people who are actually interested — not random viewers.', bg: 'bg-secondary-fixed-dim/20', color: 'text-secondary-container' },
                { icon: 'campaign', title: 'Create content that performs', desc: 'We guide your content so it gets more views, more engagement, and real growth.', bg: 'bg-primary-fixed-dim/20', color: 'text-primary' },
                { icon: 'psychology', title: 'Improve and scale faster', desc: 'We test, adjust, and improve your strategy continuously to keep your account growing.', bg: 'bg-tertiary-fixed-dim/20', color: 'text-tertiary' },
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
          <h2 className="text-4xl md:text-6xl font-black font-headline text-white mb-8 leading-snug">Ready to grow your account?</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12">
            We’ll help you grow faster, get real engagement, and turn your account into real results.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed px-12 py-5 rounded-2xl font-bold font-headline text-xl shadow-[0_0_25px_rgba(0,227,253,0.3)] hover:scale-[1.05] hover:translate-y-[-4px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all">
              Start Now →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
