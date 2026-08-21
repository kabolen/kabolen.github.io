import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
      <p className="font-mono text-xs text-accent tracking-wide uppercase mb-4">Contact</p>
      <h1 className="font-display font-medium text-4xl sm:text-5xl text-ink mb-8">Get in touch</h1>

      <div className="max-w-prose">
        <p className="text-lg text-ink/90 leading-relaxed mb-10">
          The fastest way to reach me is email. I try to reply within a couple of days.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-block font-mono text-lg text-ink border-b border-accent pb-1 hover:text-accent transition-colors"
        >
          {profile.email}
        </a>

        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-12 font-mono text-sm text-muted">
          {profile.social.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
