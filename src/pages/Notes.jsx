import { Link } from 'react-router-dom'
import { notes } from '../lib/notes.js'

function formatDate(d) {
  if (!d) return ''
  const date = new Date(d)
  if (Number.isNaN(date.getTime())) return d
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Notes() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
      <p className="font-mono text-xs text-accent tracking-wide uppercase mb-4">Notes</p>
      <h1 className="font-display font-medium text-4xl sm:text-5xl text-ink mb-4">Writing</h1>
      <p className="text-muted max-w-xl mb-14">
        Every once in a while I feel inclined to write something. Perhaps about a project I'm working on, a new skill
          I'm picking up, technical difficulties I'm experiencing, or simple documentation. Regardless, it will be posted here.
      </p>

      <div className="max-w-prose border-t border-line">
        {notes.length === 0 && (
          <p className="text-muted py-8">No notes yet.</p>
        )}
        {notes.map((note) => (
          <Link
            key={note.slug}
            to={`/notes/${note.slug}`}
            className="group block py-7 border-b border-line"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-xl sm:text-2xl text-ink group-hover:text-accent transition-colors">
                {note.title}
              </h2>
              <span className="font-mono text-xs text-muted shrink-0">{formatDate(note.date)}</span>
            </div>
            {note.excerpt && (
              <p className="text-muted mt-2 leading-relaxed">{note.excerpt}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
