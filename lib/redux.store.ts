import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/redux.counter-slice";
import { todoSlice } from "./features/todo/redux.todo-slice";
import { todoApi } from "./services/redux.todo-service";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      todos: todoSlice.reducer,
      [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
