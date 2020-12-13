import {
  getSequence,
  getFullPermutation,
  getDescendingPermutation,
  randomPickElement,
  randomPickElements,
  getIteratedPermutation
} from '../src/permutation'

describe('permutation tests', () => {
  it('given number when generate sequence then step 1 sequence created', () => {
    const seq = getSequence(10)

    expect(seq.includes(5)).toBeTruthy()
    expect(seq.includes(0)).toBeTruthy()
    expect(seq.includes(10)).toBeTruthy()
    expect(seq[5] > seq[4]).toBeTruthy()
  })

  it('given sequence when get full permutation then permutation list created', () => {
    const n = 10
    const seq = getSequence(n)
    const per = getFullPermutation(seq)

    expect(per.length).toEqual((n + 1) * (n + 1))
    expect(per[0].length).toEqual(2)
  })

  it('given sequence and permutation when get iterated permutation then permutation list created', () => {
    const n = 10
    const seq = getSequence(n)
    const per = getFullPermutation(seq)
    const iPer = getIteratedPermutation(seq, per)

    expect(iPer.length).toEqual((n + 1) * (n + 1) * (n + 1))
    expect(iPer[0].length).toEqual(3)
  })

  it('given descending sequence when get permutation then reverse permutation list created', () => {
    const n = 10
    const seq = getSequence(n).reverse()
    const per = getDescendingPermutation(seq)
    const ele = randomPickElement(per)

    expect(per.length).toEqual((n * (n + 1)) / 2)
    expect(ele[0] > ele[1]).toBeTruthy()
  })

  it('given random index when pick element then element in list found', () => {
    const n = 10
    const seq = getSequence(n)
    const per = getFullPermutation(seq)
    const ele = randomPickElement(per)

    expect(per.includes(ele)).toBeTruthy()
  })

  it('given list when pick elements with specified capacity then list with right capacity created', () => {
    const per = [[1], [2], [3], [4], [5]]
    const elements = randomPickElements(per, 6)

    expect(elements.length).toBe(6)
  })
})
