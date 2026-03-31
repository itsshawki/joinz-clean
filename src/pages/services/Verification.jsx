import { Link } from 'react-router-dom'

const platformIcons = [
  { name: 'Instagram', path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z' },
  { name: 'Facebook', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z' },
  { name: 'TikTok', path: 'M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z' },
  { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'Snapchat', path: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.92-.246.045-.022.09-.045.135-.06a.924.924 0 0 1 .365-.067c.27 0 .495.104.644.272a.794.794 0 0 1 .135.56c-.09.525-.645.93-1.468 1.094-.165.03-.345.06-.494.074-.09.016-.18.03-.27.06-.36.12-.495.42-.567.645a5.3 5.3 0 0 0 .255.47c.75 1.245 1.889 2.161 3.089 2.476.3.076.705.166.765.556.06.405-.33.555-.48.608a9.7 9.7 0 0 1-1.439.404c-.09.016-.12.089-.148.195l-.03.135c-.069.314-.15.664-.63.719-.15.019-.315-.03-.51-.082A6.484 6.484 0 0 0 17.8 17.2c-.3 0-.585.045-.825.135-.39.15-.735.405-1.095.69-.63.495-1.17.75-1.875.75-.015 0-.03 0-.045-.002-.015.002-.03.002-.06.002-.72 0-1.245-.255-1.89-.75-.36-.3-.72-.54-1.095-.69a2.892 2.892 0 0 0-.84-.135 6.2 6.2 0 0 0-1.395.165c-.21.06-.39.104-.54.082-.48-.06-.555-.405-.63-.72l-.03-.134c-.03-.105-.06-.18-.15-.195a9.421 9.421 0 0 1-1.44-.405c-.15-.06-.54-.195-.48-.6.06-.39.465-.48.765-.555 1.2-.315 2.34-1.23 3.09-2.476a5.27 5.27 0 0 0 .256-.47c-.075-.225-.21-.524-.57-.644a5.3 5.3 0 0 0-.27-.06 3.694 3.694 0 0 1-.495-.075c-.6-.12-1.17-.42-1.455-.886a.748.748 0 0 1-.12-.405c0-.3.195-.57.51-.69.045-.016.105-.044.165-.06.255-.104.585-.24.9-.24.045 0 .135.002.225.015.18.03.345.12.5.195.06.03.194.09.3.09.12 0 .24-.045.3-.075l-.006-.075c-.015-.18-.03-.36-.03-.54-.105-1.62-.225-3.645.3-4.846C7.453 1.07 10.806.793 11.793.793h.206z' },
]

function PlatformIcon({ p, prefix, i }) {
  return (
    <span
      key={`${prefix}-${i}`}
      className="group/icon relative inline-flex items-center justify-center w-9 h-9 opacity-30 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(0,227,253,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
        <path d={p.path} />
      </svg>
    </span>
  )
}

export default function Verification() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary-container/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-outline-variant/15">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse" />
              <span className="text-secondary text-xs font-bold tracking-widest uppercase font-label">Official Partner Access</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-[0.9] text-white">
              Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Verification</span>
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-lg font-body">
              Secure the coveted blue badge across all major platforms to establish unmatched authority and trust.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed rounded-xl font-bold text-lg shadow-[0_0_25px_rgba(0,227,253,0.2)] hover:scale-[1.03] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all active:scale-95">
                Get Verified Now
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-square shadow-2xl bg-transparent">
              <img
                alt="Verification Badge Illustration"
                className="w-full h-full object-cover cyan-glow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD54t0L400LFM44xEP_AokvcJh0go0go5J8DzeCfER6bmlYfdPwwDA6W27QdGbqC6DVeutEZCzAzj_dtj7uAWTy_S-Sdd9ZiU8Gn2Rkxp7ccLYt8rtUa29OKmpp52Yw7HecomsyEJ4v1DNucwCIxlXlZ-AtMnNXRnyY78A3-GHqjmqc6ZwCABTj5Nes0A199N_E1ZP-JhZpFvt2YruuVhbDh5PZziQ3hmOXrNRJUo7ZNuN-pixHKydIMLll0_Qoy-Z13X1ZDylG8s8"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-container/20 blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Supported Platforms Marquee */}
      <section className="py-12 bg-surface-container-low/20 overflow-hidden relative border-y border-white/5">
        <div className="relative flex overflow-x-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0e141a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0e141a] to-transparent z-10 pointer-events-none" />
          <div className="animate-scroll whitespace-nowrap flex items-center gap-12 md:gap-16 py-3 hover:[animation-play-state:paused]">
            {[...platformIcons, ...platformIcons, ...platformIcons, ...platformIcons].map((p, i) => (
              <PlatformIcon key={`s-${i}`} p={p} prefix="s" i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-headline mb-8 text-white leading-tight">
                The Strategic Edge of Authenticity
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg">
                <p>Verification is more than just a badge; it's a critical layer of protection and authority for your digital identity. Joinz Agency leverages direct platform partnerships to streamline the submission process for our elite clientele.</p>
                <p>We analyze your digital footprint to ensure it meets the rigorous standards set by Meta, Google, and ByteDance, maximizing your chances of successful verification on the first attempt.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: 'verified', title: 'Authority', desc: 'Instant credibility and trust for followers and business partners.' },
                { icon: 'security', title: 'Protection', desc: "Prevent impersonation and secure your brand's unique name." },
                { icon: 'trending_up', title: 'Visibility', desc: 'Increased search ranking and discoverability across platforms.' },
                { icon: 'bolt', title: 'Exclusive Features', desc: 'Access beta tools and advanced analytics reserved for verified users.' },
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-2xl bg-surface-container border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>{card.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-on-surface-variant">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Bento */}
      <section className="py-32 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black font-headline mb-4">Core Requirements</h2>
            <p className="text-on-surface-variant text-xl">What it takes to secure your blue checkmark.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-10 rounded-3xl bg-surface-container flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Press & Media Presence</h3>
                <p className="text-on-surface-variant text-lg max-w-md">Your profile must be notable. We help curate and identify significant media coverage from reputable sources to build your case.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity">
                <img alt="Media Coverage" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDymdhO2gJUjDLmfp4moxQ6vRxhMI8FgErhaVpjDqul6_MnQ-Wv576hTHOT9Nmfw-fWEgv-WvNc0_V6s0Z0sTSHAGyKLPiZGq3tgMWmNNTExI7V4_2kLr6TfS60sf50D9hKavAkU1Lb2Nkv4TO7gkI6VrO1eLcMO-zXPsoQqJei60iLfvhx3aBD7wln_U3HRt_6XCE8ToJMsLQLmi0X6FFdfEzBlplkRHsS_ieC8XYNGnChIayoNCMfJi8v_CBswkgPC71RXaI4F0" />
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-primary text-on-primary-container">
              <span className="material-symbols-outlined text-5xl mb-6">id_card</span>
              <h3 className="text-2xl font-bold mb-4">Authenticity</h3>
              <p className="text-sm font-medium">Must represent a real person, registered business, or entity. Government-issued ID or official documentation is required for all applications.</p>
            </div>
            <div className="p-10 rounded-3xl bg-surface-container-highest flex flex-col justify-center border border-outline-variant/20">
              <h3 className="text-2xl font-bold mb-4">Completeness</h3>
              <p className="text-on-surface-variant">Your account must be public and have a bio, profile photo, and at least one post.</p>
            </div>
            <div className="md:col-span-2 p-10 rounded-3xl bg-surface-container-highest border border-outline-variant/20">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Uniqueness</h3>
                  <p className="text-on-surface-variant text-lg">Your account must be the unique presence of the person or business it represents. Only one account per person or business may be verified.</p>
                </div>
                <div className="flex-none bg-background p-8 rounded-2xl">
                  <span className="material-symbols-outlined text-secondary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>fingerprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-black font-headline mb-4">The Verification Journey</h2>
            <p className="text-on-surface-variant text-xl">A white-glove approach to your digital legacy.</p>
          </div>
          <div className="space-y-4">
            {[
              { num: '01', title: 'Eligibility Audit', desc: 'We perform a deep-dive analysis of your current digital footprint, searching for press gaps, impersonation risks, and profile deficiencies that could lead to a rejection.' },
              { num: '02', title: 'Profile Optimization', desc: 'Our team handles the "packaging" of your profile—optimizing bios, links, and cross-platform consistency to meet the exact aesthetic and technical preferences of platform moderators.' },
              { num: '03', title: 'Direct Submission', desc: 'Utilizing our agency portals, we submit your application directly to our contacts at major platforms. This ensures your case is reviewed by a human expert rather than an automated algorithm.' },
              { num: '04', title: 'Ongoing Monitoring', desc: 'Once verified, we provide guidance on maintaining your status. We monitor for impersonators and manage the takedown of fake accounts to protect your blue checkmark.' },
            ].map((step, i) => (
              <div key={i} className="group relative p-12 rounded-3xl bg-surface-container-low hover:bg-surface-container transition-all duration-500 border border-transparent hover:border-outline-variant/20">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <span className="text-8xl font-black text-outline-variant/10 group-hover:text-primary/20 transition-colors font-headline">{step.num}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-on-surface-variant text-lg max-w-2xl">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-surface-container to-surface-container-high p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,227,253,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black font-headline mb-8 text-white">Ready to be <span className="text-secondary italic">Recognized?</span></h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Join the ranks of elite creators and brands. Our team is ready to audit your eligibility today.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-12 py-5 bg-white text-slate-950 rounded-2xl font-bold text-xl hover:scale-105 transition-transform active:scale-95">
                Get Verified Now
              </Link>
              <Link to="/contact" className="px-12 py-5 bg-surface-container-highest border border-outline-variant/30 text-white rounded-2xl font-bold text-xl hover:bg-surface-container transition-colors">
                Have Questions?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
