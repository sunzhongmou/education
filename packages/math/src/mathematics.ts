import {Exercise, QuestionType} from './exercise'
import {Expression, Operations} from './expression'
import {
  getDescendingPermutation,
  getFullPermutation,
  getIteratedPermutation,
  randomPickElements,
  shuffle
} from './permutation'
import {SourceInput} from './rule/sourceInput'
import {Rule} from '@sunzhongmou/design-pattern/lib/rule'

export class Mathematics {
  exercise: Exercise
  sequence: number[]
  addExpressions: Expression[]
  subExpressions: Expression[]

  constructor(sequence: number[]) {
    this.sequence = sequence
    this.exercise = new Exercise([], [])
    this.addExpressions = []
    this.subExpressions = []
  }

  generateAddQuestions(velocity: number, rules: Rule<SourceInput>): void {
    const per = shuffle(
      getFullPermutation(this.sequence).filter(ele =>
        rules.isSatisfied(new SourceInput(ele[0], ele[1]))
      )
    )
    const randomElements = randomPickElements(per, velocity)
    for (const ele of randomElements) {
      this.addExpressions.push(new Expression(ele[0], Operations.ADD, ele[1]))
    }
  }

  generateLoopAddQuestions(
    velocity: number,
    rules: Rule<SourceInput>,
    secondRules: Rule<SourceInput>
  ): void {
    const per = getFullPermutation(this.sequence)
    const iPer = getIteratedPermutation(this.sequence, per)

    const permutation = shuffle(
      iPer.filter(
        ele =>
          rules.isSatisfied(new SourceInput(ele[0], ele[1])) &&
          secondRules.isSatisfied(
            new SourceInput(
              new Expression(ele[0], Operations.ADD, ele[1]).execute(),
              ele[2]
            )
          )
      )
    )

    const randomElements = randomPickElements(permutation, velocity)
    for (const ele of randomElements) {
      const exp = new Expression(ele[0], Operations.ADD, ele[1])
      exp.addOperationSet(Operations.ADD, ele[2])
      this.addExpressions.push(exp)
    }
  }

  generateSubQuestions(velocity: number, rules: Rule<SourceInput>): void {
    const per = shuffle(
      getDescendingPermutation(this.sequence.reverse()).filter(ele =>
        rules.isSatisfied(new SourceInput(ele[0], ele[1]))
      )
    )
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
