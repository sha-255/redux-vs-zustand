"use client";
import { useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  title: string;
  isOpen: boolean;
  isLoading?: boolean;
}

export default function TodosList({
  todos,
  title,
  isOpen,
  isLoading,
}: TodoListProps) {
  const [openTodos, setOpenTodos] = useState(isOpen);

  return (
    <div className="grid w-full max-w-xl mx-auto mt-8">
      <div
        className="flex items-center justify-between cursor-pointer select-none px-4 py-3 bg-gray-100 dark:bg-transparent hover:bg-gray-200 dark:hover:bg-transparent transition-colors"
        onClick={() => setOpenTodos((prev) => !prev)}
      >
        <span className="font-semibold text-base">{title}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${
            openTodos ? "" : "rotate-180"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {openTodos && (
        <div className="grid gap-4 bg-white dark:bg-transparent dark:border-neutral-700 rounded-b-lg p-4">
          {isLoading && (!todos || todos.length === 0) ? (
            <>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-100 dark:bg-neutral-800 rounded-lg h-20 w-full mb-2"
                />
              ))}
            </>
          ) : (
            todos.map((todo: Todo) => (
              <div
                key={todo.id}
                className="rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4 flex flex-col shadow-sm"
              >
                <span className="text-sm text-gray-500 mb-1">
                  ID:{" "}
                  <span className="text-gray-800 dark:text-white font-semibold">
                    {todo.id}
                  </span>
                </span>
                <span className="text-sm text-gray-500 mb-1">
                  User ID:{" "}
                  <span className="text-gray-800 dark:text-white font-semibold">
                    {todo.userId}
                  </span>
                </span>
                <span className="text-base text-black dark:text-white font-medium mb-1">
                  {todo.title}
                </span>
                <span className="text-sm text-gray-500">
                  {todo.completed ? "Completed" : "Uncompleted"}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
