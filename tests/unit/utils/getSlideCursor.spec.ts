import { getSlideCursor } from "@/utils/getSlideCursor";

describe('getSlideCursor.ts', () => {
  test('getSlideCursor', () => {
    expect(getSlideCursor(20, 520, 0)).toBe(1)
    expect(getSlideCursor(20, 520, 519)).toBe(20)
  })
})
