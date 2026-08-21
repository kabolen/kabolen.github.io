import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile.js'

const links = [
  { to: '/work', label: 'work' },
  { to: '/about', label: 'about' },
  { to: '/resume', label: 'resume' },
  { to: '/notes', label: 'notes' },
  { to: '/contact', label: 'contact' },
]

export default function Nav() {
  return (
    <header className="border-b border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between gap-6">
        <NavLink to="/" className="font-mono text-sm tracking-tight text-ink">
          ~/{profile.name.toLowerCase().replace(/\s+/g, '-')}
        </NavLink>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-muted">
          {links.map((link, i) => (
            <span key={link.to} className="flex items-center gap-x-5">
              {i > 0 && <span className="text-line select-none" aria-hidden="true">/</span>}
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `path-link ${isActive ? 'text-ink' : 'hover:text-ink'} transition-colors`
                }
                data-active={undefined}
              >
                {link.label}
              </NavLink>
            </span>
          ))}
        </nav>
      </div>
    </header>
  )
}
