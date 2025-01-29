# Practice Log

**30/01/2025**

I build the observer example.

I had `removeCustomer` wrong. The filter function doesn't modify the original array, so this was wrong..

```tsx
export const removeCustomer = (id: string) => {
  customers.filter((customer) => customer.id !== id)
}
```

The correct one is

```tsx
export const removeCustomer = (id: string) => {
  const index = customers.findIndex((customer) => customer.id === id)
  if (index !== -1) {
    customers.splice(index, 1)
  }
}
```

Since we are modifying the array it is probably easier to use class although this exercise was to write the observer without class...

When I use `useEffect`, it seems to run twice. That's why we need the duplicate check in `addCustomers`.

```tsx
useEffect(() => {
  const customer1 = createCustomer('1')
  const customer2 = createCustomer('2')

  addCustomers(customer1)
  addCustomers(customer2)

  return () => {
    removeCustomer('1')
    removeCustomer('2')
  }
}, [])

...
// We need to check duplicate in add customer func
const hasAdded = customers.filter(
  (customerData) => customerData.id === customer.id
)

if (!hasAdded.length) {
  customers.push(customer)
}
```
