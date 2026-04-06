import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (href) => {
    if (href === '/services') {
      return location.pathname === '/services' || location.pathname.startsWith('/services/')
    }
    return location.pathname === href
  }

  return (
    <nav className="fixed top-0 w-full z-50" style={{
      background: 'var(--bg-nav)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-nav)',
      boxShadow: 'var(--shadow-nav)',
      transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease'
    }}>
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-xl font-black tracking-tighter uppercase font-headline" style={{ color: 'var(--text-heading)' }}>
          JOINZ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-headline text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                color: isActive(link.href) ? 'var(--accent-primary)' : 'var(--text-muted)',
                fontWeight: isActive(link.href) ? 700 : 400
              }}
              onMouseEnter={e => { if (!isActive(link.href)) e.target.style.color = 'var(--text-heading)' }}
              onMouseLeave={e => { if (!isActive(link.href)) e.target.style.color = 'var(--text-muted)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile: Hamburger Only */}
        <div className="md:hidden flex items-center">
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 transition-all duration-400 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text-heading)' }} />
            <span className={`w-6 h-0.5 transition-all duration-400 ${mobileOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--text-heading)' }} />
            <span className={`w-6 h-0.5 transition-all duration-400 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text-heading)' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-96' : 'max-h-0'}`} style={{ borderTop: mobileOpen ? `1px solid var(--border-default)` : 'none' }}>
        <div className="px-8 py-12 flex flex-col items-center gap-8" style={{ background: 'var(--bg-nav-mobile)' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-headline text-xl uppercase tracking-[0.2em] py-2 transition-all duration-300"
              style={{
                color: isActive(link.href) ? 'var(--accent-primary)' : 'var(--text-muted)',
                fontWeight: isActive(link.href) ? 900 : 400
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
