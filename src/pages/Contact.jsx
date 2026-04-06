import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Typewriter from '../components/Typewriter'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: '',
    otherService: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.service || (formData.service === 'other' && !formData.otherService)) {
      setStatus({ type: 'error', message: 'Please fill in all required fields' })
      return
    }

    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const selectedService = formData.service === 'other' ? `Other: ${formData.otherService}` : formData.service;

      // 1. Send Main Email (to Admin)
      await emailjs.send(
        'service_e5n5eds',
        'template_qrk21bn',
        {
          from_name: formData.name,
          from_email: formData.email,
          service: selectedService,
          message: formData.details
        },
        'qOpgbC4RGXupwAnrO'
      )

      // SUCCESS UI: Main email sent
      setStatus({ type: 'success', message: 'Request sent successfully. Check your email for confirmation.' })
      setFormData({ name: '', email: '', service: '', details: '', otherService: '' })

      // 2. Handle Auto-Reply separately (silent if fails)
      try {
        await emailjs.send(
          'service_e5n5eds',
          'template_3ek0uyn',
          {
            to_name: formData.name,
            to_email: formData.email,
            service: selectedService
          },
          'qOpgbC4RGXupwAnrO'
        )
      } catch (autoErr) {
        console.warn('Auto-reply failed to send:', autoErr)
      }

    } catch (err) {
      console.error('Main submission failed:', err)
      setStatus({ type: 'error', message: 'Something went wrong, please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/joinz.agency',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/joinz.agency',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    }
  ]

  return (
    <main className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="text-secondary-container text-[13px] font-semibold tracking-wide">Status: Taking projects</span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-snug mb-5">
              Get in Touch
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed opacity-80 min-h-[3em]">
              <Typewriter 
                text="Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate your digital future."
                speed={20}
                delay={800}
              />
            </p>
          </div>
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-4 bg-secondary-container/10 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-60" />
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/5">
              <img
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9a2vCQ3zx9SMCKwR1PGBhONK9CTGC0n1d88V4PbeA5UJGSEv5XSRH9hHDUs5h_ZNGc6GQcSoASF1jyPh5sMYteuYgppIUYlpzwN1u1e9esCDpyHU2Sh32WD_tCDCqFy9e3uYaqRslXnE9Osg9J1d2FEyrH_Mxbfn9fTu2vjt30ME-BUDr7LkA_7QVzAyk9Xqd_UIPrI1FOlzXNSQM93-WaYWNStjVVMuRS25zvlFxuAErSESLgnm1JHiY8_doWepPCw4lUCggwI"
                alt="Modern office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <section className="lg:col-span-8 space-y-12">
          <div className="p-7 md:p-10 rounded-2xl bg-surface-container-low border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/5 blur-[100px] rounded-full -mr-32 -mt-32" />
            <h2 className="font-headline text-xl font-bold text-white mb-2 relative">Start Your Request in 30 Seconds</h2>
            <p className="text-on-surface-variant text-sm mb-8 opacity-70 relative">Fill out the form below and we'll get back to you within 24 hours.</p>
            <form className="space-y-6 relative" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium tracking-wide text-slate-500 ml-1">Full name</label>
                  <input
                    className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-secondary-container/20 focus:border-secondary-container transition-all outline-none shadow-sm"
                    placeholder="John Doe"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium tracking-wide text-slate-500 ml-1">Email address</label>
                  <input
                    className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-secondary-container/20 focus:border-secondary-container transition-all outline-none shadow-sm"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium tracking-wide text-slate-500 ml-1">Service needed</label>
                <div className="relative">
                  <select
                    className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 text-gray-900 focus:ring-2 focus:ring-secondary-container/20 focus:border-secondary-container appearance-none transition-all outline-none shadow-sm"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option>Social Media Verification</option>
                    <option>Reputation Management</option>
                    <option>Account Recovery</option>
                    <option>Username Claim</option>
                    <option>Branding & Design</option>
                    <option>Web Development</option>
                    <option>PR & Media</option>
                    <option>Growth & Engagement</option>
                    <option value="other">Other</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">expand_more</span>
                </div>

                {formData.service === 'other' && (
                  <div className="space-y-2 mt-4 fade-in-up">
                    <label className="text-[11px] font-medium tracking-wide text-slate-500 ml-1">Please specify service</label>
                    <input
                      className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-secondary-container/20 focus:border-secondary-container transition-all outline-none shadow-sm"
                      placeholder="Type the service you need..."
                      type="text"
                      value={formData.otherService}
                      onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                    />
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium tracking-wide text-slate-500 ml-1">Case details & URLs</label>
                <textarea
                  className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-secondary-container/20 focus:border-secondary-container transition-all resize-none outline-none shadow-sm"
                  placeholder="Tell us about your project or provide relevant links..."
                  rows="5"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-4">
                <button
                  className={`btn-primary w-full md:w-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit Request'}
                </button>
                {status.message && (
                  <div className={`text-sm font-bold tracking-widest uppercase fade-in-up ${status.type === 'success' ? 'text-secondary-container' : 'text-red-500'}`}>
                    {status.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="p-8 rounded-2xl bg-surface-container border border-white/5 transition-all hover:bg-surface-container-high group">
            <span className="material-symbols-outlined text-secondary-container text-3xl mb-6 block">mail</span>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Direct Inquiry</h3>
            <a className="text-xl font-headline font-bold text-white hover:text-secondary-container transition-colors" href="mailto:info@joinz.agency">info@joinz.agency</a>
          </div>
          <div className="p-8 rounded-2xl bg-surface-container border border-white/5">
            <h3 className="text-[11px] font-medium tracking-wide text-slate-500 mb-6">Connect with us</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  className="flex items-center gap-4 group p-4 -mx-4 rounded-xl hover:bg-white/5 hover:shadow-[0_0_30px_rgba(0,227,253,0.05)] transition-all duration-300"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-secondary-container group-hover:bg-secondary-container/10 transition-all duration-300">
                    {social.icon}
                  </div>
                  <span className="flex-1 text-on-surface group-hover:text-white font-medium transition-colors">{social.name}</span>
                  <span className="material-symbols-outlined text-slate-600 group-hover:text-secondary-container transition-all translate-x-0 group-hover:translate-x-1.5 duration-300">north_east</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* WhatsApp Banner */}
      <section className="mt-10">
        <a className="block group relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary-container/20 to-primary-container/10 border border-secondary-container/20 p-8 md:p-12 transition-all hover:border-secondary-container/40" href="https://wa.me/201020366187" target="_blank" rel="noopener noreferrer">
          <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
            <svg className="w-32 h-32 fill-current text-secondary-container" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.1-8.5-44-27.1-16.2-14.5-27.2-32.4-30.3-37.9-3.1-5.5-.3-8.5 2.5-11.2 2.5-2.6 5.5-6.5 8.3-9.7 2.8-3.3 3.8-5.7 5.7-9.4 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 34.9 2.1 10.6-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-3 px-3 py-1.5 bg-[#25D366]/10 rounded-full border border-[#25D366]/20">
                  <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.1-8.5-44-27.1-16.2-14.5-27.2-32.4-30.3-37.9-3.1-5.5-.3-8.5 2.5-11.2 2.5-2.6 5.5-6.5 8.3-9.7 2.8-3.3 3.8-5.7 5.7-9.4 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 34.9 2.1 10.6-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  <h2 className="text-xl font-headline font-bold text-white tracking-tight leading-none uppercase">Chat with us on WhatsApp</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold tracking-wide text-[#25D366]">Online now</span>
                </div>
              </div>
              <p className="text-on-surface-variant opacity-80 mb-8">
                Get instant answers in minutes. Skip the waiting — talk directly with our team and get real solutions, fast.
              </p>
              <ul className="space-y-4">
                {[
                  'Typically replies within minutes',
                  'Private & confidential',
                  'Direct access to our team'
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-on-surface-variant opacity-80">
                    <span className="material-symbols-outlined text-secondary-container text-xl">check_circle</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="btn-primary flex items-center gap-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.1-8.5-44-27.1-16.2-14.5-27.2-32.4-30.3-37.9-3.1-5.5-.3-8.5 2.5-11.2 2.5-2.6 5.5-6.5 8.3-9.7 2.8-3.3 3.8-5.7 5.7-9.4 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 34.9 2.1 10.6-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Chat Now on WhatsApp
              </div>
            </div>
          </div>
        </a>
      </section>
    </main>
  )
}
