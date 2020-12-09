import {Mathematics} from './mathematics'
import {AddResultLessOrEqualTo10Rule} from './rule/AddResultLessOrEqualTo10Rule'
import {SourceInput} from './rule/sourceInput'
import {And} from '@sunzhongmou/design-pattern/lib/and'
import {AddResultGreaterOrEqualTo10Rule} from './rule/AddResultGreaterOrEqualTo10Rule'
import {AddResultLessOrEqualTo20Rule} from './rule/AddResultLessOrEqualTo20Rule'
import {SubResultGreaterOrEqualTo0Rule} from './rule/SubResultGreaterOrEqualTo0Rule'
import {DestOperandGreaterOrEqualTo10Rule} from './rule/DestOperandGreaterOrEqualTo10Rule'
import {getSequence} from './permutation'
import {DestOperandLessOrEqualTo10Rule} from './rule/DestOperandLessOrEqualTo10Rule'
import {OperandLessOrEqualTo10Rule} from './rule/OperandLessOrEqualTo10Rule'

export class MathematicsBuilder {
  maximum: number
  addCapacity: number
  subCapacity: number
  fillCapacity: number
  operandsInTen: boolean

  constructor() {
    this.maximum = 10
    this.addCapacity = 0
    this.subCapacity = 0
    this.fillCapacity = 0
    this.operandsInTen = false
  }

  withMaximum(maximum: number): MathematicsBuilder {
    this.maximum = maximum
    return this
  }

  withOperandsInTen(): MathematicsBuilder {
    this.operandsInTen = true
    return this
  }

  withAdd(capacity: number): MathematicsBuilder {
    this.addCapacity = capacity
    return this
  }

  withSub(capacity: number): MathematicsBuilder {
    this.subCapacity = capacity
    return this
  }

  withFill(capacity: number): MathematicsBuilder {
    this.fillCapacity = capacity
    return this
  }

  build(): Mathematics {
    if (this.maximum === 10) {
      return this.buildTen()
    } else {
      return this.buildTwenty()
    }
  }

  buildTen(): Mathematics {
    const mathematics = new Mathematics(getSequence(10))
    const rules = new And<SourceInput>([]).addRule(
      new AddResultLessOrEqualTo10Rule()
    )
    mathematics.generateAddQuestions(this.addCapacity, rules)
    const subRules = new And<SourceInput>([]).addRule(
      new SubResultGreaterOrEqualTo0Rule()
    )
    mathematics.generateSubQuestions(this.subCapacity, subRules)
    mathematics.generateQuestions(
      this.addCapacity + this.subCapacity - this.fillCapacity,
      this.fillCapacity
    )
    return mathematics
  }

  buildTwenty(): Mathematics {
    const mathematics = new Mathematics(getSequence(20))
    const rules = new And<SourceInput>([])
      .addRule(new AddResultGreaterOrEqualTo10Rule())
      .addRule(new AddResultLessOrEqualTo20Rule())
    if (this.operandsInTen) {
      rules
        .addRule(new DestOperandLessOrEqualTo10Rule())
        .addRule(new OperandLessOrEqualTo10Rule())
    }
    mathematics.generateAddQuestions(this.addCapacity, rules)
    const subRules = new And<SourceInput>([])
      .addRule(new SubResultGreaterOrEqualTo0Rule())
      .addRule(new DestOperandGreaterOrEqualTo10Rule())
    mathematics.generateSubQuestions(this.subCapacity, subRules)
    mathematics.generateQuestions(
      this.addCapacity + this.subCapacity - this.fillCapacity,
      this.fillCapacity
    )
    return mathematics
  }
}
