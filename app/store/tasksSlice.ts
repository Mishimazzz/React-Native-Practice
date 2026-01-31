import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [] as Task[],
  },
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.items.unshift(action.payload);
      },
      prepare(title: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            done: false,
          } as Task,
        };
      },
    },
    toggleTask(state, action: PayloadAction<string>) {
      const t = state.items.find((x) => x.id === action.payload);
      if (t) t.done = !t.done;
    },
    removeTask(state, action: PayloadAction<string>) {
      state.items = state.items.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
