import prisma from "@/lib/prisma";
import { TodoForm, TodosGrid } from "@/todos";

export const metadata = {
  title: "List of todos",
  description: "List of todos",
};
export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <TodoForm />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
