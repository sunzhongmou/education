import {OrRule, Rule} from './rule'

export class Or<T> implements OrRule<T> {
  rules: Rule<T>[]

  constructor(rules: Rule<T>[]) {
    this.rules = rules
  }

  isSatisfied(source: T): boolean {
    return this.rules.some(rule => rule.isSatisfied(source))
  }

  addRule(rule: Rule<T>): Or<T> {
    this.rules.push(rule)
    return this
  }
}
