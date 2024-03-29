import React from 'react'
import Link from 'next/link'
import DrinksList from '@/components/DrinksList'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async ()  => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(url)
  //throw error
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  const data = await response.json()
  return data;
}

const DrinksPage = async() => {
  const data = await fetchDrinks()

  return (
    <div>
        <h1 className='text-7xl'>Drink Page</h1>
        <Link href='/' className='text-2xl m-2'>Home Page</Link>
        <Link href='/about/info' className='text-2xl m-2'>Info Page</Link>
        <DrinksList drinks={data.drinks} />
    </div>
  )
}

export default DrinksPage