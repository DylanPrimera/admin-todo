"use server";

import { getServerSessionUser } from "@/auth";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodoAction = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const user = await getServerSessionUser();
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    throw "Ayoooo this todo does not exist xD";
  }

  const updatedTodo = await prisma.todo.update({
    where: { id, userId: user?.id },
    data: { complete },
  });
  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const addTodoAction = async (description: string): Promise<Todo> => {
  const user = await getServerSessionUser();
  const todo = await prisma.todo.create(
    {
      data: {
        description,
        userId: user?.id,
      }
    }
  );
  revalidatePath("/dashboard/server-todos");
  return todo;
};

export const deleteCompletedTodosAction = async (): Promise<void> => {
  const user = await getServerSessionUser();
  const todos = await prisma.todo.deleteMany({ where: { complete: true, userId: user?.id } });
  if (todos.count === 0) {
    throw "There are no completed todos to delete";
  }
  revalidatePath("/dashboard/server-todos");
};
