export type BlogPost = {
  id: number
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  slug: string
  author: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Beyond the Port: Deceiving Attackers with SSH Honeypots',
    description: 'How I deployed a Cowrie SSH honeypot on a Raspberry Pi 5, navigated CGNAT on Airtel, exposed it via IPv6, and analyzed real attack logs.',
    date: 'Feb 2026',
    readTime: '8 min',
    tags: ['Cybersecurity', 'Raspberry Pi', 'Honeypot', 'Blue Team'],
    slug: 'ssh-honeypot-raspberry-pi',
    author: 'Shourya Kashyap',
    content: `
      <p>While exploring network reconnaissance and the various tools used to map attack surfaces, I realized how trivial it is to identify open SSH ports using Nmap. If a user or administrator accidentally leaves SSH enabled or uses default configurations, it creates a massive security loophole.</p>

      <p>For anyone testing SSH security, understanding the shell environment is essential. This curiosity led me to Cowrie — a sophisticated SSH/Telnet honeypot designed to log brute-force attacks and shell interaction.</p>

      <h2>How Cowrie Works</h2>
      <p>The concept is brilliant: Cowrie simulates a fake Linux file system on the default SSH port (22), while the actual management shell of the real machine is moved to a high-numbered custom port. This creates an additional layer of security by:</p>
      <ul>
        <li><strong>Deceiving attackers</strong> — traps them in a sandbox where commands are logged but harmless</li>
        <li><strong>Information gathering</strong> — lets you observe attacker techniques in real-time</li>
        <li><strong>Proactive defense</strong> — adds a deception layer on top of your real system</li>
      </ul>

      <h2>What I Learned</h2>
      <p>Building this project deepened my understanding of Linux network internals, vulnerabilities at the Network Layer, and how to implement proactive mitigation strategies.</p>
      `,
  },
  {
    id: 2,
    title: 'OSINT Investigation: Mapping an Investment Ecosystem',
    description: 'How I used open-source intelligence to map digital footprints, infrastructure, and entity relationships of a suspicious investment platform.',
    date: 'Jan 2026',
    readTime: '10 min',
    tags: ['OSINT', 'Reconnaissance', 'Threat Intelligence'],
    slug: 'osint-investment-ecosystem',
    author: 'Shourya Kashyap',
    content: `
      <p>While studying open-source intelligence techniques, I became interested in how investment platforms and financial ecosystems leave extensive digital footprints across the internet. Many organizations unintentionally expose valuable information through domains, infrastructure metadata, public records, and online mentions.</p>

      <p>This curiosity led me to conduct an OSINT investigation into an investment ecosystem, mapping publicly available data to understand relationships between entities, infrastructure, and online assets.</p>

      <h2>How the Investigation Worked</h2>
      <p>The investigation focused on collecting and correlating publicly available information from multiple sources to build a clearer picture of the ecosystem. This included analyzing:</p>
      <ul>
        <li><strong>Domain infrastructure</strong> — identifying related domains, DNS records, and hosting information</li>
        <li><strong>Digital footprints</strong> — examining public references, metadata, and connected online assets</li>
        <li><strong>Entity relationships</strong> — mapping connections between individuals, companies, and platforms</li>
      </ul>

      <h2>What I Learned</h2>
      <p>This project helped me understand how OSINT can reveal hidden relationships and infrastructure patterns within digital ecosystems. It strengthened my ability to analyze publicly available intelligence, map attack surfaces, and evaluate potential security risks from exposed information.</p>
      `,
  },
]

// Helper to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}