'use client'
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
// import * as todosApi from '@/todos/helpers/todos';
// import { useRouter } from "next/navigation";
import { toggleTodoAction } from "../actions/todo-action";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {

  // const router = useRouter();

  // const toggleTodo = async (id: string, complete: boolean) => {
  //   const updatedTodo = await todosApi.updateTodo(id, complete);
  //   if(updatedTodo){
  //     router.refresh();
  //   }
  // }

  return <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {
      todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodoAction}/>
      ))
    }
  </div>;
};
