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

// this is wrong
export const removeCustomer = (id: string) => {
  customers.filter((customer) => customer.id !== id)
}

export const createCustomer = (id: string) => {
  return {
    id,
    update: (data: ProductData) =>
      console.log(`customerId: ${id}, product: ${JSON.stringify(data)}`),
  }
}
