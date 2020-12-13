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

export function getIteratedPermutation(
  sequence: number[],
  permutation: number[][]
): number[][] {
  return sequence.reduce(
    (iteratedPermutation, currentValue) =>
      iteratedPermutation.concat(
        permutation.map(ele => [...ele, currentValue])
      ),
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
  return sequence[takeRandomValueFromNumber(sequence.length)]
}

export function randomPickElements(
  sequence: number[][],
  capacity: number
): number[][] {
  const startIndex = takeRandomValueFromNumber(sequence.length)
  let sourceArray = sequence
  if (startIndex + capacity > sequence.length) {
    sourceArray = sequence.concat(sequence)
  }

  return sourceArray.slice(startIndex, startIndex + capacity)
}

function takeRandomValueFromNumber(n: number): number {
  return Math.floor(Math.random() * n)
}

export function shuffle<T>(array: T[]): T[] {
  let currentIndex: number = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
