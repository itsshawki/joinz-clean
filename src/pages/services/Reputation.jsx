import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from '../../components/Typewriter'

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

export default function Reputation() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary-container/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="mb-8">
              <span className="text-secondary text-[13px] font-semibold tracking-wide">Expert protection</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-snug mb-8 tracking-tighter text-white">
              Reputation <br />
              <span className="text-accent">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10 min-h-[4em]">
              <Typewriter
                text="We help you take control of what people see when they search your name — removing the negative and pushing forward what actually represents you."
                speed={20}
                delay={800}
              />
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition-colors">
                Secure Your Brand
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>

            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-container to-primary-container rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-surface-container rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-outline-variant/20">
              <img
                alt="Abstract 3D visualization of digital nodes and connections in cyan and deep blue hues representing data integrity"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwtEGAiDNeKXUbAtgjb5whzopTvF80jZEe6FSzhJBGCATKwvQFQ3lrTU0nKIq0-IRwTPEJdK2-Oa5jRV82kr1OWCTyyxPqYePimlrokB64l01z5eeJxHjlsCQ64CgHLKFfS6xA743DcN68IpdwLa1VzcKOvvalG3LC5WeTmmr7n0BqNh6CVO8lrAc_qA0Fai8HEAzsPT69A0dT6c1qicYzlpceNwQ0Ccw74Twta4NAghqjYFmWnW4wqG5XvwFby2pYMquBmwrutbw"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <div className="text-[11px] text-secondary font-medium tracking-wide mb-1">Success rate</div>
                  <div className="text-2xl font-black text-white font-headline tracking-tighter">98.4%</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 md:py-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 mb-12 md:mb-0 sticky top-32">
              <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-white mb-6">
                Why Digital <br />Reputation Matters
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                When someone searches your name, what shows up matters. First impressions today start on Google — and we make sure yours works in your favor.
              </p>
              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">monitoring</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Real-time Monitoring</h4>
                    <p className="text-sm text-on-surface-variant">We track mentions of your name across search, social media, and news — so nothing slips through unnoticed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">visibility_off</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Strategic Suppression</h4>
                    <p className="text-sm text-on-surface-variant">We push down unwanted or harmful content and replace it with strong, positive assets that reflect your real value.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 gap-6">
              {[
                { num: '01', icon: 'policy', title: 'Crisis Management', desc: 'When things go wrong, we act fast. We manage the situation, control the narrative, and protect your reputation.', offset: '' },
                { num: '02', icon: 'star', title: 'Review Engineering', desc: 'We help you build a strong, authentic review presence while professionally handling negative feedback.', offset: 'translate-y-4' },
                { num: '03', icon: 'newspaper', title: 'Positive Content Promotion', desc: 'We create and promote high-quality content that ranks — so the right story shows up first.', offset: 'translate-y-8' },
              ].map((card, i) => (
                <div key={i} className={`glass-card p-10 rounded-2xl hover:bg-surface-container transition-all group ${card.offset}`}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-5xl font-black text-[#0f172a] opacity-70 group-hover:opacity-100 transition-opacity font-headline">{card.num}</span>
                    <span className="material-symbols-outlined text-secondary-container text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-headline">{card.title}</h3>
                  <p className="text-on-surface-variant">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 md:py-20 px-8 overflow-hidden bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-black font-headline tracking-tighter text-white mb-4">Advanced analytics</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Track your progress in real time. See what’s improving, what’s being removed, and how your visibility is growing.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Sentiment', target: 42, prefix: '+', suffix: '%', sub: 'Positive shift' },
            { label: 'Visibility', target: 3, prefix: 'Top ', suffix: '', sub: 'SERP placement' },
            { label: 'Removals', target: 600, prefix: '+', suffix: '', sub: 'Negative links' },
            { label: 'Success rate', target: 90, prefix: '', suffix: '%', sub: 'Campaign success' },
          ].map((stat, i) => (
            <div key={i} className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 flex flex-col items-center text-center">
              <div className="mb-4 text-secondary-fixed-dim font-semibold text-[11px] tracking-wide">
                {stat.label}
              </div>
              <div className="text-4xl font-black text-white font-headline mb-2">
                <CountUp target={stat.target} prefix={stat.prefix} suffix={stat.suffix} duration={2000} />
              </div>
              <div className="text-xs text-on-surface-variant font-medium opacity-60">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
    </main>
  )
}
