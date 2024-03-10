import React from 'react'
import Link from 'next/link'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDricks = async ()  => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

const drinks = async() => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  return (
    <div>
        <h1 className='text-7xl'>Drink Page</h1>
        <Link href='/' className='text-2xl m-2'>Home Page</Link>
        <Link href='/about/info' className='text-2xl m-2'>Info Page</Link>
    </div>
  )
}

export default drinks