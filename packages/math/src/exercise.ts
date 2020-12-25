import * as DDD from '@sunzhongmou/ddd'
import {v4 as uuid4} from 'uuid'
import {Expression} from './expression'

export enum QuestionType {
  RAW,
  FILL
}

export class Exercise implements DDD.Entity {
  id: string
  rawQuestions: Expression[]
  fillQuestions: Expression[]

  constructor(rawQuestion: Expression[], fillQuestion: Expression[]) {
    this.id = uuid4()
    this.rawQuestions = rawQuestion
    this.fillQuestions = fillQuestion
  }

  sameIdentityAs(other: DDD.Entity): boolean {
    return this.id === other.id
  }

  addQuestion(question: Expression, type: QuestionType): void {
    switch (type) {
      case QuestionType.FILL:
        this.fillQuestions.push(question)
        break
      case QuestionType.RAW:
        this.rawQuestions.push(question)
        break
      default:
        this.rawQuestions.push(question)
    }
  }

  generateRawQuestions(): string[] {
    const questionList: string[] = []
    for (const exp of this.rawQuestions) {
      questionList.push(exp.getRaw())
    }
    return questionList
  }

  generateFillQuestions(): string[] {
    const questionList: string[] = []
    for (const exp of this.fillQuestions) {
      let rawQuestion = exp.getRaw()
      const hiddenOperand = Math.random() >= 0.5
      if (hiddenOperand) {
        rawQuestion = rawQuestion.replace(
          `${exp.operationSets[0].operand}`, //TODO: need refactor
          '__'
        )
      } else {
        rawQuestion = rawQuestion.replace(`${exp.destinationOperand}`, '__')
      }
      rawQuestion = rawQuestion.replace('=', `= ${exp.execute()}`)
      questionList.push(rawQuestion)
    }
    return questionList
  }

  generate(): string[] {
    let questionList: string[] = []
    questionList = questionList.concat(this.generateRawQuestions())
    questionList = questionList.concat(this.generateFillQuestions())
    return questionList
  }
}
