const customers: ((data: any) => void)[] = []

export const notify = (data) => {
  customers.forEach((customer) => {
    customer(data)
  })
}

export const subscribe = (customer: (data: any) => void) => {
  if (customers.includes(customer)) {
    return
  }
  customers.push(customer)
}

export const unsubscribe = (customer: (data: any) => void) => {
  const index = customers.indexOf(customer)
  if (index > -1) {
    customers.splice(index, 1)
  }
}
