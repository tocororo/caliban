import { createContentLoader } from 'vitepress'

const DEFAULT_IMAGE = '/media/03-banner-horizontal.jpeg'

function isoDate(d) {
  if (d instanceof Date) return d.toISOString().slice(0, 10)
  return String(d ?? '').slice(0, 10)
}

export default createContentLoader('encuentros/*.md', {
  transform(raw) {
    return raw
      .filter((p) => !/\/encuentros\/?$/.test(p.url))
      .map((p) => {
        const fm = p.frontmatter ?? {}
        const slug = p.url.split('/').filter(Boolean).pop()
        const date = isoDate(fm.date)
        const num = slug.match(/^(\d+)-/)?.[1]
        const tag =
          fm.tag ?? (num && date ? `${num} · ${date}` : date ? `Encuentro · ${date}` : 'Guía')
        return {
          href: `/encuentros/${slug}`,
          image: fm.image ?? DEFAULT_IMAGE,
          imageAlt: fm.imageAlt ?? fm.title ?? slug,
          title: fm.title ?? slug,
          desc: fm.description ?? '',
          tag,
          meta: fm.meta ?? '→ leer la crónica',
          date,
          session: Boolean(num)
        }
      })
      .sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.title.localeCompare(b.title, 'es'))
  }
})
