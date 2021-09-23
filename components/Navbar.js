import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-purple-900 flex justify-center h-20 items-center'>
      <Link href='/'>
        <a className='text-3xl font-bold text-white'>News API - CNN News</a>
      </Link>
    </nav>
  )
}
