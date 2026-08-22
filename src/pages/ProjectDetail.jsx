import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { projects } from '../data/projects.js'
import { getProjectContent } from '../lib/projectContent.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const content = getProjectContent(slug)

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
      <Link to="/work" className="font-mono text-xs text-muted hover:text-accent transition-colors">
        ← work
      </Link>

      <article className="max-w-prose mt-8">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <p className="font-mono text-xs text-accent uppercase tracking-wide">{project.role}</p>
          <span className="font-mono text-xs text-muted shrink-0">{project.year}</span>
        </div>
        <h1 className="font-display font-medium text-3xl sm:text-4xl text-ink mb-5 leading-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-muted border border-line px-2 py-1">
              {tag}
            </span>
          ))}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-accent hover:underline ml-2"
            >
              Live site ↗
            </a>
          )}
        </div>
        <div className="prose-notes">
          {content ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          ) : (
            <p className="text-muted">Detailed write-up coming soon.</p>
          )}
        </div>
      </article>
    </div>
  )
}
