export interface Stage<I, O> {
  process(input: I): O
}
