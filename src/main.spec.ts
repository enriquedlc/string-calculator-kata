import { describe, it, expect } from "vitest"

import { add } from "./main.js"

describe("string calculator", () => {
  it("returns 0 when empty string", () => {
    const result = add("")

    expect(result).toBe(0)
  })
  it("returns a single number", () => {
    const result = add("1")

    expect(result).toBe(1)
  })
  it("returns the sum of two numbers", () => {
    const result = add("1,2")

    expect(result).toBe(3)
  })
  it("returns the sum of two numbers of two digits", () => {
    const result = add("10,20")

    expect(result).toBe(30)
  })
  it("returns a number of two digits", () => {
    const result = add("10")

    expect(result).toBe(10)
  })
})
