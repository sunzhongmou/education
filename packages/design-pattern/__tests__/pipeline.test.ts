import {Source} from './source'
import {Pipeline} from '../src/pipeline'
import {AddNumberStage} from './stage/addNumberStage'
import {NumberToStringStage} from './stage/numberToStringStage'

describe('pipelines tests', () => {
  it('given add number and number to string stages when execute then string result received', () => {
    const pipeline = new Pipeline(new AddNumberStage()).addStage(
      new NumberToStringStage()
    )

    expect(pipeline.execute(new Source(1, 3))).toEqual('4')
  })
})
