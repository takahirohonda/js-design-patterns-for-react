# Architecture

## Explain what the CAP theorem is.

CAP theorem suggests that distributed computer systems can only deliver two out of the following three guarantees:

- Consistency: Every node sees the same data even when concurrent updates occur.
- Availability: All requests receive responses on whether it was a success or a failure.
- Partition tolerance: The system will keep operating even if there is a partition in communication between two different nodes.

## Explain what SOLID means.

The SOLID acronym features five principles for software architect and development roles. These principles are:

`Single responsibility`: This principle indicates that each class should be responsible for a specific part of an application.
`Open/closed`: The open/closed principle indicates that although a module or class should be open for extension, it should be closed for modification.
`Liskov substitution`: The Liskov substitution principle indicates that if developers use inheritance when designing an application, it should function with an object created using the parent class or a subclass.
`Interface segregation`: The interface segregation principle indicates that software developers and architects should keep interfaces small.
`Dependency inversion`: The dependency inversion principle suggests that a high-level class shouldn’t rely on a low-level class, though both can depend on high-level abstractions.

## Explain the ACID acronym.

`atomicity, consistency, isolation, and durability`. These database interaction properties help software developers and architects guarantee the validity of data, even when errors occur.

## Explain what sharding is.

Sharding is a method software architects use to split and store one logical dataset within several databases. Such distribution in several machines facilitates the ability to store a bigger dataset.

## Explain what cohesion means in software architecture.

When software architects divide a system into modules, cohesion measures the extent to which all elements that belong to the module are functionally related. Some of the main types of cohesion include:

- Communicational cohesion
- Functional cohesion
- Sequential cohesion
- Procedural cohesion
- Temporal cohesion
- Logical cohesion
- Coincidental cohesion

## Explain what coupling means in software architecture.

Coupling refers to the extent to which each module, or each component, depends on another module. If two modules are tightly coupled, they are highly dependent on each other. If they are loosely coupled, they don’t rely on each other as much. If two modules are uncoupled, they are not interdependent.

There are many different examples of coupling in modules:

- No coupling
- Content coupling
- Common coupling
- Control coupling
- External coupling
- Stamp coupling
- Data coupling

# GOD class

2. GOD Class

A GOD class (sometimes called a God Object) is an anti-pattern in object-oriented design where one class:

- Knows too much
- Does too much
- Controls too much

Refactoring:

- Break down responsibilities into smaller, cohesive classes.
- Apply SOLID principles — especially Single Responsibility and Interface Segregation.

Use composition over inheritance when possible.

Example of GOD class that has too many responsibility (like managing user data, database, email and logging), violating the single responsibility principles.

```js
class UserManager {
  private users = [];

  addUser(user) {
    this.users.push(user);
    this.saveToDatabase(user);
    this.sendWelcomeEmail(user);
    this.logAction(`User added: ${user.name}`);
  }

  saveToDatabase(user) {
    // pretend DB code here
  }

  sendWelcomeEmail(user) {
    // pretend email code here
  }

  logAction(message) {
    // pretend logging code here
  }
}
```

The above GOD class can be refactored into this:

- High cohesion — each class has one clear purpose.
- Low coupling — you can change email logic without touching database code.
- Easier testing — you can mock EmailService or UserRepository in isolation.
- Future scalability — you can replace the logger, DB, or email service without rewriting the entire system.

```js
class UserRepository {
  save(user) {
    // DB save logic
  }
}

class EmailService {
  sendWelcome(user) {
    // email logic
  }
}

class Logger {
  log(message) {
    // logging logic
  }
}

class UserManager {
  constructor(private repo: UserRepository, private email: EmailService, private logger: Logger) {}

  addUser(user) {
    this.repo.save(user);
    this.email.sendWelcome(user);
    this.logger.log(`User added: ${user.name}`);
  }
}
```

# Deadlock vs Livelock

| Aspect        | Deadlock                                                             | Livelock                                                                               |
| ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Activity**  | Processes are **stuck**, not doing anything.                         | Processes are **active**, but keep repeating actions without progress.                 |
| **Cause**     | Circular wait for resources.                                         | Overly reactive conflict resolution.                                                   |
| **Detection** | Easier — you see nothing happening.                                  | Harder — you see activity but no completion.                                           |
| **Analogy**   | Two cars stop in the middle of a one-lane bridge and refuse to move. | Two cars keep swerving at the same time to avoid collision, but never pass each other. |

## 1. Deadlock

A deadlock happens when two or more processes (or threads) are waiting for each other to release resources, but none of them ever do — so they all just freeze permanently.

Example:

- Thread A has Resource 1 and wants Resource 2.
- Thread B has Resource 2 and wants Resource 1.
- Both wait forever. No one moves. Game over.

Analogy:

- Two people meet in a narrow hallway. Each refuses to move until the other steps aside. They just stand there forever.

## 2. Livelock

A livelock happens when processes (or threads) are not blocked but keep changing state in response to each other — yet still make no progress.

- Two people meet in a hallway.
- Both step to the left to avoid each other.
- They both step to the right.
- Repeat forever — they’re “active” but stuck.

React infinite rendering feels like a livelock but not strictly speaking. Livelock requires multiple agents.

It's more like:

- An unbounded loop in single-threaded logic.
- Or a runaway feedback loop rather than two-way livelock.

# more

Explain what elasticity means.

How is elasticity different from scalability?

Explain what back-pressure is.

Which is the best choice for real-time data: WebSockets or Rest API?

What is Microservices Architecture?

What is Monolithic?

Explain what session replication is.

Explain what middle-tier clustering is.

Explain what sticky load balancing is.

What is session affinity?

Explain high availability in the software architect field.

What is the single responsibility principle?

What does fault tolerance mean?

What does fault resilience mean?

Explain the difference between fault tolerance and fault resilience.

What is concurrency?

What is parallelism?

Explain how concurrency is different from parallelism.

What is the DRY principle?

What is the DIE principle?

Explain what SOLID means.

Describe four best practices for performance testing.

Describe three metrics that measure performance testing.

Explain the ACID acronym.

What is a binary semaphore?

What is a mutual exclusion semaphore?

# Reading this one before the interview might be good?

https://www.finalroundai.com/blog/software-architect-interview-questions

## My approaches

- Tech debt, refactoring

What helped me in the past was to have solid integration tests. If the unit test coverage is low, it's better to write integration tests to make sure the refactoring doesn't break the app. Writing low level unit tests on legacy code is time consuming and difficult when the coverage is low. Writing integration tests will give you the confidence when you refactor code.
