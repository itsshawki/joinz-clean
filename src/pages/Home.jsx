import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Typewriter from '../components/Typewriter'

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
  { name: 'Instagram', brandColor: '#E4405F', path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z' },
  { name: 'Facebook', brandColor: '#1877F2', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z' },
  { name: 'TikTok', brandColor: '#000000', path: 'M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z' },
  { name: 'X', brandColor: '#000000', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'YouTube', brandColor: '#FF0000', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'Snapchat', brandColor: '#FFFC00', path: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.92-.246.045-.022.09-.045.135-.06a.924.924 0 0 1 .365-.067c.27 0 .495.104.644.272a.794.794 0 0 1 .135.56c-.09.525-.645.93-1.468 1.094-.165.03-.345.06-.494.074-.09.016-.18.03-.27.06-.36.12-.495.42-.567.645a5.3 5.3 0 0 0 .255.47c.75 1.245 1.889 2.161 3.089 2.476.3.076.705.166.765.556.06.405-.33.555-.48.608a9.7 9.7 0 0 1-1.439.404c-.09.016-.12.089-.148.195l-.03.135c-.069.314-.15.664-.63.719-.15.019-.315-.03-.51-.082A6.484 6.484 0 0 0 17.8 17.2c-.3 0-.585.045-.825.135-.39.15-.735.405-1.095.69-.63.495-1.17.75-1.875.75-.015 0-.03 0-.045-.002-.015.002-.03.002-.06.002-.72 0-1.245-.255-1.89-.75-.36-.3-.72-.54-1.095-.69a2.892 2.892 0 0 0-.84-.135 6.2 6.2 0 0 0-1.395.165c-.21.06-.39.104-.54.082-.48-.06-.555-.405-.63-.72l-.03-.134c-.03-.105-.06-.18-.15-.195a9.421 9.421 0 0 1-1.44-.405c-.15-.06-.54-.195-.48-.6.06-.39.465-.48.765-.555 1.2-.315 2.34-1.23 3.09-2.476a5.27 5.27 0 0 0 .256-.47c-.075-.225-.21-.524-.57-.644a5.3 5.3 0 0 0-.27-.06 3.694 3.694 0 0 1-.495-.075c-.6-.12-1.17-.42-1.455-.886a.748.748 0 0 1-.12-.405c0-.3.195-.57.51-.69.045-.016.105-.044.165-.06.255-.104.585-.24.9-.24.045 0 .135.002.225.015.18.03.345.12.5.195.06.03.194.09.3.09.12 0 .24-.045.3-.075l-.006-.075c-.015-.18-.03-.36-.03-.54-.105-1.62-.225-3.645.3-4.846C7.453 1.07 10.806.793 11.793.793h.206z' },
  { name: 'LinkedIn', brandColor: '#0077B5', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' },
  { name: 'Google', brandColor: '#4285F4', path: 'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' },
  { name: 'Trustpilot', brandColor: '#00B67A', path: 'M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73-1.64 7.03z' },
  { name: 'Twitch', brandColor: '#9146FF', path: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z' },
  { name: 'Pinterest', brandColor: '#E60023', path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z' },
];

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      key={`${prefix}-${i}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/icon relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer flex-shrink-0 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1"
    >
      {/* Premium Hover Label */}
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-slate-600 text-[11px] font-medium tracking-tight whitespace-nowrap opacity-0 group-hover/icon:opacity-100 translate-y-2 group-hover/icon:translate-y-0 transition-all duration-300 ease-out">
        {p.name}
      </span>

      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ease-out"
        style={{ color: isHovered ? p.brandColor : '#94a3b8' }}
      >
        <path d={p.path} />
      </svg>
    </span>
  )
}

export default function Home() {
  return (
    <main>
      {/* ═══════ Hero Section ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-8 overflow-hidden bg-surface">
        {/* Ambient Background Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary-container/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <div className="mb-8 fade-in-up">
            <span className="text-accent text-[11px] sm:text-[12px] font-bold tracking-widest uppercase">The authority in digital presence</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 font-black tracking-tighter leading-[1.1] mb-6 max-w-5xl mx-auto fade-in-up [animation-delay:200ms]">
            Take Full Control <br className="hidden sm:block" />of Your <span className="text-accent relative inline-block">Digital Presence</span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed fade-in-up [animation-delay:400ms] min-h-[3em]">
            <Typewriter
              text="We help elite individuals and brands get verified, protect their digital assets, and build a powerful online reputation with absolute discretion."
              speed={20}
              delay={800}
            />
          </p>

          <div className="hidden sm:flex flex-row items-center justify-center mt-6 fade-in-up [animation-delay:600ms]">
            <Link to="/services" className="btn-primary px-12 py-5 text-xl">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ Services Grid ═══════ */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto scale-95 origin-top">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-gray-900 tracking-tight mb-3 leading-snug">Elite Digital <span className="text-accent">Services</span></h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-6"></div>
            <p className="text-gray-500 text-base sm:text-lg font-medium">Curated solutions for those who demand the highest standards in digital asset management and authority.</p>
          </div>
          <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-accent text-sm font-bold hover:gap-3 transition-all duration-300 shrink-0">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.href}
              className={`group bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-500 flex flex-col justify-between cursor-pointer relative shadow-md hover:shadow-2xl hover:border-accent/20 hover:-translate-y-2 overflow-hidden`}
            >
              {i === 0 && (
                <div className="absolute top-0 right-0 p-3">
                  <span className="px-3 py-1 bg-accent/10 text-[10px] font-black text-accent uppercase tracking-widest rounded-full">Popular</span>
                </div>
              )}
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-accent text-2xl font-bold">{s.icon}</span>
                </div>
                <h3 className="text-lg font-black font-headline text-gray-900 mb-3 leading-tight">{s.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3">{s.desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-accent text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
        {/* Mobile "View All" link */}
        <div className="flex md:hidden justify-center mt-12">
          <Link to="/services" className="w-full py-4 bg-gray-100 text-gray-900 font-black rounded-2xl flex items-center justify-center gap-2">
            View All Services <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ═══════ Why Choose Section ═══════ */}
      <section className="py-16 md:py-24 bg-surface-low/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-gray-900 mb-6 tracking-tight leading-tight">Built on Trust, Delivered with <span className="text-accent underline decoration-8 decoration-accent/10 underline-offset-8">Precision</span></h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
            </div>
            <p className="text-gray-500 text-base sm:text-lg font-medium leading-[1.8]">Our methodology combines internal network access with advanced digital forensics to ensure your online identity remains impenetrable and authentic.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: 'bolt', title: 'Fast Results', desc: 'Expedited processing through direct platform partnerships and streamlined workflows.' },
              { icon: 'analytics', title: 'High Success Rate', desc: 'Proven track record in complex cases where others have failed.' },
              { icon: 'verified_user', title: 'Trusted Process', desc: 'Fully transparent and secure engagement protocols at every step.' },
              { icon: 'privacy_tip', title: 'Confidential Handling', desc: 'Extreme discretion for high-profile clients with strictly enforced NDAs.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-8 rounded-3xl bg-white border border-gray-100 hover:border-accent/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-accent text-2xl font-bold">{item.icon}</span>
                </div>
                <h4 className="text-lg font-black font-headline text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Case Results */}
      <section className="py-16 md:py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline text-gray-900 mb-4 tracking-tight">Real Case Results</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-base sm:text-lg font-medium">Proven success stories from real clients who dominated their digital space.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              { name: 'Ahmed Amwell', username: '@ahmed_amwell', platform: 'TikTok', image: '/@ahmed_amwell.jpeg', link: 'https://www.tiktok.com/@ahmed_amwell', followers: '1.9M' },
              { name: 'Ibrahim Assad', username: '@ibrahim_assad', platform: 'TikTok', image: '/@ibrahim_assad.jpeg', link: 'https://www.tiktok.com/@ibrahim_assad', followers: '489.5K' },
              { name: 'غازي الذيابي', username: '@gzy', platform: 'TikTok', image: '/@gzy.jpeg', link: 'https://www.tiktok.com/@gzy', followers: '1.7M' },
              { name: 'د. سعود الشهري', username: '@s500s', platform: 'TikTok', image: '/@s500s.jpeg', link: 'https://www.tiktok.com/@s500s', followers: '1.1M' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${i * 100}ms` }}
                className="group relative rounded-3xl border border-gray-100 bg-white p-7 flex flex-col items-center text-center cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl shadow-md overflow-hidden"
              >
                <div className="relative mb-4 mt-2">
                  <div className="w-[64px] h-[64px] rounded-full p-[3px] bg-gradient-to-br from-accent to-primary group-hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-shadow duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-black font-headline text-gray-900 leading-snug transition-colors duration-300 mb-1">{item.name}</h3>
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="text-xs text-gray-500 font-bold tracking-tight">{item.username}</span>
                  <span className="material-symbols-outlined text-secondary text-[16px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl font-black font-headline text-gray-900 leading-none">{item.followers}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">followers</span>
                </div>
                <button className="w-full py-3 bg-[#fe2c55] hover:brightness-110 !text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">Follow</button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Trusted Section ═══════ */}
      <section className="py-20 md:py-24 bg-slate-50/80 border-t border-b border-slate-100/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 mb-4 tracking-tight">Trusted by brands across platforms</h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
              We help clients secure, grow, and protect their digital presence across major platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24 mb-20 fade-in-up [animation-delay:200ms]">
            {[
              { value: 500, suffix: '+', label: 'Cases Handled' },
              { value: 98, suffix: '%', label: 'Success Rate' },
              { value: 24, suffix: '/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-4xl md:text-5xl font-display font-semibold text-slate-800 tracking-tight">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-widest text-slate-400 uppercase">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="relative fade-in-up [animation-delay:400ms]">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-slate-50/80 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-slate-50/80 to-transparent" />

            <div className="relative pt-12 pb-8 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                <div className="flex gap-12 sm:gap-16 px-6">
                  {platformIcons.map((p, i) => (
                    <PlatformIcon key={`p1-${i}`} p={p} prefix="p1" i={i} />
                  ))}
                </div>
                <div className="flex gap-12 sm:gap-16 px-6">
                  {platformIcons.map((p, i) => (
                    <PlatformIcon key={`p2-${i}`} p={p} prefix="p2" i={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Final CTA ═══════ */}
      <section className="py-24 px-6 scale-95 md:scale-[0.98] origin-bottom bg-white">
        <div className="max-w-6xl mx-auto rounded-[3.5rem] bg-white p-12 md:p-24 text-center relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100">
          {/* Very subtle ambient depth for a premium look */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-container/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="px-5 py-2 bg-slate-50 rounded-full text-accent text-[11px] font-black uppercase tracking-[0.25em] mb-10 inline-block shadow-sm border border-slate-100">
              Join the Elite
            </span>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-black text-[#0f172a] mb-8 tracking-tighter leading-[1.05] max-w-4xl mx-auto">
              Ready to dominate your <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e3fd] to-[#2188ff]">digital space?</span>
            </h2>
            
            <p className="text-[#475569] text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the exclusive list of brands and creators who trust our agency with their digital legacy and authority.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto btn-primary px-12 py-5 text-lg shadow-[0_20px_40px_-10px_rgba(33,136,255,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(33,136,255,0.6)] hover:scale-105 transition-all duration-300">
                Secure Your Name
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
