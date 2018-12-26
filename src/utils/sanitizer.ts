import xss from 'xss'

export function sanitizeAllTags(html: string): string {
  return xss(html)
}
