import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getNote } from '../lib/notes.js'

function formatDate(d) {
  if (!d) return ''
  const date = new Date(d)
  if (Number.isNaN(date.getTime())) return d
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function NotePost() {
  const { slug } = useParams()
  const note = getNote(slug)

  if (!note) return <Navigate to="/notes" replace />

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
      <Link to="/notes" className="font-mono text-xs text-muted hover:text-accent transition-colors">
        ← notes
      </Link>

      <article className="max-w-prose mt-8">
        <p className="font-mono text-xs text-muted mb-4">{formatDate(note.date)}</p>
        <h1 className="font-display font-medium text-3xl sm:text-4xl text-ink mb-10 leading-tight">
          {note.title}
        </h1>
        <div className="prose-notes">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
