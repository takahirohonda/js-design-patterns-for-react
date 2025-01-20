type Product = {
  id: string
  name: string
}

class Store {
  private observers: Customer[] = []

  add(observer: Customer) {
    this.observers.push(observer)
  }

  notify(product: Product) {
    this.observers.forEach((observer) => observer.update(product))
  }
}

class Customer {
  update(product: Product) {
    console.log(`New product has been released: ${JSON.stringify(product)}`)
  }
}
