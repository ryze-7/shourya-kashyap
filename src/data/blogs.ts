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
  {
    id: 3,
    title: 'Practical Nmap Cheat Sheet for Network Reconnaissance',
    description: 'A practical Nmap reference guide covering host discovery, port scanning, service detection, NSE scripts, and useful scanning techniques used during reconnaissance.',
    date: 'Mar 2026',
    readTime: '12 min',
    tags: ['Nmap', 'Reconnaissance', 'Network Security'],
    slug: 'nmap-reconnaissance-cheatsheet',
    author: 'Shourya Kashyap',
    content: `
    <p>During network reconnaissance, identifying live hosts, open ports, and running services is one of the most important steps. One of the most widely used tools for this purpose is <strong>Nmap (Network Mapper)</strong>.</p>

    <p>Nmap is a free and open-source utility designed for <strong>network discovery and security auditing</strong>. It allows security researchers and system administrators to analyze networks, detect exposed services, and understand the attack surface of a system.</p>

    <p>This article serves as a practical cheat sheet of commonly used Nmap techniques I explored while studying network reconnaissance.</p>

    <h2>Host Discovery</h2>

    <p>Host discovery helps identify which machines in a network are online before performing port scans.</p>

    <pre><code># Ping scan
  nmap -sn &lt;target&gt;
  </code></pre>

    <p>Scan an entire subnet using CIDR notation:</p>

    <pre><code>nmap -sn 192.168.0.1/24</code></pre>

    <h2>Traceroute</h2>

    <p>Traceroute can be used to identify intermediate network nodes between the scanning system and the target.</p>

    <pre><code>nmap -sn --traceroute google.com</code></pre>

    <h2>DNS Enumeration Using NSE</h2>

    <p>Nmap includes the Nmap Scripting Engine (NSE), which allows additional enumeration capabilities.</p>

    <p>Brute forcing DNS subdomains:</p>

    <pre><code>nmap --script dns-brute &lt;target&gt;</code></pre>

    <h2>Broadcast Host Discovery</h2>

    <p>Broadcast-based discovery can be used to identify active machines on local networks.</p>

    <pre><code>nmap -sn --script broadcast-ping 192.168.0.1/24</code></pre>

    <h2>Basic Port Scanning</h2>

    <pre><code>nmap scanme.nmap.org</code></pre>

    <p>This performs a default scan of the most common ports.</p>

    <h2>Port States Explained</h2>

    <ul>
    <li><strong>Open</strong> — A service is actively listening</li>
    <li><strong>Closed</strong> — No service is running on the port</li>
    <li><strong>Filtered</strong> — Firewall is blocking probes</li>
    <li><strong>Unfiltered</strong> — Port is reachable but its state cannot be determined</li>
    <li><strong>Open/Filtered</strong> — Could be open or filtered</li>
    <li><strong>Closed/Filtered</strong> — Could be closed or filtered</li>
    </ul>

    <h2>Skipping Host Discovery</h2>

    <p>If ICMP is blocked, Nmap may think a host is offline. The following option treats the host as online.</p>

    <pre><code>nmap -Pn scanme.nmap.org</code></pre>

    <h2>DNS Configuration</h2>

    <p>Use custom DNS servers:</p>

    <pre><code>nmap --dns-servers 8.8.8.8,8.8.4.4 scanme.nmap.org</code></pre>

    <p>Disable DNS resolution to speed up scans:</p>

    <pre><code>nmap -n scanme.nmap.org</code></pre>

    <h2>Privileged vs Unprivileged Scans</h2>

    <p>Privileged users can perform SYN stealth scans, while unprivileged users perform TCP connect scans.</p>

    <p>Unprivileged scans generally take longer to complete.</p>

    <h2>Scanning Specific Ports</h2>

    <p>Scan specific ports:</p>

    <pre><code>nmap -p80,443 localhost</code></pre>

    <p>Scan a port range:</p>

    <pre><code>nmap -p1-100 localhost</code></pre>

    <p>Scan all ports:</p>

    <pre><code>nmap -p- localhost</code></pre>

    <p>Scan ports by protocol:</p>

    <pre><code>nmap -pT:25,U:23 &lt;target&gt;</code></pre>

    <p>Scan by service name:</p>

    <pre><code>nmap -p smtp &lt;target&gt;</code></pre>

    <p>Scan service names with wildcards:</p>

    <pre><code>nmap -p smtp* &lt;target&gt;</code></pre>

    <h2>Selecting Network Interfaces</h2>

    <pre><code>nmap -e &lt;interface&gt; &lt;target&gt;</code></pre>

    <h2>Excluding Hosts from Scans</h2>

    <pre><code>nmap 192.168.1.1-255 --exclude 192.168.1.1,192.168.1.2</code></pre>

    <p>Using an exclusion file:</p>

    <pre><code>nmap --exclude-file exclude.txt 192.168.1.1-255</code></pre>

    <h2>Using Target Lists</h2>

    <pre><code>nmap -iL targets.txt</code></pre>

    <h2>Service Detection</h2>

    <pre><code>nmap -sV &lt;target&gt;</code></pre>

    <h2>Operating System Detection</h2>

    <pre><code>nmap -O &lt;target&gt;</code></pre>

    <p>Force OS guessing:</p>

    <pre><code>nmap -O --osscan-guess &lt;target&gt;</code></pre>

    <h2>Version Detection Intensity</h2>

    <pre><code>nmap -sV --version-intensity 9 &lt;target&gt;</code></pre>

    <h2>Aggressive Scan Mode</h2>

    <p>This enables OS detection, version detection, script scanning, and traceroute.</p>

    <pre><code>nmap -A &lt;target&gt;</code></pre>

    <h2>Verbose Mode</h2>

    <pre><code>nmap -v &lt;target&gt;</code></pre>

    <h2>NSE Script Categories</h2>

    <ul>
    <li>auth</li>
    <li>broadcast</li>
    <li>brute</li>
    <li>default</li>
    <li>discovery</li>
    <li>dos</li>
    <li>exploit</li>
    <li>external</li>
    <li>fuzzer</li>
    <li>intrusive</li>
    <li>malware</li>
    <li>safe</li>
    <li>version</li>
    <li>vuln</li>
    </ul>

    <h2>NSE Script Examples</h2>

    <pre><code>nmap -sV --script vuln &lt;target&gt;</code></pre>

    <pre><code>nmap -sV --script="version,discovery" &lt;target&gt;</code></pre>

    <pre><code>nmap -sV --script="not version" &lt;target&gt;</code></pre>

    <pre><code>nmap -sV --script="(http-*) and not(http-slowloris)" &lt;target&gt;</code></pre>

    <h2>Debugging NSE Scripts</h2>

    <pre><code>nmap -sC --script-trace &lt;target&gt;</code></pre>

    <h2>Scanning Random Internet Hosts</h2>

    <pre><code>nmap -iR 10</code></pre>

    <h2>Final Thoughts</h2>

    <p>Nmap remains one of the most important tools for network reconnaissance. From simple host discovery to advanced service detection and scripting, it provides extensive capabilities for analyzing network infrastructure and identifying exposed services.</p>

    <p>Understanding these commands and techniques can significantly improve the effectiveness of security assessments and network analysis.</p>
    `
  }
]

// Helper to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}