import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchToDos = createAsyncThunk("todos/fetchToDos", async () => {
  return (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
});

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Todo[]>) => {
    builder.addCase(fetchToDos.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default todoSlice.reducer;
