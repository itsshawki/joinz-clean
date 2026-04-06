import React from 'react';

const caseResults = [
  { name: 'Ahmed Amwell', username: '@ahmed_amwell', platform: 'TikTok', image: '/@ahmed_amwell.jpeg', link: 'https://www.tiktok.com/@ahmed_amwell', followers: '1.9M' },
  { name: 'غازي الذيابي', username: '@gzy', platform: 'TikTok', image: '/@gzy.jpeg', link: 'https://www.tiktok.com/@gzy', followers: '1.7M' },
  { name: 'Ibrahim Assad', username: '@ibrahim_assad', platform: 'TikTok', image: '/@ibrahim_assad.jpeg', link: 'https://www.tiktok.com/@ibrahim_assad', followers: '489.5K' },
  { name: 'د. سعود الشهري', username: '@s500s', platform: 'TikTok', image: '/@s500s.jpeg', link: 'https://www.tiktok.com/@s500s', followers: '1.1M' },
];

export default function RealCaseResults() {
  return (
    <section className="py-16 md:py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline mb-3">Real Case Results</h2>
          <p className="text-on-surface-variant text-base sm:text-lg">Proven success stories from real clients.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseResults.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${i * 100}ms` }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl shadow-md fade-in-up overflow-hidden"
            >
              <div className="relative mb-3 mt-2">
                <div className="w-[56px] h-[56px] rounded-full p-[2px] bg-gradient-to-br from-primary to-accent group-hover:shadow-[0_0_15px_rgba(0,180,216,0.2)] transition-shadow duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              <h3 className="text-[15px] font-bold font-headline text-gray-900 leading-snug transition-colors duration-300 mb-0.5">{item.name}</h3>
              <div className="flex items-center gap-1 mb-3">
                <span className="text-[13px] text-gray-500 font-medium">{item.username}</span>
                <span className="material-symbols-outlined text-secondary text-[14px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div className="flex items-center gap-1.5 mb-5">
                <span className="text-lg font-black font-headline text-gray-900 leading-none">{item.followers}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">followers</span>
              </div>
              <button className="w-full py-2.5 bg-[#fe2c55] hover:brightness-110 !text-white text-xs font-bold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">Follow</button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
