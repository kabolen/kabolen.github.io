import { profile } from '../data/profile.js'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
      <p className="font-mono text-xs text-accent tracking-wide uppercase mb-4">About</p>
      <h1 className="font-display font-medium text-4xl sm:text-5xl text-ink mb-4">
        {profile.name}
      </h1>
      <p className="font-mono text-sm text-muted mb-14">{profile.location}</p>

      <div className="max-w-prose space-y-6">
        {profile.bio.map((para, i) => (
          <p key={i} className="text-lg text-ink/90 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}
