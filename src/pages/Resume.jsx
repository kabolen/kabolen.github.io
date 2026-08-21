import { profile } from '../data/profile.js'

export default function Resume() {
  const { experience, education, skills, downloadUrl } = profile.resume

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
      <div className="flex items-start justify-between gap-6 mb-14 flex-wrap">
        <div>
          <p className="font-mono text-xs text-accent tracking-wide uppercase mb-4">Resume</p>
          <h1 className="font-display font-medium text-4xl sm:text-5xl text-ink">Experience</h1>
        </div>
        <a
          href={downloadUrl}
          download
          className="font-mono text-sm text-ink border border-line px-4 py-2 hover:border-accent hover:text-accent transition-colors shrink-0"
        >
          Download PDF ↓
        </a>
      </div>

      <div className="max-w-prose">
        <section className="mb-16">
          <h2 className="font-mono text-xs text-muted tracking-wide uppercase mb-6">Experience</h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.role + job.org}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="font-display text-xl text-ink">{job.role}</h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="font-mono text-xs text-accent mt-1 mb-2">{job.org}</p>
                <p className="text-muted leading-relaxed">{job.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-mono text-xs text-muted tracking-wide uppercase mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((ed) => (
              <div key={ed.school} className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-display text-lg text-ink">{ed.school}</h3>
                  <p className="text-sm text-muted">{ed.credential}</p>
                </div>
                <span className="font-mono text-xs text-muted">{ed.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-mono text-xs text-muted tracking-wide uppercase mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="font-mono text-xs text-ink border border-line px-3 py-1.5">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
