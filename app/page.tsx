'use client'

import { TypingText } from '@/components/typing-text'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'
import { ArrowRight, Code2, Zap, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Main heading */}
        <div className="space-y-8 mb-20">
          <div>
            <p className="text-accent font-mono text-sm mb-4">Hello, I'm Shourya Kashyap</p>
            <TypingText />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Cybersecurity student &<br />
              <span className="text-accent">OSINT / Defense researcher</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              I'm a BTech CS student focused on cybersecurity, with hands-on experience 
              in offensive security, OSINT, and network pentesting while actively 
              building defensive expertise. I research attack surfaces, simulate 
              real-world attacks, deploy security monitoring systems, and build security 
              tools — from SSH honeypots and WiFi penetration testing to open-source 
              intelligence investigations and threat detection.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-emerald-500 transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors"
            >
              Learn About Me
            </Link>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <Link
            href="/projects"
            className="p-6 bg-card border border-border rounded-lg hover:border-accent hover:bg-card/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">Projects</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              OSINT Research, SSH Honeypot, IoT Security 
              Experiments on Raspberry Pi, 
              Travel Website and more.
            </p>
            <span className="text-accent text-sm font-medium">Browse Projects →</span>
          </Link>

          <Link
            href="/about"
            className="p-6 bg-card border border-border rounded-lg hover:border-accent hover:bg-card/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">About Me</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              3rd year BTech CS student pursuing offensive security — 
              OSINT, network pentesting, and purple team research.
            </p>
            <span className="text-accent text-sm font-medium">Read More →</span>
          </Link>

          <Link
            href="/blog"
            className="p-6 bg-card border border-border rounded-lg hover:border-accent hover:bg-card/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">Blog</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Write-ups on OSINT Researches, 
              network recon, pentesting approach, and 
              security research notes.
            </p>
            <span className="text-accent text-sm font-medium">Read Articles →</span>
          </Link>
        </div>

        {/* Tech Stack Preview */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Tools & Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Kali Linux', 'Splunk', 'Reconnaissance', 'Wireshark'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-background border border-border rounded text-center text-sm text-accent font-mono hover:bg-background/80 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}