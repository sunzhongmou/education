import {Stage} from '../../src/stage'

export class NumberToStringStage implements Stage<Number, String> {
  process(input: Number): String {
    return `${input}`
  }
}
