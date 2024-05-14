export function add(numbers: string): number {
  const splittedStringNumbers = numbers.split(",")

  if (splittedStringNumbers.length > 1) {
    const numbersArray = splittedStringNumbers.map((n) => Number(n))
    return numbersArray.reduce((a, b) => a + b, 0)
  }
  if (splittedStringNumbers.length === 1) return Number(splittedStringNumbers[0])
  return 0
}
