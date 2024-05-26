'use client'
import { createTaskCustom } from '@/utils/actions';
import { useFormStatus } from 'react-dom';
import React from 'react'

// const createTask = async (formData) => {
//     'use server'
    
// };

const SubmitBtn = () => {

const {pending} = useFormStatus()

  return(
  <button type='submit' className='btn btn-primary join-item ' disabled={pending}>
    {pending ? 'Please Wait...' : 'Create Task'}
        </button>
  )
}

const TaskForm = () => {
  return (
    <form action={createTaskCustom}>
    <div className='join w-full'>
        <input type='text' className='input input-border join-item w-full' placeholder='type your task here...' name='content'/>
        <SubmitBtn />
    </div>
    </form>
  )
}

export default TaskForm