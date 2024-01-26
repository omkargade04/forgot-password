import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main>
        <div className="navbar flex justify-between m-8">
        <h1 className="font-bold text-3xl text-red-400 gap-10">PictoFest</h1>
        <div className="flex text-2xl text-red-400 gap-10">
          <Link href='/home'>Home</Link>
          <Link href='/login'>Login</Link>
          <Link href='/register'>Register</Link>
        </div>
      </div>
    </main>
  )
}

export default Navbar