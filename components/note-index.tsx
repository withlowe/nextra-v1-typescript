'use client'

import { useState, useMemo } from 'react'
import { NoteCard } from './note-card'

export interface NoteEntry {
  title: string
  summary: string
  tags: string[]
  folder: string
  slug: string
  date: string
}

interface NoteIndexProps {
  notes: NoteEntry[]
}

export function NoteIndex({ notes }: NoteIndexProps) {
  const [activeFolder, setActiveFolder] = useState<string>('all')
  const [activeTags, setActiveTags] = useState<string[]>([])

  const folders = useMemo(() => {
    const set = new Set(notes.map((n) => n.folder))
    return ['all', ...Array.from(set).sort()]
  }, [notes])

  const allTags = useMemo(() => {
    const set = new Set(notes.flatMap((n) => n.tags))
    return Array.from(set).sort()
  }, [notes])

  const filtered = useMemo(() => {
    return notes.filter((note) => {
      const folderMatch = activeFolder === 'all' || note.folder === activeFolder
      const tagMatch =
        activeTags.length === 0 ||
        activeTags.every((t) => note.tags.includes(t))
      return folderMatch && tagMatch
    })
  }, [notes, activeFolder, activeTags])

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="note-index">
      <div className="note-filters">
        <div className="note-filter-group">
          <span className="note-filter-label">Folder</span>
          <div className="note-filter-options">
            {folders.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFolder(f)}
                className={`note-filter-btn ${activeFolder === f ? 'active' : ''}`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>
        <div className="note-filter-group">
          <span className="note-filter-label">Tags</span>
          <div className="note-filter-options">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`note-filter-tag ${activeTags.includes(tag) ? 'active' : ''}`}
              >
                {tag}
              </button>
            ))}
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="note-filter-clear"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="note-grid">
        {filtered.length > 0 ? (
          filtered.map((note) => (
            <NoteCard key={`${note.folder}/${note.slug}`} {...note} />
          ))
        ) : (
          <p className="note-empty">No notes match the selected filters.</p>
        )}
      </div>
    </div>
  )
}
