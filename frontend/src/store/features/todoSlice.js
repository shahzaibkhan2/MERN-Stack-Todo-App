import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    filterations: "All",
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setToggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    },
    setDeleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo?._id !== action.payload?._id
      );
    },
    setFilterations: (state, action) => {
      state.filterations = action.payload;
    },
  },
});

export const { setTodos, setToggleTodo, setDeleteTodo, setFilterations } =
  todoSlice.actions;
export default todoSlice.reducer;
