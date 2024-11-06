import { Todo } from "@prisma/client";

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };
  const todo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return todo;
};

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = { complete };
  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return todo;
};

interface Response {
  success: boolean;
  message?: string;
  data?: Todo;
  status?: number;
}

export const deleteCompletedTodos = async (): Promise<Response> => {
  const response = await fetch("/api/todos", {
    method: "DELETE",
  }).then((res) => res.json());
  return response;
};
