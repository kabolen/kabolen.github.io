// Loads every markdown file in src/content/notes/, parses its frontmatter,
// and exposes a simple list + lookup-by-slug.

import { parseFrontmatter, slugFromPath } from './frontmatter.js'

const files = import.meta.glob('../content/notes/*.md', { query: '?raw', import: 'default', eager: true })

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
