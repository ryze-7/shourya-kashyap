'use client'
import { TypingText } from '@/components/typing-text'
import { Navbar } from '@/components/navbar'
import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Hi, I'm Shourya Kashyap</h1>
          <TypingText
            strings={[
              'Offensive Security Researcher',
              'OSINT Investigator',
              'Network Pentester',
              'Blue Team Defender',
              'Hardware Hacker',
            ]}
            className="text-lg text-accent font-mono"
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Who I Am</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a computer science student and security-focused developer with 
                a strong interest in offensive security, network penetration 
                testing, and OSINT. I enjoy analyzing attack surfaces, studying 
                how systems can be exploited, and building hands-on labs to explore 
                real-world security concepts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alongside security research, I build full-stack applications and 
                technical systems, combining modern web development with 
                security-focused thinking while continuously learning and 
                experimenting with new technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">My Experience</h2>
              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cybersecurity Labs & Research</h3>
                  <p className="text-sm text-accent font-mono mb-2">2024 – Present</p>
                  <p className="text-muted-foreground text-sm">
                    Offensive security researcher building practical labs for pentesting, OSINT, and vulnerability analysis.
                  </p>
                </div>
                <div className="pb-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Full-Stack Development Projects</h3>
                  <p className="text-sm text-accent font-mono mb-2">2023 – Present</p>
                  <p className="text-muted-foreground text-sm">
                    Building scalable Next.js and React apps with TypeScript, focusing on performance and clean UI/UX.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Systems & IoT Development</h3>
                  <p className="text-sm text-accent font-mono mb-2">2024 – Present</p>
                  <p className="text-muted-foreground text-sm">
                    Built IoT solutions with Raspberry Pi and microcontrollers, from hardware integration to real-time monitoring.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What I'm Passionate About</h2>
              <ul className="space-y-3">
                {[
                  'Passionate about penetration testing and offensive security',
                  'Exploring how Linux systems can be attacked and secured',
                  'Studying attack surfaces and real-world vulnerability techniques',
                  'Learning how defenders detect and respond to cyber attacks',
                  'Building hands-on security labs and experimenting with tools',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Skills</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-accent mb-2">Systems & Security</p>
                  <p className="text-xs text-muted-foreground">
                    Linux, Network Security, Penetration Testing, OSINT
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent mb-2">Hardware & IoT</p>
                  <p className="text-xs text-muted-foreground">
                    Raspberry Pi, Arduino,
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent mb-2">Frontend</p>
                  <p className="text-xs text-muted-foreground">
                    React, Next.js, Tailwind
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Computer Science</p>
                  <p className="text-xs text-accent font-mono">SRM University, Delhi-NCR</p>
                  <p className="text-xs text-muted-foreground">2023 - 2027</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent mb-1">50+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent mb-1">2+</p>
                <p className="text-xs text-muted-foreground">Years Exp.</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>
          <a
            href="mailto:shourya.kashyap.05gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-emerald-500 transition-colors"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </div>
  )
}
