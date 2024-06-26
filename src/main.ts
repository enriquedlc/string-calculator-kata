function sum(a: number, b: number) {
  return a + b
}

function parse(input: string) {
  if (input.startsWith("//")) {
    return [input[2], input.substring(3)]
  }
  const delimiter = ","
  const body = input
  return [delimiter, body] as const
}

export function add(numbers: string): number {
  const [delimiter, body] = parse(numbers)
  return body.split("\n").join(delimiter).split(delimiter).map(Number).reduce(sum, 0)
}
