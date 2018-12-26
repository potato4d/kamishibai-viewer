const sanitize = require('sanitize-html')

export function sanitizeAllTags(html: string): string {
  return sanitize(html, {
    allowedTags: []
  })
}
