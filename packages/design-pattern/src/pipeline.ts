import {Stage} from './stage'

class LinkupStage<I, O, NO> implements Stage<I, NO> {
  lastStage: Stage<I, O>
  currentStage: Stage<O, NO>

  constructor(lastStage: Stage<I, O>, currentStage: Stage<O, NO>) {
    this.currentStage = currentStage
    this.lastStage = lastStage
  }

  process(input: I): NO {
    return this.currentStage.process(this.lastStage.process(input))
  }
}

export class Pipeline<I, O> {
  currentStage: Stage<I, O>

  constructor(currentStage: Stage<I, O>) {
    this.currentStage = currentStage
  }

  addStage<NO>(nextStage: Stage<O, NO>): Pipeline<I, NO> {
    return new Pipeline<I, NO>(new LinkupStage(this.currentStage, nextStage))
  }

  execute(input: I): O {
    return this.currentStage.process(input)
  }
}
