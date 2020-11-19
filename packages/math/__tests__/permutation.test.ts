import {getSequenceFromNumber, getRandomPermutationFromSequence} from '../src/permutation'

describe('permutation tests', () => {
  it('get sequence from number', () => {
    const seq = getSequenceFromNumber(10)

    expect(seq.indexOf(5) >= 0).toBeTruthy()
    expect(seq.indexOf(0) >= 0).toBeTruthy()
    expect(seq.indexOf(10) >= 0).toBeTruthy()
  })

  it('get random permutation from number', () => {
    let n = 10
    const seq = getSequenceFromNumber(n)
    const per = getRandomPermutationFromSequence(seq)

    expect(per.length).toEqual((n + 1) * (n + 1))
  })

})
