"use client";
import { startTransition, useOptimistic } from "react";
import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [todoOptimistic, setTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );

  const handleToggle = async () => {
    try {
      startTransition(() => setTodoOptimistic(!todoOptimistic.complete));

      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          className={` flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100 
            ${todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"}
            `}
          onClick={handleToggle}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={25} />
          ) : (
            <IoSquareOutline size={25} />
          )}
        </div>
        <span className="text-center sm:text-left">
          {todoOptimistic.description}
        </span>
      </div>
    </div>
  );
};
