import { Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Reputation from './pages/services/Reputation'
import Recovery from './pages/services/Recovery'
import Username from './pages/services/Username'
import Branding from './pages/services/Branding'
import WebDev from './pages/services/WebDev'
import PrMedia from './pages/services/PrMedia'
import Growth from './pages/services/Growth'
import Verification from './pages/services/Verification'

export default function App() {
  return (
    <div className="font-body text-on-surface antialiased min-h-screen light" style={{ backgroundColor: 'var(--bg-body)', color: 'var(--text-primary)' }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/reputation" element={<Reputation />} />
        <Route path="/services/recovery" element={<Recovery />} />
        <Route path="/services/username" element={<Username />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/webdev" element={<WebDev />} />
        <Route path="/services/pr-media" element={<PrMedia />} />
        <Route path="/services/growth" element={<Growth />} />
        <Route path="/services/verification" element={<Verification />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  )
}
