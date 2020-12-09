import {SourceInput} from './sourceInput'
import {Rule} from '@sunzhongmou/design-pattern/lib/rule'

export class OperandLessOrEqualTo10Rule implements Rule<SourceInput> {
  isSatisfied(source: SourceInput): boolean {
    return source.num2 <= 10
  }
}
