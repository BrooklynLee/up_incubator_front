import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload),
  },
});

export const { add, remove } = todosSlice.actions;

// export default configureStore({ reducer: toDos.reducer });
export default todosSlice.reducer;
