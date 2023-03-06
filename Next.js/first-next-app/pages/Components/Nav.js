import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default Nav
