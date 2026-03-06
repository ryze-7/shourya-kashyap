'use client'

import { useEffect, useState } from 'react'

function TerminalText() {
  const messages = ['INITIALIZING...', 'LOADING MODULES...', 'ESTABLISHING CONNECTION...', 'ACCESS GRANTED.']
  const [text, setText] = useState('')
  const [msgIndex, setMsgIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = messages[msgIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 600)
        } else {
          setCharIndex((c) => c + 1)
        }
      } else {
        setText(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setMsgIndex((m) => (m + 1) % messages.length)
          setCharIndex(0)
        } else {
          setCharIndex((c) => c - 1)
        }
      }
    }, deleting ? 30 : 60)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, msgIndex])

  return <span>{text}<span className="animate-pulse">_</span></span>
}

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 500) // duration of exit animation
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center
      transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]
      ${isExiting ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.05) 25%, rgba(16, 185, 129, 0.05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.05) 75%, rgba(16, 185, 129, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.05) 25%, rgba(16, 185, 129, 0.05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.05) 75%, rgba(16, 185, 129, 0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        
        {/* Logo */}
        <div className="text-4xl font-bold bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent animate-pulse">
          {"<shourya />"}
        </div>

        {/* Spinner */}
        {/* <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-accent animate-spin" />

          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent border-l-accent animate-spin"
            style={{
              animationDirection: "reverse",
              animationDuration: "1.5s",
            }}
          />

          <div className="absolute inset-6 rounded-full bg-accent/20" />
        </div> */}

        {/* Loading text */}
        <div className="text-sm text-muted-foreground font-mono tracking-widest h-5">
          <TerminalText />
        </div>

        {/* Progress bar */}
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-emerald-400 animate-pulse"
            style={{
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity:0.5 }
          50% { opacity:1 }
        }
      `}</style>
    </div>
  )
}