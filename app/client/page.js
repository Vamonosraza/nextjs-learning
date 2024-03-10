"use client";
import { useState } from 'react'

const page = () => {

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className='text-5xl mb-4 font-bold'>
        Client
      </h1>
      
      <button className='btn btn-accent' onClick={() => setCount( count +1)}>Increment</button>
      <h2 className='text-3xl mt-4'>Count: {count}</h2>
    </div>
  )
}

export default page