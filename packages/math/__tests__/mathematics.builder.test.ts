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
    console.log(result)

    expect(result.length).toEqual(50)
  })
})
