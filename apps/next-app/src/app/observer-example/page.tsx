'use client'

import { useEffect } from 'react'
import {
  addCustomers,
  createCustomer,
  notifyCustomers,
  removeCustomer,
} from './practice/storeAndCustomer'

const ObserverExample = () => {
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
  return (
    <button
      type="button"
      onClick={() =>
        notifyCustomers({ title: 'new', releaseDate: '10/01/2025' })
      }
      className="w-[200px] focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Notify
    </button>
  )
}

export default ObserverExample
