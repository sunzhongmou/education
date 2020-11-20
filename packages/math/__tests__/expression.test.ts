import {Expression, Operations} from '../src/expression'

describe('mathematical expression operations', () => {
  it('addition operation', () => {
    const expression = new Expression(5, Operations.ADD, 6)

    expect(expression.execute()).toEqual(11)
  })

  it('subtraction operation', () => {
    const expression = new Expression(6, Operations.SUB, 5)

    expect(expression.execute()).toEqual(1)
  })

  it('get raw expression', () => {
    const eAdd = new Expression(6, Operations.ADD, 5)
    const eSub = new Expression(6, Operations.SUB, 5)

    expect(eAdd.getRaw()).toEqual('6 + 5 =')
    expect(eSub.getRaw()).toEqual('6 - 5 =')
  })
})
