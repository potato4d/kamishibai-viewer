import { Item } from '@/types/item'

export function parseItem(item: Item): string[] {
  const doc = new DOMParser().parseFromString(item.rendered_body, 'text/html')
  const elements = doc.querySelectorAll('html > body > *')
  const sections = [firstPage(item)]
  let i = 0
  for (let el of elements) {
    if (
      el.tagName === 'H1' ||
      el.tagName === 'H2' ||
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
    i++
  }
  return sections.filter(section => section)
}

const firstPage = (item: Item) =>
  `<div class="slideMode-Viewer_content slideMode-Viewer_content--firstSlide markdownContent"><h1>${
    item.title
  }</h1><div class="slideMode-Viewer_content--firstSlideAuthor">by ${
    item.user.id
  }</div></div>`
