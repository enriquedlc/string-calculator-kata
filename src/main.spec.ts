import { describe, it, expect } from "vitest"

import { add } from "./main.js"

describe("string calculator", () => {
  it("returns 0 when empty string", () => {
    const result = add("")

    expect(result).toBe(0)
  })
  it("returns the value passed by parameter", () => {
    const result = add("1")

    expect(result).toBe(1)
  })
  it("returns the sum", () => {
    const result = add("1,2")

    expect(result).toBe(3)
  })
  it("returns the sum by 2 digit number", () => {
    const result = add("10,20")

    expect(result).toBe(30)
  })
})
