import * as DDD from '@sunzhongmou/ddd'

export enum Operations {
  ADD,
  SUB
}

interface OperationSet {
  operand: number
  operation: Operations
}

export class Expression implements DDD.ValueObject {
  destinationOperand: number
  operationSets: OperationSet[]

  constructor(destOperand: number, operation: Operations, operand: number) {
    this.destinationOperand = destOperand
    this.operationSets = []
    this.addOperationSet(operation, operand)
  }

  addOperationSet(operation: Operations, operand: number): void {
    this.operationSets.push({operand, operation})
  }

  sameValueAs(other: Expression): boolean {
    return (
      this.destinationOperand === other.destinationOperand &&
      this.operationSets === other.operationSets
    )
  }

  getOperationSetsRaw(): string {
    return this.operationSets.reduce(
      (raw, oSet) =>
        `${raw}${oSet.operation === Operations.ADD ? ' + ' : ' - '}${
          oSet.operand
        }`,
      ''
    )
  }

  getRaw(): string {
    return `${this.destinationOperand}${this.getOperationSetsRaw()} =`
  }

  execute(): number {
    let result = this.destinationOperand
    for (const oSet of this.operationSets) {
      switch (oSet.operation) {
        case Operations.ADD:
          result += oSet.operand
          break
        case Operations.SUB:
          result -= oSet.operand
          break
      }
    }

    return result
  }
}
