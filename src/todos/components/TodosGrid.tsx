'use client'

import { Todo } from '@prisma/client'
import { TodoItem } from '..';

import * as todosApi from '@/todos/helpers/todos'
import { PropsUpdateTodo } from '@/todos/helpers/todos';
import { useRouter } from 'next/navigation';

interface Props {
    todos? : Todo[];
}

export const TodosGrid = ( { todos = [] } :Props) => {

  const router = useRouter();

  const toggleTodo = async( {id, complete} :PropsUpdateTodo ) => {
    const updateTodo = await todosApi.updateTodo({id, complete})
    router.refresh();
    return updateTodo
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {
        todos.map( (todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={ (id: string, complete: boolean) => toggleTodo({id, complete}) } />
        ))
      }
    </div>
  )
}
