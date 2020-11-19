export function getSequenceFromNumber(n: number): number[] {
  return [...Array(n + 1).keys()]
}

export function getFullPermutationFromSequence(sequence: number[]): number[][] {
  return sequence.reduce(
    (permutation, currentValue) =>
      permutation.concat(sequence.map(ele => [currentValue, ele])),
    <number[][]>[]
  )
}
