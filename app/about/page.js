import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1 className='text-7xl'>About Page</h1>
        <Link href='/' className='text-2xl m-2'>Home Page</Link>
        <Link href='/about/info' className='text-2xl m-2'>Info Page</Link>
    </div>
  )
}

export default page