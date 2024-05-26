import { editTask } from '@/utils/actions'
import React from 'react'

const EditForm = ({task}) => {
  return (
    <form action={editTask}>
        <input type='hidden' name='id' value={task} />
        <button>Edit</button>
    </form>
  )
}

export default EditForm