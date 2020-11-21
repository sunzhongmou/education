import {MathematicsBuilder} from '../src/mathematics.builder'

describe('mathematics builder', () => {
  it('build 50 add sub questions within 10', () => {
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
