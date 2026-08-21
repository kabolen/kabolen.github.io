import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'

const index = [
  { to: '/work', label: 'work', desc: 'Selected projects, most recent first' },
  { to: '/about', label: 'about', desc: 'Background and how I work' },
  { to: '/resume', label: 'resume', desc: 'Experience, education, skills' },
  { to: '/notes', label: 'notes', desc: 'Occasional writing' },
  { to: '/contact', label: 'contact', desc: 'Get in touch' },
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10">
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-20 max-w-2xl">
        <p className="font-mono text-xs text-accent tracking-wide uppercase mb-5">{profile.role}</p>
        <h1 className="font-display font-medium text-[2.75rem] sm:text-6xl leading-[1.05] tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
          {profile.tagline}
        </p>
      </section>

      <section className="border-t border-line" aria-label="Site index">
        {index.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex items-baseline justify-between gap-6 py-5 border-b border-line hover:bg-accent-soft/40 -mx-6 px-6 sm:-mx-10 sm:px-10 transition-colors"
          >
            <span className="font-mono text-base sm:text-lg text-ink group-hover:text-accent transition-colors">
              {item.label}/
            </span>
            <span className="hidden sm:block font-body text-sm text-muted text-right">
              {item.desc}
            </span>
          </Link>
        ))}
      </section>
    </div>
  )
}
