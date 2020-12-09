import {SourceInput} from './sourceInput'
import {Rule} from '@sunzhongmou/design-pattern/lib/rule'

export class DestOperandLessOrEqualTo10Rule implements Rule<SourceInput> {
  isSatisfied(source: SourceInput): boolean {
    return source.num1 <= 10
  }
}
