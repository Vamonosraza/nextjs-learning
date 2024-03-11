import Link from 'next/link'
import React from 'react'

const DrinksList = ({drinks}) => {
  return (
    <ul className='menu menu-vertical pl-0'>
        {drinks.map((drink) => {
            return <li key={drink.idDrink}>
                <Link href={`/drinks/${drink.idDrink}`} className='text-xl front-medium'>
                    {drink.strDrink}
                </Link>
            </li>
        })}
    </ul>
  )
}

export default DrinksList