import { describe, it, expect } from "vitest"
import { add } from "./main.js"

describe("string calculator", () => {
  it("returns 0 when empty string", () => {
    const result = add("")

    expect(result).toBe(0)
  })
})
