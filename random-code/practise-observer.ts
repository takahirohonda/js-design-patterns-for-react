const customers: ((data: any) => void)[] = []

export const notify = (data) => {
  customers.forEach((customer) => {
    customer(data)
  })
}

export const subscribe = (customer: (data: any) => void) => {
  customers.push(customer)
}
