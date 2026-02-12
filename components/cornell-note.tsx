'use client'

import { type ReactNode } from 'react'

interface CornellNoteProps {
  children: ReactNode
  summary?: string
  tags?: string[]
}

export function CornellNote({ children, summary, tags }: CornellNoteProps) {
  return (
    <div className="cornell-note">
      {tags && tags.length > 0 && (
        <div className="cornell-tags">
          {tags.map((tag) => (
            <span key={tag} className="cornell-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="cornell-grid">
        {children}
      </div>
      {summary && (
        <div className="cornell-summary">
          <div className="cornell-summary-label">Summary</div>
          <p className="cornell-summary-text">{summary}</p>
        </div>
      )}
    </div>
  )
}

interface CuesProps {
  children: ReactNode
}

export function Cues({ children }: CuesProps) {
  return (
    <aside className="cornell-cues">
      <div className="cornell-section-label">Cues &amp; Questions</div>
      <div className="cornell-cues-content">
        {children}
      </div>
    </aside>
  )
}

interface NotesProps {
  children: ReactNode
}

export function Notes({ children }: NotesProps) {
  return (
    <div className="cornell-notes">
      <div className="cornell-section-label cornell-notes-label">Notes</div>
      <div className="cornell-notes-content">
        {children}
      </div>
    </div>
  )
}
