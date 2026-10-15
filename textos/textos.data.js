import { createContentLoader } from 'vitepress'

const DEFAULT_IMAGE = '/media/04-banner-horizontal.jpeg'

function minutes(src) {
  const words = (src || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function isoDate(d) {
  if (d instanceof Date) return d.toISOString().slice(0, 10)
  return String(d ?? '').slice(0, 10)
}

export default createContentLoader('textos/*.md', {
  includeSrc: true,
  transform(raw) {
    return raw
      .filter((p) => !/\/textos\/?$/.test(p.url))
      .map((p) => {
        const fm = p.frontmatter ?? {}
        const slug = p.url.split('/').filter(Boolean).pop()
        const date = isoDate(fm.date)
        return {
          href: `/textos/${slug}`,
          image: fm.image ?? DEFAULT_IMAGE,
          imageAlt: fm.imageAlt ?? fm.title ?? slug,
          title: fm.title ?? slug,
          desc: fm.description ?? '',
          tag: fm.tag ?? [fm.kind, date].filter(Boolean).join(' · '),
          meta: fm.meta ?? `→ leer · ${minutes(p.src)} min`,
          date
        }
      })
      .sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.title.localeCompare(b.title, 'es'))
  }
})
