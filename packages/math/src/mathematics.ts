import {Exercise, QuestionType} from './exercise'
import {Expression, Operations} from './expression'
import {
  getDescendingPermutation,
  getFullPermutation,
  getSequence,
  randomPickElements,
  shuffle
} from './permutation'

export class Mathematics {
  maximum: number
  exercise: Exercise
  sequence: number[]
  addExpressions: Expression[]
  subExpressions: Expression[]

  constructor(max: number) {
    this.maximum = max
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
    const per = shuffle(getDescendingPermutation(this.sequence.reverse()))
    const randomElements = randomPickElements(per, velocity)
    for (const ele of randomElements) {
      this.subExpressions.push(new Expression(ele[0], Operations.SUB, ele[1]))
    }
  }

  generateQuestions(rawVelocity: number, fillVelocity: number): void {
    let expressions: Expression[] = []
    expressions = shuffle(
      expressions.concat(this.addExpressions).concat(this.subExpressions)
    )
    for (let i = 0; i < rawVelocity; i++) {
      this.exercise.addQuestion(expressions[i], QuestionType.RAW)
    }

    for (let j = rawVelocity; j < rawVelocity + fillVelocity; j++) {
      this.exercise.addQuestion(expressions[j], QuestionType.FILL)
    }
  }

  generate(): string[] {
    return this.exercise.generate()
  }
}
