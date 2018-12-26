export function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve()
    }, ms)
  })
}
