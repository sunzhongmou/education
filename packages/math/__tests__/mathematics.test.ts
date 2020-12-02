import {Mathematics} from '../src/mathematics'
import {And} from '@sunzhongmou/design-pattern/lib/and'
import {SourceInput} from '../src/rule/sourceInput'
import {AddResultLessOrEqualTo10Rule} from '../src/rule/AddResultLessOrEqualTo10Rule'
import {SubResultGreaterOrEqualTo0Rule} from '../src/rule/SubResultGreaterOrEqualTo0Rule'
import {getSequence} from '../src/permutation'

describe('mathematics features', () => {
  it('given add question capacity when generate add questions then expression created with capacity', () => {
    const math = new Mathematics(getSequence(10))
    const rules = new And<SourceInput>([]).addRule(
      new AddResultLessOrEqualTo10Rule()
    )
    math.generateAddQuestions(5, rules)

    expect(math.addExpressions.length).toEqual(5)
    expect(math.addExpressions[3].execute() <= 10).toBeTruthy()
  })

  it('given sub question capacity when generate sub questions then expression created with capacity', () => {
    const math = new Mathematics(getSequence(10))
    const rules = new And<SourceInput>([]).addRule(
      new SubResultGreaterOrEqualTo0Rule()
    )
    math.generateSubQuestions(5, rules)

    expect(math.subExpressions.length).toEqual(5)
    expect(math.subExpressions[3].execute() >= 0).toBeTruthy()
  })

  it('given raw question capacity and fill question capacity when generate questions then exercise ready', () => {
    const math = new Mathematics(getSequence(10))
    const rules = new And<SourceInput>([]).addRule(
      new AddResultLessOrEqualTo10Rule()
    )
    math.generateAddQuestions(5, rules)
    const subRules = new And<SourceInput>([]).addRule(
      new SubResultGreaterOrEqualTo0Rule()
    )
    math.generateSubQuestions(5, subRules)
    math.generateQuestions(8, 2)

    expect(math.exercise.rawQuestions.length).toEqual(8)
    expect(math.exercise.fillQuestions.length).toEqual(2)
  })

  it('given raw question capacity and fill question capacity when generate questions then string questions generated', () => {
    const math = new Mathematics(getSequence(10))
    const rules = new And<SourceInput>([]).addRule(
      new AddResultLessOrEqualTo10Rule()
    )
    math.generateAddQuestions(6, rules)
    const subRules = new And<SourceInput>([]).addRule(
      new SubResultGreaterOrEqualTo0Rule()
    )
    math.generateSubQuestions(6, subRules)
    math.generateQuestions(10, 2)
    const questions = math.generate()

    expect(questions.length).toEqual(12)
    expect(questions[5].includes('__')).toBeFalsy()
    expect(questions[11].includes('__')).toBeTruthy()
  })
})
