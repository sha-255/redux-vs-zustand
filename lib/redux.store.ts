import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/redux.counter-slice";
import { todoSlice } from "./features/todo/redux.todo-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      todos: todoSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
