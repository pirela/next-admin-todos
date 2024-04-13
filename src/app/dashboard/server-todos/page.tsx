import { getUserServerSession } from "@/auth/components/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
 title: 'Listado de TODO',
 description: 'SEO Title',
};


export default async function ServerTodosPage() {

  const user = await getUserServerSession()

  if( !user ) {
    redirect('/api/auth/sigin')
  }

  const todos = await prisma.todo.findMany( {
    where: { userId: user.id },
    orderBy: { description: 'asc'}
  } )

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="p-4">
        <div className={`w-full px-3 mx-5 mb-5`}>
          <NewTodo />
        </div>
        <TodosGrid todos={todos} />
      </div>
    </>
  );
}