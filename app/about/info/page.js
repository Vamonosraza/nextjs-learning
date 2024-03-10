import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1 className='text-7xl'>About Info Page</h1>
        <Link href='/' className='text-2xl m-2'><button>Home</button></Link>
        <Link href='/about' className='text-2xl m-2'>About Page</Link>
    </div>
  )
}

export default page