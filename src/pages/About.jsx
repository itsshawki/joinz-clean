import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from '../components/Typewriter'

const CountUp = ({ target, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutQuint
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      const currentCount = Math.floor(easedProgress * target);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, target, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
};

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[520px] md:min-h-[580px] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary-container/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <div className="mb-8">
            <span className="text-secondary-container text-[13px] font-semibold tracking-wide">The network</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 max-w-4xl mx-auto leading-snug">
            Who <span className="text-accent">We Are</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed min-h-[4em]">
            <Typewriter
              text="We are the silent partners behind the worlds leading digital profiles. Joinz is a premier digital service agency specializing in secure, confidential, and guaranteed social media solutions."
              speed={20}
              delay={800}
            />
          </p>
        </div>
      </section>

      {/* Story & Expertise Section */}
      <section className="py-16 md:py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary-container/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                alt="Creative team collaborating"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlyBVqPDJlNBe5wiAc3rZXbXLRsARUc-mll82CiRzOTarHqWDGmYBpDoYcKdzDYm-Zv8IRRQYZ9mOC1l0gnKH-30hHWdC_WxFNo7Xf6lYyAibmIVOScrDgwHP6jxVmDfouyusjlk_WGSkptqTDWupmDMw0vW9HScpkuLeobD8AgxaCq64J7fZLjYE8ugChsUfO3R34-N0B9UtcVr3CuZvVsj5WT12dEJChYbVOlZLk4PkI02buPMk_Gmj9_b_zP21-8mN_ZjLKosk"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">Our Story &amp; Expertise</h2>
              <div className="h-1 w-16 bg-secondary-container" />
            </div>
            <div className="space-y-5 font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              <p>Joinz was built on one simple principle control.</p>
              <p>In today's digital world, your online presence defines your reputation, opportunities, and influence. We created Joinz to give individuals and brands full control over how they appear, grow, and protect themselves online.</p>
              <p>Over the years, we've developed a strong network across media platforms, legal channels, and private communication lines that allow us to deliver results beyond traditional methods.</p>
              <p>Whether it's securing verification, removing harmful content, or handling sensitive digital issues we operate with discretion, precision, and results-driven execution.</p>
              <p>At Joinz, we don't rely on automated systems or generic support forms. Every case is handled strategically, ensuring the highest success rate possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-8 md:p-10 rounded-2xl bg-surface-container border border-white/5 flex flex-col items-center text-center group hover:bg-surface-container-high transition-all duration-500">
              <span className="text-5xl md:text-6xl font-headline font-black text-secondary-container mb-3 glow-text">
                <CountUp target={98} suffix="%" />
              </span>
              <span className="font-label text-[11px] font-medium tracking-wide text-on-surface-variant mt-1">Success rate</span>
            </div>
            <div className="p-8 md:p-10 rounded-2xl bg-surface-container border border-white/5 flex flex-col items-center text-center group hover:bg-surface-container-high transition-all duration-500">
              <span className="text-5xl md:text-6xl font-headline font-black text-white mb-3">
                <CountUp target={500} suffix="+" />
              </span>
              <span className="font-label text-[11px] font-medium tracking-wide text-on-surface-variant mt-1">Cases handled</span>
            </div>
            <div className="p-8 md:p-10 rounded-2xl bg-surface-container border border-white/5 flex flex-col items-center text-center group hover:bg-surface-container-high transition-all duration-500">
              <div className="flex items-center space-x-2 text-secondary-container mb-3">
                <span className="material-symbols-outlined text-4xl">support_agent</span>
              </div>
              <span className="text-2xl sm:text-3xl font-headline font-bold text-white mb-2">
                <CountUp target={24} suffix="/7" /> Support
              </span>
              <span className="font-label text-[11px] font-medium tracking-wide text-on-surface-variant mt-1">Dedicated support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">What Makes Us Different</h2>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">We operate at the edge of what's possible, balancing speed with surgical precision.</p>
            </div>
            <div className="pb-2">
              <span className="material-symbols-outlined text-5xl text-secondary-container/20">diversity_3</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-outline-variant/10 rounded-2xl overflow-hidden">
            {[
              { icon: 'bolt', color: 'secondary-container', title: 'Speed Without Compromise', desc: 'Direct portal access means we bypass level 1 support entirely, cutting response times from months to days.' },
              { icon: 'shield', color: 'secondary-container', title: 'Absolute Confidentiality', desc: 'We work under strict NDAs. We never boast about our high-profile clients on public forums. Your privacy is paramount.' },
              { icon: 'auto_graph', color: 'secondary-container', title: 'Result-Driven Assurance', desc: 'We pre-vet every single case. If we take your case, it means we know we can deliver it.' },
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10 bg-surface hover:bg-surface-container transition-colors duration-500 group">
                <div className={`w-11 h-11 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary-container mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto p-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl">
          <div className="bg-surface-container-lowest p-10 md:p-16 rounded-2xl">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-snug">Ready to build your digital legacy?</h2>
            <div className="flex justify-center">
              <Link to="/contact" className="w-full md:w-auto btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
