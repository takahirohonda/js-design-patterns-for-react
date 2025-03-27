import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
interface LinkProps {
  href: string
  text: string
}

const getLinkClass = twMerge('text-white', 'hover:text-gray-400')

export const LinkNext = ({ href, text }: LinkProps) => {
  return (
    <Link href={href} className={getLinkClass}>
      {text}
    </Link>
  )
}
