import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <main className="pt-32 pb-24 px-6">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
          <span className="text-secondary-container text-xs font-label tracking-widest uppercase">Curated Excellence</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">
          Elite Digital Services for <span className="text-accent">Authority & Growth</span>
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-[1.8]">
          Expert solutions to establish, protect, and amplify your digital authority across all major platforms.
        </p>
      </header>

      {/* Services Bento Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Social Media Verification - Most Popular */}
        <Link to="/services/verification" className="md:col-span-8 bg-surface-container rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border border-white/5 group hover:bg-surface-container-high transition-all duration-500 cyan-glow block relative overflow-hidden">
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-secondary-container/20 text-secondary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-secondary-container/20">Most Popular</span>
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <h3 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-white">Social Media Verification</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed text-lg">
              Get the blue badge you deserve. We handle the complex submission processes for Instagram, Facebook, TikTok, and X, leveraging high-tier media placements and agency connections.
            </p>
            <div className="flex gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-secondary/60">#Authority</span>
              <span className="text-xs font-bold tracking-widest uppercase text-secondary/60">#Trust</span>
              <span className="text-xs font-bold tracking-widest uppercase text-secondary/60">#Legacy</span>
            </div>
          </div>
          <div className="w-full md:w-2/5 aspect-square rounded-2xl overflow-hidden bg-background relative z-10 border border-white/5">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARoSJRqaOV8XzdhLAIrqN_5rkJ8UCfT8UbZb3YHeQLLhjwpWgaY0Cc9rWHoiLTe9PXGCEiuHihZ-eGyPjTCL8T94NqvEbm7nTkw1ZEgBGRLei1rlgT8x_WqnjlnvBSIVVxnnymEDOXasBBma4MzUf8paxjL-slMp--NfDdpGdhdzeMB8pqe4xPPWCE8M3d6jRtf8fUZboBa1A3Efk_pEAzbFt7gvBFak17O4UbV-j7d6Nqysq_dGBWD1hByvl7wSOBF-bg90pMvas" alt="Verification Badge" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </Link>

        {/* Reputation Management */}
        <Link to="/services/reputation" className="md:col-span-4 bg-surface-container rounded-3xl p-8 border border-white/5 group hover:bg-surface-container-high transition-all duration-500 block relative overflow-hidden">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-secondary-container mb-6 text-4xl block group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
            <h3 className="font-headline text-2xl font-bold mb-4 text-white">Reputation Management</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Control your digital narrative. We specialize in suppressing negative search results and promoting positive, high-authority content.
            </p>
          </div>
          <div className="mt-8 h-48 rounded-xl overflow-hidden border border-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwtEGAiDNeKXUbAtgjb5whzopTvF80jZEe6FSzhJBGCATKwvQFQ3lrTU0nKIq0-IRwTPEJdK2-Oa5jRV82kr1OWCTyyxPqYePimlrokB64l01z5eeJxHjlsCQ64CgHLKFfS6xA743DcN68IpdwLa1VzcKOvvalG3LC5WeTmmr7n0BqNh6CVO8lrAc_qA0Fai8HEAzsPT69A0dT6c1qicYzlpceNwQ0Ccw74Twta4NAghqjYFmWnW4wqG5XvwFby2pYMquBmwrutbw" alt="Reputation management abstract visualization" />
          </div>
        </Link>

        {/* Account Recovery */}
        <Link to="/services/recovery" className="md:col-span-4 bg-surface-container-low rounded-3xl p-8 border border-white/5 group hover:bg-surface-container transition-all duration-500 block relative overflow-hidden">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-secondary-container mb-6 text-4xl block group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
            <h3 className="font-headline text-2xl font-bold mb-4 text-white">Account Recovery</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Lost access to your valuable handles? Recovery through official portals for hacked or disabled high-value accounts.
            </p>
          </div>
          <div className="mt-8 h-48 rounded-xl overflow-hidden border border-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8QgocVApJ_Z4Bv3Npj7e5fwww4ERtlx-h7uKAN9EvQ39Q9Hl3o6ja3-WZXvELescRgJsHtF_IMYiX-vtxBnV1RmuPdpnMPqSNgCjikX6Fmir9iw1w2MHgz_iiFZbEFrVuaWZHynkTpGfmZGbjMEsBzzyyTkA_8RXI6sLKA5ZMaNsesnGNqO0vEV3JKz6fVP-JxPXx4vAS36vj57OWgPLhXFoLM338f4xxdZ626wE26D6kUNKEMiG579JO58jA0j4_ShQOKbHM6O8" alt="Recovery dashboard visualization" />
          </div>
        </Link>

        {/* Username Claim */}
        <Link to="/services/username" className="md:col-span-4 bg-surface-container rounded-3xl p-8 border border-white/5 group hover:bg-surface-container-high transition-all duration-500 block relative overflow-hidden">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-secondary-container mb-6 text-4xl block group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
            <h3 className="font-headline text-2xl font-bold mb-4 text-white">Username Claim</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Secure the identity that fits your brand. We facilitate the acquisition of inactive or squatted handles safely.
            </p>
          </div>
          <div className="mt-8 h-48 rounded-xl overflow-hidden border border-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByFJHV2PwDxKPZNQKkSlbWL5WEkuNptYtYXqhCKJvUSOd0khhF04wliHkwlnuLbh63MA0bGYOIhWv5DjAzq61jRZHUXhvozxKHoR2nKc6dptWmGPgCPxxlW43sLaeKGr9WTBtMQgUq2XBF0Mi6Sf63P0x1nloKKsO6V44L5F7Uplf3J0C8hZlhlaaFkjsOkc0kjwu7QZzT1yQZR8d6FJvGt9dVoXjO-1YSIPSGGtC8IDehVq-AAzcMmwenm2NMP25SDeK8COM4vII" alt="Cybersecurity visualization" />
          </div>
        </Link>

        {/* Growth & Engagement */}
        <Link to="/services/growth" className="md:col-span-4 bg-surface-container-low rounded-3xl p-8 border border-white/5 group hover:bg-surface-container transition-all duration-500 block relative overflow-hidden">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-secondary-container mb-6 text-4xl block group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            <h3 className="font-headline text-2xl font-bold mb-4 text-white">Growth &amp; Engagement</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Strategic organic growth campaigns designed to build real influence and high-retention engagement.
            </p>
          </div>
          <div className="mt-8 h-48 rounded-xl overflow-hidden border border-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC09I2Sst3r3PUt0SOdZeNbUm1--npefjdpa5R6v0nBWWSYtljkX17GdfYeNg0H_LpIZB5AEAtV5HmSn5Zx4rzhZV8Jep1tV1EpUsSztsSq2ailGa51y4x6xSGGjMYLxbH-4N6x6qiaVpDwAAc7ui_c8Qyz-vNoNf84UAjAubTpQ9D8ygJVsryQiAqMiOsMvCRjfArOigUJEh7Jg8RLg07AXOST-tHkZThMpIfJaIbbiX5rnswYGuRoMUaroGs_duRg4GwhBnm-Oc0" alt="Engagement analytics" />
          </div>
        </Link>

        {/* Graphic Design & Branding */}
        <Link to="/services/branding" className="md:col-span-6 bg-surface-container rounded-3xl p-8 border border-white/5 group hover:bg-surface-container-high transition-all duration-500 flex gap-8 overflow-hidden block">
          <div className="flex-1 relative z-10">
            <span className="material-symbols-outlined text-secondary-container mb-6 text-4xl block group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>brush</span>
            <h3 className="font-headline text-2xl font-bold mb-4 text-white">Graphic Design &amp; Branding</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Visual identities that command attention. From logo architecture to social media assets, we create cohesive design languages that define premium brands.
            </p>
          </div>
          <div className="hidden sm:block w-40 -mr-4 rounded-xl overflow-hidden border border-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 h-full">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7PhQJhaFm2nrD9MKDFQedK_y3V1iUUnhsm4mn9Os3vGphDLX3fI23k9U707RYePLtZdyDTO0wZbboQvGc-i-pCdkCC5Hk72Chh24L93dYhpHmwEiOoAgxYfkpoBDBQm2WxvQuw393KYlLu2jdWM-9Qw1ooLlEqjccWhSGJOqh4YFfwug-i9jfjGmfNVg8xf_jC8dMcvc1Jim1MJb8JFKyXSm_dGNG0wKeVH5pgOniLNzrcXHYfQGb4dWmPhO8yOPiWX8fpK1SkEQ" alt="Branding case study" />
          </div>
        </Link>

        {/* Website Development */}
        <Link to="/services/webdev" className="md:col-span-6 bg-surface-container rounded-3xl p-8 border border-white/5 group hover:bg-surface-container-high transition-all duration-500 flex gap-8 overflow-hidden block">
          <div className="flex-1 relative z-10">
            <span className="material-symbols-outlined text-secondary-container mb-6 text-4xl block group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
            <h3 className="font-headline text-2xl font-bold mb-4 text-white">Website Development</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              High-performance digital experiences. We build fast, responsive, and secure websites optimized for conversion and search engine dominance.
            </p>
          </div>
          <div className="hidden sm:block w-40 -mr-4 rounded-xl overflow-hidden border border-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 h-full">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEbKxxXKayvkjeOr9F8vb7MJ43tbhchqPuES4YrQLedwCt3pV1w8fwqpoKJNIxbp3E7YxKh0ufb3DZQbnrGmH2g5ve31mIbFvL1Pc5Ow6Ut5eJw1qXbWnRSmAk6TjLIlnpcCBmN3Ss05M0dTtfcflpzAcKl20Fp0B7q6pP8SAVWCLkFOUVpvMcZ9uRomGQSX_fY1MzAvpZL2vN4-QEfB1OhlrqHlf-TePVTrq7SQkhau3Dx4g9xw_lWYabkugNzx2x5ZUbiU9MCqI" alt="Development interface" />
          </div>
        </Link>

        {/* Press & Media Publishing */}
        <Link to="/services/pr-media" className="md:col-span-12 bg-gradient-to-br from-surface-container-low to-surface-container rounded-3xl p-10 md:p-14 border border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12 block relative overflow-hidden group">
          <div className="lg:w-1/2 relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-secondary-container text-4xl group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>newspaper</span>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">Press &amp; Media Publishing</h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
              Command the headlines. We provide guaranteed publishing on top-tier news outlets like Forbes, Bloomberg, Entrepreneur, and Yahoo Finance. Essential for authority building.
            </p>
            <div className="flex gap-6 flex-wrap">
              {['Forbes', 'Bloomberg', 'Yahoo News', 'Entrepreneur'].map((pub) => (
                <div key={pub} className="px-5 py-2.5 bg-white/5 rounded-lg border border-white/10 font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface-variant group-hover:border-secondary-container/40 group-hover:text-white transition-all duration-300">{pub}</div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-2/5 aspect-video md:aspect-auto md:h-64 rounded-2xl overflow-hidden border border-white/10 opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 relative">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9bSXUQgGxeRsDlAKRR5DlqBMmvxNuY6OCFNsOu2D55lCNwQbkqTOZj4YAedh4gpHkjLVu6TDUUARLq62ZK8o9dBpbm34ohyujeBkQHQjbxzyvRS5qxqSf5bhZ4tcE81_iDybevo0UfDHFe_0hw5rMIn88RdqYRLoqKDo6M76LsrPvmlXQhwwMKZdH1mhhYsawAP75AcG5qiX13ij72NZkRXHGEn3xI7bQOcTFwtWdvgiqoUpdMxbjDp-wlN2H3bTz6yI86PPpGqs" alt="Press release visualization" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </Link>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-24 text-center relative px-4">
        <div className="absolute inset-0 bg-secondary-container/10 blur-[100px] rounded-full opacity-50" />
        {/* Content Container (Card) */}
        <div className="relative z-10 bg-surface-container-low/40 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[2.5rem] shadow-2xl overflow-hidden group">
          {/* Decorative Gradient Overlay - Set to pointer-events-none to avoid blocking clicks */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-20">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let’s Build Your Digital Authority</h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Every digital journey is unique. Schedule a private consultation with our strategy team to identify the exact levers needed for your brand's growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="btn-primary min-w-[200px]">
                Get Started
              </Link>
              <Link to="/contact" className="btn-secondary min-w-[200px]">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
