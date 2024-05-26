'use server'

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const createTask = async(formData) => {
    const content = formData.get('content');
    
    await prisma.task.create({
        data:{
            content,
        },
    });
    revalidatePath('/task');
}

export const deleteTask = async (formData) =>{
    const id = formData.get('id');

    await prisma.task.delete({
        where: {id},
    });
    revalidatePath('/task');
}

export const getTask = async (id) => {
    return prisma.task.findUnique({
        where: {id},
    });
    }


export const editTask = async (formData) => {
    const id = formData.get('id');

    await prisma.task.update({
        where: {id},
        data: {
            content: formData.get('content')
        }
    })
}