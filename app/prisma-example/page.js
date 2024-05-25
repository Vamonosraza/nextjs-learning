
import Link from 'next/link'
import prisma from '@/utils/db'

const prismaHandlers = async () =>{
  await prisma.task.create({
    data:{
      content: 'wake up',
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy:{
      createdAt:'desc',
    },
  });
  return allTasks;
}

const PrismaExample = async () => {
  
  const tasks = await prismaHandlers();
  return (
    <div>
        <h1 className='text-7xl'>PrismaExample</h1>
        <Link href='/' className='text-2xl m-2'>Home Page</Link>
        <Link href='/about/info' className='text-2xl m-2'>Info Page</Link>

        {tasks.map((task)=>{
          return (
            <h2 key={task.id} className='text-xl py-2'>
              {task.content}
            </h2>
          )
        })}
    </div>
  )
}

export default PrismaExample