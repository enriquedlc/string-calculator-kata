export function add(numbers: string): number {
  if (numbers.length > 1) {
    const splittedNumbers = numbers.split(",")
    return Number(splittedNumbers[0]) + Number(splittedNumbers[1])
  }
  if (numbers.length > 0) return Number(numbers)
  return 0
}
