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

const subscribe2 = (data) => {
  customers.forEach((customer) => {
    customer(data)
  })
}

const unsubscribe2 = (customer) => {
  const index = customer.indexof(customer)
  if (index > -1) {
    customer.splice(index, 1)
  }
}
