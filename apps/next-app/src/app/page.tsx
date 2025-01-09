import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/pub-sub-example">PubSub Example</Link>
    </div>
  )
}

export default HomePage
