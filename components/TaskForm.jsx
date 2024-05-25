import { createTask } from '@/utils/actions';
import React from 'react'

// const createTask = async (formData) => {
//     'use server'
    
// };

const TaskForm = () => {
  return (
    <form action={createTask}>
    <div className='join w-full'>
        <input type='text' className='input input-border join-item w-full' placeholder='type your task here...' name='content'/>
        <button type='submit' className='btn btn-primary join-item'>
            Create Task
        </button>
    </div>
    </form>
  )
}

export default TaskForm