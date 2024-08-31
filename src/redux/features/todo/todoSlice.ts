import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TPriority = "HIGH" | "MEDIUM" | "LOW";
export type TStatus = "PENDING" | "DOING" | "DONE";
export interface ITodo {
    title: string;
    details: string;
    isDeleted?: boolean;
}
// export interface Todo {
//     title: string;
//     author: string;
//     details: string;
//     status: TStatus;
//     date: string;
//     priority: TPriority;
// }
export interface ITodoState {
    value: ITodo[];
}

const initialState: ITodoState = {
    value: [
        // {
        //     title: "Interview",
        //     details: "MERN",
        // },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ITodo>) => {
            // state.value += action.payload;
            state.value.push(action.payload);
        },
        removeLast: (state) => {
            // state.value += action.payload;
            state.value.pop();
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, removeLast } = todoSlice.actions;

export default todoSlice.reducer;
