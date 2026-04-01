import { Link } from 'react-router-dom'

export default function Recovery() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/20 text-secondary-fixed-dim text-xs font-bold tracking-widest uppercase">
                Account Recovery Specialist
              </div>
              <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter leading-[1.1]">
                Reclaim Your <span className="text-accent">Digital Legacy</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Locked out of your account? We help you get it back — fast, safely, and without the usual headaches.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Link to="/contact" className="bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed font-black px-10 py-4 rounded-xl shadow-[0_0_25px_rgba(0,227,253,0.2)] hover:scale-[1.03] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all">
                  Recover My Account
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-square max-w-md lg:max-w-none group">
              {/* Soft glow background */}
              <div className="absolute -inset-10 bg-secondary-container/20 blur-[100px] rounded-full opacity-50 transition-opacity group-hover:opacity-80" />
              
              {/* Premium Glass Container */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-secondary-container/10 to-primary-container/5 border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,227,253,0.15)_0%,transparent_70%)]" />
                
                {/* Icon Composition */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central Security Icon */}
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-700">
                    <span className="material-symbols-outlined text-9xl text-[#00e3fd] drop-shadow-[0_0_30px_rgba(0,227,253,0.6)] animate-pulse-slow font-light" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
                      lock
                    </span>
                    <div className="absolute inset-0 bg-[#00e3fd]/20 blur-3xl rounded-full -z-10" />
                  </div>

                  {/* Floating Contextual Icons */}
                  <span className="absolute top-1/4 left-1/4 material-symbols-outlined text-4xl text-[#00e3fd]/40 animate-float-slow transition-all duration-700" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
                    mail
                  </span>
                  <span className="absolute bottom-1/4 right-1/4 material-symbols-outlined text-4xl text-[#00e3fd]/40 animate-float transition-all duration-700" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
                    smartphone
                  </span>
                  <span className="absolute top-1/3 right-1/4 material-symbols-outlined text-3xl text-[#00e3fd]/40 animate-float transition-all duration-700" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
                    key
                  </span>
                  <span className="absolute bottom-1/3 left-1/4 material-symbols-outlined text-3xl text-[#00e3fd]/40 animate-float-slow transition-all duration-700" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
                    person
                  </span>
                </div>

                {/* Subtle finishing gradient */}
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Bento Grid */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 tracking-tight">How we help</h2>
            <p className="text-on-surface-variant text-lg">No matter how your account was lost, we know how to get it back.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-all group">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>lock_reset</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Hacked or Compromised</h3>
              <p className="text-on-surface-variant leading-relaxed">If someone else has taken over your account or changed your login info, we act quickly to secure it and get you back in control.</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-all group">
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Lost Login Details</h3>
              <p className="text-on-surface-variant leading-relaxed">Can’t access your email or lost your 2FA code? We help you bypass these hurdles and recover your credentials safely.</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-all group">
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Bypass ID Issues</h3>
              <p className="text-on-surface-variant leading-relaxed">If you’re stuck on identity verification steps that won’t accept your documents, we handle the appeals to get you cleared.</p>
            </div>
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-all group">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-headline font-bold mb-4">Wrongful Suspensions</h3>
                  <p className="text-on-surface-variant leading-relaxed">If your account was disabled or suspended by mistake, we use official channels to appeal the decision and restore your profile.</p>
                </div>
                <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden">
                  <img alt="Digital Security" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9xvcUQQDpKBezXN_rdq2lOB6J9TWzSo3cFnM9KUfkKb6Jz0vc6HzyMhZ4yB1swKPz44HacLXIgCpYhOHg0KWDQ34yOEshA8jCMqmn4sCEau7OLbbVbz-sYldUsj50XedXlcWXXIHpbIB37a8J9tCMeQyqX6SVUEkRe35evDEpSn_Oo7bSR9S8D7HIqVVaZdd-_qZR_P9WRNyPvswXAZj5XEKDWowor4wa8PhwmH1fZF-iTSgiyQXmyhAbfV_0lAEvgZfOKl8QHaQ" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <h2 className="text-5xl font-headline font-extrabold mb-8 tracking-tighter">Our Recovery <br /><span className="text-accent">Process</span></h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                A proven step-by-step process designed to recover your account as quickly and safely as possible.
              </p>
              <div className="p-8 rounded-2xl bg-surface-container-highest/30 backdrop-blur-md border border-white/10 shadow-[0_0_40px_-10px_rgba(0,227,253,0.3)] mt-10 mb-12 md:mt-0 md:mb-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div className="text-xl font-bold font-headline">Fast Turnaround</div>
                </div>
                <p className="text-on-surface-variant text-sm">We usually start working on your case within hours — not days.</p>
              </div>
            </div>
            <div className="space-y-16">
              {[
                { num: '01', title: 'Case Review', desc: 'We analyze exactly how your account was lost and identify the best recovery method for your specific situation.' },
                { num: '02', title: 'Identity Check', desc: 'We help you prepare the necessary identity documents to prove to the platform that you are the real owner.' },
                { num: '03', title: 'Expert Submission', desc: 'We handle all communication with platform support teams, ensuring your request is seen by a real specialist.' },
                { num: '04', title: 'Secure Handover', desc: 'Once your account is back, we perform a full security check to make sure it stays safe in the future.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-xl font-bold font-headline shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-all">{step.num}</div>
                    {i < 3 && <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent mt-4 opacity-30" />}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-headline font-bold mb-4">{step.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 relative overflow-hidden bg-surface-container text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6">Get your account back — starting today</h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">We handle everything for you. No stress, no confusion — just results.</p>
            <Link to="/contact" className="inline-block bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed font-black px-12 py-5 rounded-2xl shadow-[0_0_25px_rgba(0,227,253,0.2)] hover:scale-[1.03] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all">
              Start My Recovery
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
