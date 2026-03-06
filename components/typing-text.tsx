'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function TypingText() {
  const el = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        // 'Hello, I\'m Shourya Kashyap',
        'Cybersecurity Researcher',
        'OSINT Investigator',
        'Network Pentester',
        'Blue Team Defender',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      cursorChar: '_',
    })

    return () => typed.destroy()
  }, [])

  return (
    <p className="text-accent font-mono text-sm mb-4">
      <span ref={el} />
    </p>
  )
}