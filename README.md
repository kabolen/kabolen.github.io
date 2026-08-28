# Kade Bolen Portfolio

This is a minimal, editorial-style portfolio built with React, React Router, and Tailwind CSS. It contains five pages: 
home, work, about, resume, notes (just a blog), and contact.

## To run locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

### Blog post template

Create a new file in `src/content/notes` containing the following:

```
---
title: New post
date: 2026-08-20
excerpt: One sentence to describe the post.
---

Content of the post lives here.
```

It'll appear on the Notes page automatically, newest first.

### Project write-up template

Each entry in `src/data/projects.js` has a `slug`. To give that project a
detailed page (linked from the Work page as "Read more"), create
`src/content/projects/<slug>.md` containing the write-up in plain markdown —
no frontmatter needed. Images go in `public/projects/media/` and are
referenced with an absolute path, e.g. `![alt](/projects/media/image.png)`.

If no matching file exists for a project's slug, its page just shows
"Detailed write-up coming soon."