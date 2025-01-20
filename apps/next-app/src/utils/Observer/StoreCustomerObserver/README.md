Incorrect implementation

Update according to this: https://dev.to/superviz/design-pattern-3-observer-pattern-36eo

```ts
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
class Customers {
  public customers: Function[] = []

  register(callback: Function) {
    if (this.customers.find((customer) => customer === callback)) {
      return
    }
    this.customers.push(callback)
  }

  unregister(callback: Function) {
    this.customers.filter((customerCallback) => customerCallback === callback)
  }
}

class Store {
  private _customers: Customers

  constructor(customers: Customers) {
    this._customers = customers
  }

  notify() {
    this._customers.customers.forEach((callback) => {
      callback()
    })
  }
}
```
