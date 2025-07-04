"use client";

import { fetchToDos } from "@/lib/features/todo/redux.todo-slice";
import { useAppDispatch } from "@/lib/redux.hooks";
import { RootState } from "@/lib/redux.store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodosList from "./todos-list";

export default function ReduxTodos() {
  const reduxTodos = useSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  const isLoading = !reduxTodos || reduxTodos.length === 0;

  return <TodosList todos={reduxTodos} title="Redux Todos" isOpen={true} isLoading={isLoading} />;
}
