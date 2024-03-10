'use client'

import React from 'react'

const error = (error) => {
    console.log(error)
  return (
    <div className='flex justify-center items-center h-screen'>{error.error.message}</div>
  )
}

export default error