'use client';
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <main>
      <div className="min-h-screen bg-orange-100 flex justify-center items-center">

        <div className="bg-[#C6573E] p-10 rounded-lg shadow-xl w-72 sm:w-auto sm:h-auto">
        <h1 className="flex text-[#F8E9CB] justify-center items-center font-semibold text-3xl  mb-5">
            New Password
          </h1>
          <input
            className="w-full bg-[#F8E9CB] text-[#C6573E] h-10 sm:h-12 p-3 mb-4 rounded outline-none placeholder-[#C6573E]"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full bg-[#F8E9CB] h-10 text-[#C6573E] sm:h-12 p-3 mb-4 rounded outline-none placeholder-[#C6573E]"
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link href='/login'><button className="w-full h-10 sm:h-12 text-[#C6573E] p-2 mb-3 bg-[#F8E9CB] rounded hover:bg-[#e8d396]">
            <p className="font-medium">Confirm Password</p>
          </button></Link>
        </div>
      </div>
    </main>
  )
}

export default page