import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Disable browser default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Identify all potential scroll targets
    const scrollTargets = [
      window,
      document.documentElement,
      document.body,
      document.getElementById('root'),
      document.querySelector('main'),
      document.querySelector('.main-container')
    ]

    const performScroll = () => {
      scrollTargets.forEach(target => {
        if (target && target.scrollTo) {
          // Immediate reset (0ms delay)
          target.scrollTo(0, 0)

          // Secondary reset to catch any race conditions with dynamic content
          requestAnimationFrame(() => {
            if (target && target.scrollTo) {
              target.scrollTo(0, 0)
            }
          })
        }
      })
    }

    // Execute scroll on every location change (including key change for same-route navigation)
    performScroll()

    // Additional safeguard for slow-loading dynamic content
    const timers = [
      setTimeout(performScroll, 50),
      setTimeout(performScroll, 150)
    ]

    return () => timers.forEach(clearTimeout)
  }, [location]) // Listen to the full location object (pathname, search, hash, key)

  return null
}
