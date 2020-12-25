import {MathematicsBuilder} from '../src/mathematics.builder'

describe('mathematics builder', () => {
  it('given builder with add and sub and fill expression capacity when build and generate raw question then question list created', () => {
    const builder = new MathematicsBuilder()
    const mathematics = builder
      .withAdd(25)
      .withSub(25)
      .withFill(4)
      .build()
    const result = mathematics.generate()

    expect(result.length).toEqual(50)
  })

  it('given builder with add and sub and fill expression with maximum result capacity when build and generate raw question then question list created', () => {
    const builder = new MathematicsBuilder()
    const mathematics = builder
      .withAdd(25)
      .withSub(25)
      .withFill(4)
      .withMaximum(20)
      .build()
    const result = mathematics.generate()

    expect(result.length).toEqual(50)
  })

  it('given maximum 20 and operands within 10 when build and generate raw question then question list created', () => {
    const builder = new MathematicsBuilder()
    const mathematics = builder
      .withAdd(50)
      .withSub(0)
      .withFill(4)
      .withMaximum(20)
      .withOperandsInTen()
      .build()
    const result = mathematics.generate()

    expect(result.length).toEqual(50)
    expect(result[0].includes('11')).toBeFalsy()
    expect(result[0].includes('13')).toBeFalsy()
    expect(result[0].includes('15')).toBeFalsy()
    expect(result[0].includes('17')).toBeFalsy()
    expect(result[0].includes('19')).toBeFalsy()
  })

  it('given maximum 20 and operands within 10 when build loop and generate raw question then question list created', () => {
    const builder = new MathematicsBuilder()
    const mathematics = builder
      .withAdd(50)
      .withSub(0)
      .withFill(4)
      .withMaximum(20)
      .withOperandsInTen()
      .withLoopAdd()
      .build()
    const result = mathematics.generate()

    expect(result.length).toEqual(50)
    expect(result[0].includes('12')).toBeFalsy()
    expect(result[0].includes('14')).toBeFalsy()
    expect(result[0].includes('16')).toBeFalsy()
    expect(result[0].includes('18')).toBeFalsy()
    expect(result[0].includes('20')).toBeFalsy()
  })
})
