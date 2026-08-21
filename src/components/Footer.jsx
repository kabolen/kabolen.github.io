import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex items-center gap-5">
          {profile.social.map((s) => (
            <a key={s.label} href={s.url} className="hover:text-ink transition-colors" target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
