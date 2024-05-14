function sum(a: number, b: number) {
  return a + b
}

export function add(numbers: string): number {
  return numbers
    .split(",")
    .map((n) => Number(n))
    .reduce(sum, 0)
}
