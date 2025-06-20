type ProductData = {
  title: string
  releaseDate: string
}

type Customer = {
  id: string
  update: (data: ProductData) => void
}

export const customers: Customer[] = []

export const addCustomers = (customer: Customer) => {
  const hasAdded = customers.filter(
    (customerData) => customerData.id === customer.id
  )

  if (!hasAdded.length) {
    customers.push(customer)
  }
}

export const notifyCustomers = (data: ProductData) => {
  customers.forEach((customer) => {
    customer.update(data)
  })
}

// this is wrong -> fix
export const removeCustomer = (id: string) => {
  customers.filter((customer) => customer.id !== id)
}

// fix - get index and splicing the array is the most standard way to remove an item from an array
export const removeCustomerFixed = (id: string) => {
  const index = customers.findIndex((customer) => customer.id === id)
  if (index > -1) {
    customers.splice(index, 1)
  }
}

export const createCustomer = (id: string) => {
  return {
    id,
    update: (data: ProductData) =>
      console.log(`customerId: ${id}, product: ${JSON.stringify(data)}`),
  }
}
