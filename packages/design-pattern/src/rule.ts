export interface Rule<T> {
  isSatisfied(source: T): boolean
}

export interface AndRule<T> extends Rule<T> {}

export interface OrRule<T> extends Rule<T> {}
