export function getSequence(n: number): number[] {
  return [...Array(n + 1).keys()]
}

export function getFullPermutation(sequence: number[]): number[][] {
  return sequence.reduce(
    (permutation, currentValue) =>
      permutation.concat(sequence.map(ele => [currentValue, ele])),
    <number[][]>[]
  )
}

export function getDescendingPermutation(sequence: number[]): number[][] {
  const permutation = <number[][]>[]
  return permutation.concat(
    ...sequence.map((currentValue, index) =>
      sequence.slice(index + 1).map(followValue => [currentValue, followValue])
    )
  )
}

export function randomPickElement(sequence: number[][]): number[] {
  return sequence[Math.floor(Math.random() * sequence.length)]
}
