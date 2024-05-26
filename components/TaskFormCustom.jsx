'use client'
import { createTaskCustom } from '@/utils/actions';
import { useFormStatus, useFormState } from 'react-dom';
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';

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

const initialState = {
  message: null,
}

const TaskForm = () => {
const [state, formAction] = useFormState(createTaskCustom, initialState);
useEffect(() => {
  // the messafe 'error' here needs to be identical as the one in the actions file in order for the toast error message to display
  if(state.message === 'error'){
    toast.error('Task creation failed');
    return;
  }
  if(state.message){
    toast.success('Task created successfully')
  }
}, [state])

  return (
    <form action={formAction}>
      {/* {state.message ? <p className='mb-2'>
        {state.message}
      </p> : null} */}
    <div className='join w-full'>
        <input type='text' className='input input-border join-item w-full' placeholder='type your task here...' name='content'/>
        <SubmitBtn />
    </div>
    </form>
  )
}

export default TaskForm