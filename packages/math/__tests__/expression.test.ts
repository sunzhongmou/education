import {Expression, Operations} from '../src/expression'

describe('mathematical expression operations', () => {
  it('add operation', () => {
    const expression = new Expression(5, Operations.ADD, 6)

    expect(expression.execute()).toEqual(11)
  })
})
