import React from 'react'
import Link from 'next/link'
import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'

const task = () => {
  return (
    <div className='max-w-lg'>
        <TaskForm />
        <TaskList />
    </div>
  )
}

export default task