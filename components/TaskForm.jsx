import { data } from 'autoprefixer';
import { revalidatePath } from 'next/cache';
import React from 'react'

const createTask = async (formData) => {
    'use server'
    const content = formData.get('content');
    
    await prisma.task.create({
        data:{
            content,
        },
    });
    revalidatePath('/task');
};

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