import {Expression, Operations} from '../src/expression'

describe('mathematical expression operations', () => {
  it('given operands with add operation when execute expression then right result received', () => {
    const expression = new Expression(5, Operations.ADD, 6)

    expect(expression.execute()).toEqual(11)
  })

  it('given operands with sub operation when execute expression then right result received', () => {
    const expression = new Expression(6, Operations.SUB, 5)

    expect(expression.execute()).toEqual(1)
  })

  it('given expression when get raw then raw question formatted', () => {
    const eAdd = new Expression(6, Operations.ADD, 5)
    const eSub = new Expression(6, Operations.SUB, 5)

    expect(eAdd.getRaw()).toEqual('6 + 5 =')
    expect(eSub.getRaw()).toEqual('6 - 5 =')
  })

  it('given loop add operation when execute expression then right result received', () => {
    const expression = new Expression(5, Operations.ADD, 6)
    expression.addOperationSet(Operations.ADD, 7)

    expect(expression.execute()).toEqual(18)
  })

  it('given loop sub operation when execute expression then right result received', () => {
    const expression = new Expression(6, Operations.SUB, 5)
    expression.addOperationSet(Operations.SUB, 1)

    expect(expression.execute()).toEqual(0)
  })

  it('given loop mix operation when execute expression then right result received', () => {
    const expression = new Expression(5, Operations.ADD, 6)
    expression.addOperationSet(Operations.ADD, 7)
    expression.addOperationSet(Operations.SUB, 13)

    expect(expression.execute()).toEqual(5)
  })

  it('given loop expression when get raw then raw question formatted', () => {
    const eAdd = new Expression(6, Operations.ADD, 5)
    eAdd.addOperationSet(Operations.ADD, 7)
    eAdd.addOperationSet(Operations.SUB, 13)

    const eSub = new Expression(6, Operations.SUB, 5)
    eSub.addOperationSet(Operations.ADD, 7)
    eSub.addOperationSet(Operations.SUB, 13)

    expect(eAdd.getRaw()).toEqual('6 + 5 + 7 - 13 =')
    expect(eSub.getRaw()).toEqual('6 - 5 + 7 - 13 =')
  })
})
