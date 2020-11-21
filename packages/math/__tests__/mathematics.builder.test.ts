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
})
