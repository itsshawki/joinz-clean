import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 w-full border-t border-white/5 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Block: Brand + Description + Socials */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <Link to="/" className="text-4xl font-bold text-white font-headline tracking-tighter">
            JOINZ
          </Link>
          <p className="text-slate-400 font-body text-base max-w-md leading-relaxed">
            Building Digital Trust & Authority. We provide expert solutions for social media verification and reputation.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com/Joinz.Agency" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-accent transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,227,253,0.5)] hover:scale-[1.05]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.2c0-.6.4-.8.8-.8h3.2v-4.5l-4.5-.5c-3.8 0-5 2-5 5.5v2.5z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/joinz.agency" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-accent transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,227,253,0.5)] hover:scale-[1.05]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.14-1.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/201020366187" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-accent transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,227,253,0.5)] hover:scale-[1.05]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a 
              href="mailto:info@joinz.agency" 
              className="text-slate-500 hover:text-accent transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,227,253,0.5)] hover:scale-[1.05]"
            >
              <span className="material-symbols-outlined text-2xl">mail</span>
            </a>
          </div>
        </div>

        {/* Right Columns: Navigation */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
          {/* Quick Links Column */}
          <div className="flex flex-col gap-6">
            <h5 className="text-white font-bold text-sm uppercase tracking-[0.2em] leading-none mb-2">Quick Links</h5>
            <nav className="flex flex-col gap-4">
              <Link className="text-slate-500 hover:text-white transition-all duration-200 text-sm font-medium w-fit" to="/">Home</Link>
              <Link className="text-slate-500 hover:text-white transition-all duration-200 text-sm font-medium w-fit" to="/services">Services</Link>
              <Link className="text-slate-500 hover:text-white transition-all duration-200 text-sm font-medium w-fit" to="/about">About Us</Link>
              <Link className="text-slate-500 hover:text-white transition-all duration-200 text-sm font-medium w-fit" to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-6">
            <h5 className="text-white font-bold text-sm uppercase tracking-[0.2em] leading-none mb-2">Services</h5>
            <nav className="flex flex-col gap-4">
              <Link className="text-slate-500 hover:text-white transition-all duration-200 text-sm font-medium w-fit" to="/services/verification">Verification</Link>
              <Link className="text-slate-500 hover:text-white transition-all duration-200 text-sm font-medium w-fit" to="/services/reputation">Reputation Management</Link>
              <Link className="text-slate-500 hover:text-white transition-all duration-200 text-sm font-medium w-fit" to="/services/recovery">Account Recovery</Link>
              <Link className="text-slate-500 hover:text-white transition-all duration-200 text-sm font-medium w-fit" to="/services/username">Username Claim</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 mt-16 border-t border-white/5 text-center">
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          © 2022 - {currentYear} JOINZ. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}
