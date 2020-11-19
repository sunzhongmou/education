import {
  getSequenceFromNumber,
  getFullPermutationFromSequence
} from '../src/permutation'

describe('permutation tests', () => {
  it('get sequence from number', () => {
    const seq = getSequenceFromNumber(10)

    expect(seq.includes(5)).toBeTruthy()
    expect(seq.includes(0)).toBeTruthy()
    expect(seq.includes(10)).toBeTruthy()
  })

  it('get random permutation from number', () => {
    const n = 10
    const seq = getSequenceFromNumber(n)
    const per = getFullPermutationFromSequence(seq)

    expect(per.length).toEqual((n + 1) * (n + 1))
  })
})
