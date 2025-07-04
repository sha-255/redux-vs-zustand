import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TodoRTK {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    fetchToDosLimit: build.query<TodoRTK[], number>({
      query: (limit: number) => ({
        url: "todos",
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Todo"],
      // on upd/del (build.mutation): invalidatesTags: ["Todo"],
    }),
  }),
});
