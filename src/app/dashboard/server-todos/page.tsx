export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { TodoForm, TodosGrid } from "@/todos";

export const metadata = {
  title: "Server Todos",
  description: "Server Todos",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <>
      <span className="text-3xl">Server Action</span>
      <div className="w-full px-3 mx-5 mb-5 mt-4">
        <TodoForm />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}