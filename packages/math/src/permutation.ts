export function getSequenceFromNumber(n: number): Array<number> {
  return [...Array(n + 1).keys()]
}

export function getRandomPermutationFromSequence(sequence: Array<number>): Array<Array<number>> {
  return sequence.reduce(
    (permutation, currentValue) =>
      permutation.concat(sequence.map(ele => [currentValue, ele])),
    <number[][]>[]);
}