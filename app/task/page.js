import React from 'react'
import Link from 'next/link'
import TaskFormCustom from '@/components/TaskFormCustom'
import TaskList from '@/components/TaskList'

const task = () => {
  return (
    <div className='max-w-lg'>
        <TaskFormCustom />
        <TaskList />
    </div>
  )
}

export default task