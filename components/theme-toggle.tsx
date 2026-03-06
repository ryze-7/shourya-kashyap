'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-8 h-8 flex items-center justify-center border border-border rounded text-muted-foreground hover:text-accent hover:border-accent transition-colors font-mono text-xs"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  )
}