import { NoteIndex, type NoteEntry } from '@/components/note-index'

const notes: NoteEntry[] = [
  {
    title: 'TCP/IP Fundamentals',
    summary:
      'TCP provides reliable, ordered delivery over IP. The 3-way handshake (SYN, SYN-ACK, ACK) establishes connections. Flow control uses sliding windows.',
    tags: ['networking', 'protocols', 'tcp'],
    folder: 'networking',
    slug: 'tcp-ip-fundamentals',
    date: '2026-02-10'
  },
  {
    title: 'DNS Resolution',
    summary:
      'DNS translates domain names to IP addresses through a hierarchical lookup: recursive resolver, root server, TLD server, authoritative server. Caching at each level improves performance.',
    tags: ['networking', 'dns', 'infrastructure'],
    folder: 'networking',
    slug: 'dns-resolution',
    date: '2026-02-08'
  },
  {
    title: 'File Permissions',
    summary:
      'Linux file permissions use a 3-tier model: owner, group, others. Each tier has read (4), write (2), execute (1) bits. chmod and chown control access.',
    tags: ['linux', 'security', 'filesystem'],
    folder: 'linux',
    slug: 'file-permissions',
    date: '2026-02-06'
  },
  {
    title: 'systemd Services',
    summary:
      'systemd manages services via unit files. systemctl start/stop/enable/disable controls service lifecycle. Unit files define ExecStart, dependencies, and restart policies.',
    tags: ['linux', 'services', 'administration'],
    folder: 'linux',
    slug: 'systemd-services',
    date: '2026-02-04'
  }
]

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="home-title">Technical Notes</h1>
        <p className="home-subtitle">
          Cornell-style summaries of technical manuals and documentation.
          Filter by folder or tag to find what you need.
        </p>
      </header>
      <NoteIndex notes={notes} />
    </div>
  )
}
