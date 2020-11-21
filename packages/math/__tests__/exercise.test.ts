import {Exercise, QuestionType} from '../src/exercise'
import {Expression, Operations} from '../src/expression'

describe('exercise behaviors', () => {
  it('given expressions when generate raw questions then raw question list created', () => {
    const rawQuestions = [
      new Expression(6, Operations.ADD, 4),
      new Expression(6, Operations.SUB, 4)
    ]
    const exercise = new Exercise(rawQuestions, [])

    expect(exercise.generateRawQuestions()).toEqual(['6 + 4 =', '6 - 4 ='])
  })

  it('given expressions when generate fill questions then fill question list created', () => {
    const fillQuestions = [
      new Expression(6, Operations.ADD, 4),
      new Expression(6, Operations.SUB, 4)
    ]
    const exercise = new Exercise([], fillQuestions)
    expect(exercise.generateFillQuestions()[0].includes('__')).toBeTruthy()
    expect(exercise.generateFillQuestions()[1].includes('__')).toBeTruthy()
  })

  it('given expressions when generate raw and fill questions then mixed question list created', () => {
    const questions = [
      new Expression(6, Operations.ADD, 4),
      new Expression(6, Operations.SUB, 4)
    ]
    const exercise = new Exercise(questions, questions)
    const generatedQuestions = exercise.generate()

    expect(generatedQuestions.length).toEqual(4)
    expect(generatedQuestions[0]).toEqual('6 + 4 =')
    expect(generatedQuestions[1]).toEqual('6 - 4 =')
    expect(generatedQuestions[2].includes('__')).toBeTruthy()
    expect(generatedQuestions[3].includes('__')).toBeTruthy()
  })

  it('given expressions with type when check specified questions list then new added question found', () => {
    const exercise = new Exercise([], [])
    exercise.addQuestion(new Expression(6, Operations.ADD, 4), QuestionType.RAW)
    exercise.addQuestion(
      new Expression(6, Operations.ADD, 4),
      QuestionType.FILL
    )
    expect(exercise.rawQuestions.length).toBe(1)
    expect(exercise.fillQuestions.length).toBe(1)
  })
})
