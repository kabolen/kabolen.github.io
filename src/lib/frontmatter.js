// Shared by any content type that stores entries as markdown files with
// optional YAML-style frontmatter (currently notes and project write-ups).

export function parseFrontmatter(raw) {
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

export function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}
