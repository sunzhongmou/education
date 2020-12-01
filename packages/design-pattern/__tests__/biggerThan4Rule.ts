import {Rule} from '../src/rule'
import {Source} from './source'

export class BiggerThan4Rule implements Rule<Source> {
  isSatisfied(source: Source): boolean {
    return source.num1 + source.num2 > 4
  }
}
