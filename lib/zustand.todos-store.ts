import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface TodoZustand {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useTodoZustand = create<{
  value: TodoZustand[];
  fetchTodo: () => Promise<void>;
}>()(
  devtools(
    (set) => ({
      value: [],
      fetchTodo: async () => {
        const result = (
          await fetch("https://jsonplaceholder.typicode.com/todos")
        ).json() as Promise<TodoZustand[]>;
        set({ value: await result }, false, "fetchTodo");
      },
    }),
    { name: "TodoZustand" }
  )
);
