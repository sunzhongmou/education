import {Stage} from '../../src/stage'
import {Source} from '../source'

export class AddNumberStage implements Stage<Source, Number> {
  process(input: Source): Number {
    return input.num1 + input.num2
  }
}
