import Link from 'next/link'

interface NoteCardProps {
  title: string
  summary: string
  tags: string[]
  folder: string
  slug: string
  date: string
}

export function NoteCard({ title, summary, tags, folder, slug, date }: NoteCardProps) {
  return (
    <Link
      href={`/notes/${folder}/${slug}`}
      className="note-card"
    >
      <div className="note-card-header">
        <span className="note-card-folder">{folder}</span>
        <span className="note-card-date">{date}</span>
      </div>
      <h3 className="note-card-title">{title}</h3>
      <p className="note-card-summary">{summary}</p>
      {tags.length > 0 && (
        <div className="note-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="note-card-tag">{tag}</span>
          ))}
        </div>
      )}
    </Link>
  )
}
