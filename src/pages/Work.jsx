import { projects } from '../data/projects.js'

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
      <p className="font-mono text-xs text-accent tracking-wide uppercase mb-4">Work</p>
      <h1 className="font-display font-medium text-4xl sm:text-5xl text-ink mb-4">Selected projects</h1>
      <p className="text-muted max-w-xl mb-14">
        A handful of things I've worked on, which I'd like to share here.
      </p>

      <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
        {projects.map((p) => (
          <article key={p.slug} className="bg-paper p-7 flex flex-col">
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h2 className="font-display text-xl text-ink">{p.title}</h2>
              <span className="font-mono text-xs text-muted shrink-0">{p.year}</span>
            </div>
            <p className="font-mono text-xs text-accent mb-3">{p.role}</p>
            <p className="text-sm text-muted leading-relaxed flex-1">{p.summary}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-muted border border-line px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-accent mt-5 hover:underline"
              >
                View →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
