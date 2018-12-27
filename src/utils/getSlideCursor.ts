export function getSlideCursor(
  pageLength: number,
  elementWidth: number,
  clientX: number
) {
  return ~~((clientX / elementWidth) * pageLength) + 1
}
