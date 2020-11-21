import {Mathematics} from './mathematics'

export class MathematicsBuilder {
  withinTen: boolean
  addCapacity: number
  subCapacity: number
  fillCapacity: number

  constructor() {
    this.withinTen = true
    this.addCapacity = 25
    this.subCapacity = 25
    this.fillCapacity = 4
  }

  inTen(): MathematicsBuilder {
    this.withinTen = true
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
    const mathematics = new Mathematics(this.withinTen ? 10 : 0)
    mathematics.generateAddQuestions(this.addCapacity)
    mathematics.generateSubQuestions(this.subCapacity)
    mathematics.generateQuestions(
      this.addCapacity + this.subCapacity - this.fillCapacity,
      this.fillCapacity
    )
    return mathematics
  }
}
