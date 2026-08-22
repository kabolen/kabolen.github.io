// Loads every markdown file in src/content/projects/ and exposes the body content keyed by slug.

import { parseFrontmatter, slugFromPath } from './frontmatter.js'

const files = import.meta.glob('../content/projects/*.md', { query: '?raw', import: 'default', eager: true })

const contentBySlug = Object.fromEntries(
  Object.entries(files).map(([path, raw]) => [slugFromPath(path), parseFrontmatter(raw).content])
)

export function getProjectContent(slug) {
  return contentBySlug[slug]
}
