import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
  },
});
