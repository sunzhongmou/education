import {Exercise, QuestionType} from '../src/exercise'
import {Expression, Operations} from '../src/expression'

describe('exercise behaviors', () => {
  it('generate raw questions', () => {
    const rawQuestions = [
      new Expression(6, Operations.ADD, 4),
      new Expression(6, Operations.SUB, 4)
    ]
    const exercise = new Exercise(rawQuestions, [])

    expect(exercise.generateRawQuestions()).toEqual(['6 + 4 =', '6 - 4 ='])
  })

  it('generate fill questions', () => {
    const fillQuestions = [
      new Expression(6, Operations.ADD, 4),
      new Expression(6, Operations.SUB, 4)
    ]
    const exercise = new Exercise([], fillQuestions)
    expect(exercise.generateFillQuestions()[0].includes('__')).toBeTruthy()
    expect(exercise.generateFillQuestions()[1].includes('__')).toBeTruthy()
  })

  it('generate mixed questions', () => {
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

  it('add questions by type', () => {
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
