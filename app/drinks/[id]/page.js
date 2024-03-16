import Link from 'next/link'
import React from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
import drinkImg from './pexelsDrink.jpeg';
console.log(drinkImg);
import Image from 'next/image'


const getSIngleDrink = async (id) => {
    const response = await fetch(`${url}${id}`)
    if(!response.ok){
        throw new Error('Failed to fetch data')
    }
    return response.json()
}

const SingleDrinkPage = async ({params}) => {
  const data = await getSIngleDrink(params.id);
  console.log(data);
  const title = data?.drinks[0]?.strDrink || 'No name'
  const imgSrc = data?.drinks[0]?.strDrinkThumb || ''
  return <div>
    <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>Back to drinks</Link>
    <Image src={drinkImg} alt='drink' className='w-48 h-48 rounded-lg'/>
      <h1 className='text-4xl mb8title'>{title}</h1>
      <img src={imgSrc} alt={title} />
  </div>
};

export default SingleDrinkPage