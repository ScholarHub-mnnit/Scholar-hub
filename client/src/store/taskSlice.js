import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import taskService from "../api/taskApiService";

const initialState = {
    task: [],
    loading: false,
    error: null,
}

export const tasks = createAsyncThunk('taskSlice/tasks', async () => {
    return await taskService.fetchTasks();
});


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(tasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(tasks.fulfilled, (state, action) => {
                state.loading = false;
                state.task = action.payload;
            })
            .addCase(tasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export const { } = taskSlice.actions


export default taskSlice.reducer