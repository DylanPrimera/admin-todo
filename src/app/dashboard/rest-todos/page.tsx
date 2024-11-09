export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getServerSessionUser } from "@/auth";
import prisma from "@/lib/prisma";
import { TodoForm, TodosGrid } from "@/todos";

export const metadata = {
  title: "List of todos",
  description: "List of todos",
};
export default async function RestTodosPage() {
  const user = await getServerSessionUser();
  const todos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
    where: { userId: user?.id },
  });
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <TodoForm />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
