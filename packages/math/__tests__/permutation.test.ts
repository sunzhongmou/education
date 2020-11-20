import {
  getSequence,
  getFullPermutation,
  getDescendingPermutation,
  randomPickElement
} from '../src/permutation'

describe('permutation tests', () => {
  it('get sequence from number', () => {
    const seq = getSequence(10)

    expect(seq.includes(5)).toBeTruthy()
    expect(seq.includes(0)).toBeTruthy()
    expect(seq.includes(10)).toBeTruthy()
    expect(seq[5] > seq[4]).toBeTruthy()
  })

  it('get full permutation from number', () => {
    const n = 10
    const seq = getSequence(n)
    const per = getFullPermutation(seq)

    expect(per.length).toEqual((n + 1) * (n + 1))
  })

  it('get descending permutation from number', () => {
    const n = 10
    const seq = getSequence(n).reverse()
    const per = getDescendingPermutation(seq)
    const ele = randomPickElement(per)

    expect(per.length).toEqual((n * (n + 1)) / 2)
    expect(ele[0] > ele[1]).toBeTruthy()
  })

  it('get random element from sequence', () => {
    const n = 10
    const seq = getSequence(n)
    const per = getFullPermutation(seq)
    const ele = randomPickElement(per)

    expect(per.includes(ele)).toBeTruthy()
  })
})
