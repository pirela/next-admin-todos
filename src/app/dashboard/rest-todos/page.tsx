import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { useState } from "react";

export const metadata = {
 title: 'Listado de TODO',
 description: 'SEO Title',
};


export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany( { orderBy: { description: 'asc'} } )

  return (
    <div className="p-4">
      <div className={`w-full px-3 mx-5 mb-5`}>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}