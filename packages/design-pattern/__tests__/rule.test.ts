import {And} from '../src/and'
import {Source} from './source'
import {BiggerThan4Rule} from './biggerThan4Rule'
import {LessThan6Rule} from './lessThan6Rule'
import {Or} from '../src/or'
import {BiggerThan8Rule} from './biggerThan8Rule'

describe('rule tests', () => {
  it('given bigger than 4 rule and less than 4 rule when check and then passed with result 5', () => {
    const rule5 = new And<Source>([])
      .addRule(new BiggerThan4Rule())
      .addRule(new LessThan6Rule())

    expect(rule5.isSatisfied(new Source(2, 3))).toBeTruthy()
    expect(rule5.isSatisfied(new Source(2, 2))).toBeFalsy()
    expect(rule5.isSatisfied(new Source(3, 3))).toBeFalsy()
  })

  it('given bigger than 8 rule and less than 6 rule when check or then passed with outer scope', () => {
    const rule7 = new Or<Source>([])
      .addRule(new BiggerThan8Rule())
      .addRule(new LessThan6Rule())

    expect(rule7.isSatisfied(new Source(5, 5))).toBeTruthy()
    expect(rule7.isSatisfied(new Source(2, 2))).toBeTruthy()
    expect(rule7.isSatisfied(new Source(4, 3))).toBeFalsy()
  })
})
