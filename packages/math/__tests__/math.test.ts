import * as DDD from '../src/math'

describe('@sunzhongmou/math', () => {
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
})
