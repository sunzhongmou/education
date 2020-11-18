/**
 * Interface for DDD Entity
 *
 * has a life cycle
 * has a unique identifier
 * Judge the equality by ID
 * Addition, deletion and modification-persistence
 * Variable state/value
 */
export interface Entity {
  id: string
  sameIdentityAs(other: Entity): boolean
}

/**
 * Interface for DDD ValueObject
 *
 * Descriptive
 * No unique identification
 * Judging equivalence by attributes
 * Instant creation/destruction can be destroyed
 * Immutable
 */
export interface ValueObject {
  sameValueAs(other: ValueObject): boolean
}

/**
 * Interface for DDD AggregateRoot
 *
 * Responsible for implementing business rules
 * With a globally unique identifier
 * Objects outside the aggregation can only refer to the aggregation, not directly to objects inside the aggregation
 * Objects within the boundary can have other aggregate root references
 * Objects within the boundary need to have the same life cycle as the aggregate root
 * Only the aggregate root directly interacts with the persistence layer
 */
export interface AggregateRoot extends Entity {}

/**
 * Interface for DDD DomainService
 *
 * Domain service can be regarded as a unified external interface of the domain layer aggregation,
 * Used to encapsulate the behavior of aggregation (so that the aggregation root can be Immutable),
 * Achieve persistence and protection for Domain Model.
 */
export interface DomainService {}

/**
 * Interface for DDD Repository
 *
 * Persistent warehouse, requires interface implemented by system persistence layer
 */
export interface Repository {}

/**
 * Interface for DDD DomainEvent
 *
 * With unique identification
 * No life cycle
 * Notification|Command event
 */
export interface DomainEvent {
  sameEventAs(other: DomainEvent): boolean
  getEventBody(): string
  getEventId(): string
}
