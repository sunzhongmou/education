import * as DDD from '@sunzhongmou/ddd'

export enum Operations {
  ADD,
  SUB
}

export class Expression implements DDD.ValueObject {
  destinationOperand: number
  operand: number
  operation: Operations

  constructor(destOperand: number, operation: Operations, operand: number) {
    this.destinationOperand = destOperand
    this.operation = operation
    this.operand = operand
  }

  sameValueAs(other: Expression): boolean {
    return (
      this.destinationOperand === other.destinationOperand &&
      this.operation === other.operation &&
      this.operand === other.operand
    )
  }

  getRaw(): string {
    return `${this.destinationOperand}${
      this.operation === Operations.ADD ? ' + ' : ' - '
    }${this.operand} =`
  }

  execute(): number {
    switch (this.operation) {
      case Operations.ADD:
        return this.destinationOperand + this.operand
      case Operations.SUB:
        return this.destinationOperand - this.operand
    }
    return 0
  }
}
