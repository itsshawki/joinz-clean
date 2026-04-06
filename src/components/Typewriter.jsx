import { useState, useEffect } from 'react'

export default function Typewriter({ text, speed = 20, delay = 500 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout
    let interval
    
    timeout = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1))
        i++
        if (i >= text.length) {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, delay])

  return (
    <span className="relative">
      {displayedText}
      <span 
        className={`inline-block w-[2px] h-[1.1em] bg-secondary-container align-middle ml-1 transition-opacity duration-500 ${isComplete ? 'animate-pulse opacity-40' : 'opacity-100'}`}
      />
    </span>
  )
}
