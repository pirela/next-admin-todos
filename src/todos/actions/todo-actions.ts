'use server'

import { getUserServerSession } from '@/auth/components/actions/auth-actions';
import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

interface PropsToggleTodo {
    id: string;
    complete: boolean
}

export const sleep = async(seconds: number = 0) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    } ) 
}
export const addTodo = async ({ description }: { description: string }) => {
    try {
        const user =  await getUserServerSession()
        const todo = await prisma.todo.create({ data: { description, userId: user?.id || '' } })
        revalidatePath('/dasboard/server-todos')
        return todo
    } catch (error) {
        return {
            message: 'Error creando un TODO'
        }
    }
}

export const toggleTodo = async ({ id, complete }: PropsToggleTodo): Promise<Todo> => {

    const user =  await getUserServerSession()
    if(!user){
        NextResponse.json('No autorizado', {status: 401})
    }
    //await sleep(3)
    const todo = await prisma.todo.findFirst({ where: { id } })

    if (!todo) { throw `Todo con id ${id} no encontrado` }

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete }
    })

    revalidatePath('/dasboard/server-todos')

    return updatedTodo

}

export const deleteCompletedTodos = async (): Promise<void> => {
    const user =  await getUserServerSession()
    if(!user){
        NextResponse.json('No autorizado', {status: 401})
    }

    await prisma.todo.deleteMany({ where: { complete: true, userId: user?.id } })
    revalidatePath('/dasboard/server-todos')
}
