"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
// import * as todoApi from "@/todos/helpers/todos";
// import { useRouter } from "next/navigation";
import {
  addTodoAction,
  deleteCompletedTodosAction,
} from "../actions/todo-action";

export const TodoForm = () => {
  const [description, setdescription] = useState("");
  //   const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    await addTodoAction(description);
    setdescription("");
    // const todo = await todoApi.createTodo(description);
    // if (todo) {
    //   router.refresh();
    //   setdescription("");
    // }
  };

  //   const handleDeleteCompleted = async () => {
  //     const deletedResponse = await todoApi.deleteCompletedTodos();

  //     if (deletedResponse.success) {
  //       router.refresh();
  //     }
  //   };

  return (
    <form className="flex w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Todo name"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 ml-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Create
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompletedTodosAction()}
        type="button"
        className="flex items-center gap-3  rounded-lg text-sm px-3 py-3 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline size={17} />
        Delete completed todos
      </button>
    </form>
  );
};
