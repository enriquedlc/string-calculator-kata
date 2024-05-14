export function add(numbers: string): number {
  const splittedNumbers = numbers.split(",")

  if (splittedNumbers.length > 1) {
    return Number(splittedNumbers[0]) + Number(splittedNumbers[1])
  }
  if (splittedNumbers.length === 1) return Number(splittedNumbers[0])
  return 0
}
