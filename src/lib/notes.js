// Loads every markdown file in src/content/notes/, parses its frontmatter,
// and exposes a simple list + lookup-by-slug.

const files = import.meta.glob('../content/notes/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const [, frontmatter, content] = match
  const data = {}
  frontmatter.split('\n').forEach((line) => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    data[key] = value
  })
  return { data, content: content.trim() }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

export const notes = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      title: data.title || 'Untitled',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getNote(slug) {
  return notes.find((n) => n.slug === slug)
}
