import { todoApi } from "@/lib/services/redux.todo-service";
import TodosList from "./todos-list";

export default function RtkTodos() {
  const { data: todos, isLoading } = todoApi.useFetchToDosLimitQuery(3);
  return (
    <TodosList
      todos={todos ?? []}
      title="RTK Todos"
      isOpen={true}
      isLoading={isLoading}
    />
  );
}
