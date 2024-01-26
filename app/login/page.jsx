import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main>
        <div>Login</div>
        <Link href='/forget-password'>Forget Password</Link>
    </main>
    
  )
}

export default page