import { useTodoZustand } from "@/lib/zustand.todos-store";
import TodosList from "./todos-list";
import { useEffect } from "react";

export default function ZustandTodos() {
  const { value: Todos, fetchTodo } = useTodoZustand();
  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return <TodosList todos={Todos} title="Zustand todos" isOpen={false} />;
}
