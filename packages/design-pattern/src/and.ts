import {AndRule, Rule} from './rule'

export class And<T> implements AndRule<T> {
  rules: Rule<T>[]

  constructor(rules: Rule<T>[]) {
    this.rules = rules
  }

  isSatisfied(source: T): boolean {
    return this.rules.every(rule => rule.isSatisfied(source))
  }

  addRule(rule: Rule<T>): And<T> {
    this.rules.push(rule)
    return this
  }
}
