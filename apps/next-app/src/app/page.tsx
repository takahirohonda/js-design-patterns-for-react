'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  listeners,
  publish,
  subscribe,
  unsubscribe,
} from '../utils/PubSubWithoutClass.ts'

const HomePage = () => {
  const [counter, setCounter] = useState(0)

  const func1 = () => {
    console.log('button-pressed event')
  }
  const func2 = () => {
    setCounter((prev) => prev + 1)
  }
  useEffect(() => {
    subscribe('button-pressed', func1)
    subscribe('button-pressed', func2)
    return () => {
      unsubscribe('button-pressed', func1)
      unsubscribe('button-pressed', func2)
    }
  }, [])
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">Home Page</h1>
      <Link href="/pub-sub-example">PubSub Example</Link>
      <button
        className="bg-pink-500 m-[26px] w-[200px]"
        onClick={() => {
          console.log(listeners)
          publish('button-pressed', { data: 'test' })
        }}
      >
        Click this
      </button>
      <div>This is the counter value: {counter}</div>
    </div>
  )
}

export default HomePage
