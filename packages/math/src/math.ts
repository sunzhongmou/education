import {Exercise, QuestionType} from './exercise'
import {Expression, Operations} from './expression'
import {
  getDescendingPermutation,
  getFullPermutation,
  getSequence,
  randomPickElements,
  shuffle
} from './permutation'

export class Math {
  maximum: number
  exercise: Exercise
  sequence: number[]
  addExpressions: Expression[]
  subExpressions: Expression[]

  constructor() {
    this.maximum = 10
    this.exercise = new Exercise([], [])
    this.sequence = getSequence(10)
    this.addExpressions = []
    this.subExpressions = []
  }

  generateAddQuestions(velocity: number): void {
    const per = shuffle(
      getFullPermutation(this.sequence).filter(
        ele => ele[0] + ele[1] <= this.maximum
      )
    )
    const randomElements = randomPickElements(per, velocity)
    for (const ele of randomElements) {
      this.addExpressions.push(new Expression(ele[0], Operations.ADD, ele[1]))
    }
  }

  generateSubQuestions(velocity: number): void {
    const per = shuffle(getDescendingPermutation(this.sequence))
    const randomElements = randomPickElements(per, velocity)
    for (const ele of randomElements) {
      this.subExpressions.push(new Expression(ele[0], Operations.SUB, ele[1]))
    }
  }

  // generateQuestions(rawVelocity: number, fillVelocity: number): void {
  //   let expressions: Expression[] = []
  //   expressions = expressions.concat(this.addExpressions).concat(this.subExpressions)
  //  
  // }
}
