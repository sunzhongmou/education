import * as DDD from '../src/ddd'

describe('@sunzhongmou/ddd', () => {
  it('interface for ddd Entity', () => {
    class Entity implements DDD.Entity {
      id: string
      constructor(id: string) {
        this.id = id
      }
      sameIdentityAs(other: DDD.Entity): boolean {
        return this.id === other.id
      }
    }

    function entity(id: string): DDD.Entity {
      const ent = {} as DDD.Entity
      ent.id = id
      return ent
    }

    const e1 = new Entity('abc')
    const e2 = entity('abc')

    expect(e1.sameIdentityAs(e2)).toBeTruthy()
  })

  it('interface for ddd ValueObject', () => {
    class ValueObject implements DDD.ValueObject {
      name: string
      desc: string
      constructor(name: string, desc: string) {
        this.name = name
        this.desc = desc
      }
      sameValueAs(other: ValueObject): boolean {
        return this.name === other.name && this.desc === other.desc
      }
    }

    const v1 = new ValueObject('name', 'desc')
    const v2 = new ValueObject('name', 'desc')

    expect(v1.sameValueAs(v2)).toBeTruthy()
  })

  it('interface for ddd DomainEvent', () => {
    class DomainEvent implements DDD.DomainEvent {
      id: string
      body: string
      constructor(id: string, body: string) {
        this.id = id
        this.body = body
      }
      sameEventAs(other: DomainEvent): boolean {
        return this.id === other.id
      }
      getEventBody(): string {
        return this.body
      }
      getEventId(): string {
        return this.id
      }
    }

    const e1 = new DomainEvent('id', 'body')
    const e2 = new DomainEvent('id', 'body')

    expect(e1.sameEventAs(e2)).toBeTruthy()
  })
})
