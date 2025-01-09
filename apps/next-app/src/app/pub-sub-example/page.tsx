'use client'
import { useEffect, useState } from 'react'
import { PubSubExample as PubSub } from '../../utils/PubSubExample'

const pubsub = new PubSub()

const PubSubExample = () => {
  const [message, setMessage] = useState()

  useEffect(() => {
    pubsub.subscribe('click', (data: any) => setMessage(data.data))
  }, [])
  const onClick = () => {
    pubsub.publish('click', { data: 'hello' })
  }
  return (
    <div className="flex flex-col items-center m-[42px]">
      <button
        type="button"
        onClick={onClick}
        className="w-[200px] focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Dispatch Event
      </button>
      <div className="flex">
        <p>{message}</p>
      </div>
    </div>
  )
}

export default PubSubExample