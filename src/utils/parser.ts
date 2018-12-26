import { Item } from '@/types/item'
import { sanitizeAllTags } from './sanitizer'

export function parseItem(item: Item): string[] {
  const doc = new DOMParser().parseFromString(item.rendered_body, 'text/html')
  const elements = doc.querySelectorAll('html > body > *')
  const sections = [firstPage(item)]
  for (let el of elements) {
    if (
      ['H1', 'H2'].includes(el.tagName) ||
      el.classList.contains('footnotes')
    ) {
      sections.push('')
    }
    if (el.tagName === 'HR') {
      sections.push('')
      continue
    }
    sections[sections.length - 1] = `${sections[sections.length - 1]}${
      el.outerHTML
    }`
  }
  return sections.filter(section => section)
}

const firstPage = (item: Item) => `
<div class="slideMode-Viewer_content slideMode-Viewer_content--firstSlide markdownContent">
  <h1>${sanitizeAllTags(item.title)}</h1>
  <div class="slideMode-Viewer_content--firstSlideAuthor">
    by ${sanitizeAllTags(item.user.id)}
  </div>
</div>
`
