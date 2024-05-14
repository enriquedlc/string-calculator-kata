export function add(numbers: string): number {
  const splittedNumbers = numbers.split(",")

  if (splittedNumbers.length > 1) {
    const numArray = splittedNumbers.map((n) => Number(n))
    return numArray.reduce((a, b) => a + b, 0)
  }
  if (splittedNumbers.length === 1) return Number(splittedNumbers[0])
  return 0
}
