import {Mathematics} from './mathematics'
import {AddResultLessOrEqualTo10Rule} from "./rule/AddResultLessOrEqualTo10Rule";
import {SourceInput} from "./rule/sourceInput";
import {And} from "@sunzhongmou/design-pattern/lib/and";

export class MathematicsBuilder {
  maximum: number
  addCapacity: number
  subCapacity: number
  fillCapacity: number

  constructor() {
    this.maximum = 10
    this.addCapacity = 0
    this.subCapacity = 0
    this.fillCapacity = 0
  }

  withMaximum(maximum: number): MathematicsBuilder {
    this.maximum = maximum
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
    const mathematics = new Mathematics(this.maximum)
    const rules = new And<SourceInput>([]).addRule(new AddResultLessOrEqualTo10Rule())
    mathematics.generateAddQuestions(this.addCapacity, rules)
    mathematics.generateSubQuestions(this.subCapacity)
    mathematics.generateQuestions(
      this.addCapacity + this.subCapacity - this.fillCapacity,
      this.fillCapacity
    )
    return mathematics
  }
}
