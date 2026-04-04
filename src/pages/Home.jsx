import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const services = [
  { icon: 'verified', title: 'Social Media Verification', desc: 'Get the blue badge on all major platforms through official white-glove channels.', color: 'secondary-container', href: '/services/verification' },
  { icon: 'shield_person', title: 'Reputation Management', desc: 'Curate your online narrative and remove negative digital footprints effectively.', color: 'secondary-container', href: '/services/reputation' },
  { icon: 'lock_reset', title: 'Account Recovery', desc: 'Recover compromised or disabled high-value accounts with specialized support.', color: 'secondary-container', href: '/services/recovery' },
  { icon: 'alternate_email', title: 'Username Claim', desc: 'Acquire desired handles that are inactive or held by squatted accounts.', color: 'secondary-container', href: '/services/username' },
  { icon: 'brush', title: 'Branding', desc: 'Visual identity systems designed for the premium digital-first landscape.', color: 'secondary-container', href: '/services/branding' },
  { icon: 'code', title: 'Website Development', desc: 'High-performance, immersive web experiences tailored for conversion.', color: 'secondary-container', href: '/services/webdev' },
  { icon: 'newspaper', title: 'PR & Media', desc: 'Press placement and editorial coverage in top-tier global publications.', color: 'secondary-container', href: '/services/pr-media' },
  { icon: 'trending_up', title: 'Growth & Engagement', desc: 'Data-driven organic growth strategies to scale your digital influence.', color: 'secondary-container', href: '/services/growth' },
]

const platformIcons = [
  { name: 'Instagram', path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z' },
  { name: 'Facebook', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z' },
  { name: 'TikTok', path: 'M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z' },
  { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'Snapchat', path: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.92-.246.045-.022.09-.045.135-.06a.924.924 0 0 1 .365-.067c.27 0 .495.104.644.272a.794.794 0 0 1 .135.56c-.09.525-.645.93-1.468 1.094-.165.03-.345.06-.494.074-.09.016-.18.03-.27.06-.36.12-.495.42-.567.645a5.3 5.3 0 0 0 .255.47c.75 1.245 1.889 2.161 3.089 2.476.3.076.705.166.765.556.06.405-.33.555-.48.608a9.7 9.7 0 0 1-1.439.404c-.09.016-.12.089-.148.195l-.03.135c-.069.314-.15.664-.63.719-.15.019-.315-.03-.51-.082A6.484 6.484 0 0 0 17.8 17.2c-.3 0-.585.045-.825.135-.39.15-.735.405-1.095.69-.63.495-1.17.75-1.875.75-.015 0-.03 0-.045-.002-.015.002-.03.002-.06.002-.72 0-1.245-.255-1.89-.75-.36-.3-.72-.54-1.095-.69a2.892 2.892 0 0 0-.84-.135 6.2 6.2 0 0 0-1.395.165c-.21.06-.39.104-.54.082-.48-.06-.555-.405-.63-.72l-.03-.134c-.03-.105-.06-.18-.15-.195a9.421 9.421 0 0 1-1.44-.405c-.15-.06-.54-.195-.48-.6.06-.39.465-.48.765-.555 1.2-.315 2.34-1.23 3.09-2.476a5.27 5.27 0 0 0 .256-.47c-.075-.225-.21-.524-.57-.644a5.3 5.3 0 0 0-.27-.06 3.694 3.694 0 0 1-.495-.075c-.6-.12-1.17-.42-1.455-.886a.748.748 0 0 1-.12-.405c0-.3.195-.57.51-.69.045-.016.105-.044.165-.06.255-.104.585-.24.9-.24.045 0 .135.002.225.015.18.03.345.12.5.195.06.03.194.09.3.09.12 0 .24-.045.3-.075l-.006-.075c-.015-.18-.03-.36-.03-.54-.105-1.62-.225-3.645.3-4.846C7.453 1.07 10.806.793 11.793.793h.206z' },
  { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' },
  { name: 'Google', path: 'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' },
  { name: 'Trustpilot', path: 'M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73-1.64 7.03z' },
  { name: 'Twitch', path: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z' },
  { name: 'Pinterest', path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z' },
]

/* ---- Animated counter for stats ---- */
function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1800, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setCount(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [started, target])

  return <span ref={ref}>{count}{suffix}</span>
}

function PlatformIcon({ p, prefix, i }) {
  return (
    <span
      key={`${prefix}-${i}`}
      className="group/icon relative inline-flex items-center justify-center w-9 h-9 opacity-30 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(0,227,253,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0"
    >
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-slate-800/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover/icon:opacity-100 -translate-y-1 group-hover/icon:translate-y-0 transition-all duration-200 border border-white/10">
        {p.name}
      </span>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{ color: 'var(--icon-color)' }}>
        <path d={p.path} />
      </svg>
    </span>
  )
}

export default function Home() {
  return (
    <main>
      {/* ═══════ Hero Section ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-8 overflow-hidden bg-slate-950">
        {/* Ambient Background Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary-container/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/5 border border-secondary-container/10 mb-8 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span className="text-secondary-container text-xs font-bold uppercase tracking-widest leading-none">The Authority in Digital Presence</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.95] mb-6 max-w-5xl mx-auto fade-in-up [animation-delay:200ms]">
            Take Full Control <br className="hidden sm:block" />of Your <span className="text-accent !text-shadow-none relative inline-block">Digital Presence</span>
          </h1>

          <p className="text-on-surface-variant text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed fade-in-up [animation-delay:400ms] opacity-80">
            We help elite individuals and brands get verified, protect their digital assets, and build a powerful online reputation with absolute discretion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 fade-in-up [animation-delay:600ms]">
            <Link to="/services" className="w-full sm:w-auto btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="w-full sm:w-auto btn-secondary !bg-white/5 !border-white/10 hover:!border-secondary-container transition-all duration-300">
              Talk to an Agent
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 fade-in-up [animation-delay:800ms]">
            {[
              { value: 500, suffix: '+', label: 'Cases Handled' },
              { value: 98, suffix: '%', label: 'Success Rate' },
              { value: 24, suffix: '/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-display font-black text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Supported Platforms Marquee ═══════ */}
      <section className="py-8 bg-surface-container-low/20 overflow-hidden relative border-y border-white/5">
        <div className="flex flex-col gap-5">
          <p className="text-center text-[11px] font-bold text-slate-500 uppercase tracking-[0.35em]">Authorized Agency Partner Across Platforms</p>
          <div className="relative flex overflow-x-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--marquee-fade), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--marquee-fade), transparent)' }} />
            <div className="animate-scroll whitespace-nowrap flex items-center gap-10 md:gap-14 py-2">
              {platformIcons.map((p, i) => (
                <PlatformIcon key={`a-${i}`} p={p} prefix="a" i={i} />
              ))}
              {platformIcons.map((p, i) => (
                <PlatformIcon key={`b-${i}`} p={p} prefix="b" i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Services Grid ═══════ */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-tight mb-3 leading-tight">Elite Digital <span className="text-accent">Services</span></h2>
            <p className="text-on-surface-variant text-base sm:text-lg">Curated solutions for those who demand the highest standards in digital asset management and authority.</p>
          </div>
          <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-secondary-container text-sm font-bold hover:gap-3 transition-all duration-300 shrink-0">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.href}
              className={`group glass-card p-6 md:p-7 rounded-2xl border transition-all duration-500 flex flex-col justify-between cursor-pointer relative ${i === 0 ? 'border-secondary-container/30 shadow-lg shadow-secondary-container/5' : 'border-transparent hover:border-white/5'
                } hover:bg-surface-container-high hover:-translate-y-1`}
            >
              {i === 0 && (
                <span className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-widest text-secondary-container bg-secondary-container/10 px-2.5 py-1 rounded-full">Popular</span>
              )}
              <div>
                <div className={`w-11 h-11 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <span className={`material-symbols-outlined text-secondary-container text-xl`}>{s.icon}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">{s.desc}</p>
              </div>
              <span className="mt-5 flex items-center gap-2 text-secondary-container text-sm font-bold group-hover:gap-3 transition-all duration-300">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
        {/* Mobile "View All" link */}
        <div className="flex md:hidden justify-center mt-8">
          <Link to="/services" className="btn-secondary text-sm">
            View All Services
          </Link>
        </div>
      </section>

      {/* ═══════ Why Choose Section ═══════ */}
      <section className="py-16 md:py-20 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-4 tracking-tight">Built on Trust, Delivered with <span className="text-accent">Precision</span></h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary-container to-transparent" />
            </div>
            <p className="text-on-surface-variant text-base sm:text-lg font-light leading-relaxed">Our methodology combines internal network access with advanced digital forensics to ensure your online identity remains impenetrable and authentic.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: 'bolt', title: 'Fast Results', desc: 'Expedited processing through direct platform partnerships and streamlined workflows.' },
              { icon: 'analytics', title: 'High Success Rate', desc: 'Proven track record in complex cases where others have failed.' },
              { icon: 'verified_user', title: 'Trusted Process', desc: 'Fully transparent and secure engagement protocols at every step.' },
              { icon: 'privacy_tip', title: 'Confidential Handling', desc: 'Extreme discretion for high-profile clients with strictly enforced NDAs.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-6 rounded-2xl glass-card border border-white/5 hover:border-secondary-container/20 hover:bg-surface-container-high/50 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-4 border border-white/5 group-hover:scale-110 group-hover:border-secondary-container/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary-container text-xl">{item.icon}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Final CTA ═══════ */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl glass-card p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-container/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-4 tracking-tighter">Ready to Take Control of Your <span className="text-accent">Digital Presence?</span></h2>
            <p className="text-on-surface-variant text-base sm:text-lg mb-8 md:mb-10 max-w-2xl mx-auto opacity-80">Join the exclusive list of brands and creators who trust our agency with their digital legacy.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto btn-primary">
                Get Started
              </Link>
              <Link to="/services" className="w-full sm:w-auto btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
