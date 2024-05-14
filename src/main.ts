export function add(numbers: string): number {
  if (numbers.length > 1) {
    return Number(numbers[0]) + Number(numbers[2])
  }
  if (numbers.length > 0) return Number(numbers)
  return 0
}
