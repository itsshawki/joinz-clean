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
                Specializing in professional account recovery for high-value social media assets. We handle the technicalities while you regain focus on your brand.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Link to="/contact" className="bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed font-bold px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(0,227,253,0.2)] hover:scale-[1.03] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all">
                  Start Recovery Process
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-square max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container/20 to-transparent rounded-3xl rotate-3" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_40px_-10px_rgba(0,227,253,0.3)]">
                <img alt="Recovery Dashboard" className="w-full h-full object-cover grayscale-[0.2]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8QgocVApJ_Z4Bv3Npj7e5fwww4ERtlx-h7uKAN9EvQ39Q9Hl3o6ja3-WZXvELescRgJsHtF_IMYiX-vtxBnV1RmuPdpnMPqSNgCjikX6Fmir9iw1w2MHgz_iiFZbEFrVuaWZHynkTpGfmZGbjMEsBzzyyTkA_8RXI6sLKA5ZMaNsesnGNqO0vEV3JKz6fVP-JxPXx4vAS36vj57OWgPLhXFoLM338f4xxdZ626wE26D6kUNKEMiG579JO58jA0j4_ShQOKbHM6O8" />
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
            <p className="text-on-surface-variant text-lg">Comprehensive solutions for the most complex recovery scenarios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-all group">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>lock_reset</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-all">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Compromised Assets</h3>
              <p className="text-on-surface-variant leading-relaxed">Swift intervention for accounts that have been compromised by unauthorized access or sophisticated phishing attacks. We secure the perimeter and purge intruders.</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-all group">
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Lost Credentials</h3>
              <p className="text-on-surface-variant leading-relaxed">Recover access when standard recovery methods fail, including legacy systems and lost 2FA tokens.</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-all group">
              <div className="mb-12">
                <span className="material-symbols-outlined text-4xl text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Verification Bias</h3>
              <p className="text-on-surface-variant leading-relaxed">Navigating complex automated verification systems that incorrectly flag legitimate identity documents.</p>
            </div>
            <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container border border-white/5 hover:bg-surface-container-high transition-all group">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-headline font-bold mb-4">Unjust Suspensions</h3>
                  <p className="text-on-surface-variant leading-relaxed">Appealing wrongful suspensions and policy strikes through official channels with expert legal and technical documentation.</p>
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
              <h2 className="text-5xl font-headline font-extrabold mb-8 tracking-tighter">Our Recovery <br /><span className="text-accent">Protocol</span></h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                A systematic, multi-layered approach developed through years of interaction with major platform security teams. No shortcuts, just results.
              </p>
              <div className="p-8 rounded-2xl bg-surface-container-highest/30 backdrop-blur-md border border-white/10 shadow-[0_0_40px_-10px_rgba(0,227,253,0.3)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div className="text-xl font-bold font-headline">Fastest Turnaround</div>
                </div>
                <p className="text-on-surface-variant text-sm">Most cases initiated within 12 hours of engagement.</p>
              </div>
            </div>
            <div className="space-y-16">
              {[
                { num: '01', title: 'Strategic Assessment', desc: 'We analyze the nature of the loss or compromise to identify the specific platform protocol required for recovery.' },
                { num: '02', title: 'Identity Verification', desc: 'Securing necessary legal and identifying documentation to form an airtight case for platform review boards.' },
                { num: '03', title: 'Official Submission', desc: 'We handle all correspondence through dedicated support channels, bypassing automated bots where possible.' },
                { num: '04', title: 'Handover & Security Audit', desc: 'Upon successful recovery, we perform a total security audit to ensure your account remains safe and future-proof.' },
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
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6">Ready to regain control?</h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">Don't let technical hurdles or platform bureaucracy keep you from your digital presence. Let our experts handle the heavy lifting.</p>
            <Link to="/contact" className="inline-block bg-gradient-to-r from-secondary-container to-primary-container text-on-primary-fixed font-black px-12 py-5 rounded-2xl shadow-[0_0_25px_rgba(0,227,253,0.2)] hover:scale-[1.03] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(0,227,253,0.6)] hover:brightness-[1.1] transition-all">
              CONTACT OUR RECOVERY TEAM
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
