import React from 'react'
import Link from 'next/link'

const page = () => {
  console.log('Home Page')
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>
        Home Page
      </h1>
      <Link href='/about' className='btn btn-accent'>About Page</Link>
      <Link href='/about/info' className='btn btn-accent'>Info Page</Link>
    </div>
  )
}

export default page
