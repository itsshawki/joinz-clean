import { Link } from 'react-router-dom'

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
              Elevate your digital presence with the ultimate mark of authenticity. We provide direct-to-platform verification for public figures, brands, and creators.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container rounded-xl font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(61,144,255,0.5)] transition-all active:scale-95">
                Get Verified Now
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-surface-container border border-outline-variant/20 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all">
                View Platforms
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

      {/* Marquee Platforms */}
      <section className="py-12 bg-surface-container-low/50">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-scroll">
            <div className="flex gap-12 items-center">
              {[
                { icon: 'photo_camera', name: 'Instagram' },
                { icon: 'video_library', name: 'TikTok' },
                { icon: 'social_leaderboard', name: 'Facebook' },
                { icon: 'close', name: 'X / Twitter' },
                { icon: 'smart_display', name: 'YouTube' },
                { icon: 'work', name: 'LinkedIn' },
                { icon: 'photo_camera', name: 'Instagram' },
                { icon: 'video_library', name: 'TikTok' },
                { icon: 'social_leaderboard', name: 'Facebook' },
                { icon: 'close', name: 'X / Twitter' },
                { icon: 'smart_display', name: 'YouTube' },
                { icon: 'work', name: 'LinkedIn' },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all flex-shrink-0">
                  <span className="material-symbols-outlined text-4xl">{p.icon}</span>
                  <span className="text-2xl font-bold font-headline">{p.name}</span>
                </div>
              ))}
            </div>
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
