import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { titleToID } from "../../../utils/functions";
import { ITodo } from "./todoSlice";

export type TPriority = "HIGH" | "MEDIUM" | "LOW";
export type TStatus = "PENDING" | "DOING" | "DONE";
export interface ITodo {
    idTodo?: string;
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
// isDeleted?: boolean;
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
            const todo = action.payload;
            state.value.push({ ...todo, idTodo: titleToID(todo.title) });
        },
        deleteOne: (state, action: PayloadAction<string>) => {
            // state.value += action.payload;
            const id = action.payload;
            const todos = state.value;
            const findTodo = todos.find((todo) => todo.idTodo === id);
            findTodo.isDeleted = true;
            // const updatedTodo: ITodo = { ...findTodo, isDeleted: true }; // what is the problem
            // state.value = [...state.value, updatedTodo];
        },
        remove: (state, action: PayloadAction<string>) => {
            // state.value += action.payload;
            const id = action.payload;
            const todos = state.value;
            const findTodo = todos.filter((todo) => todo.idTodo !== id);
            state.value = findTodo;
        },
        removeLast: (state) => {
            // state.value += action.payload;
            state.value.pop();
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, deleteOne, remove, removeLast } = todoSlice.actions;

export default todoSlice.reducer;
