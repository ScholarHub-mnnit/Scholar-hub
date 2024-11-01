import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import courseService from "../api/courseApiService";

const initialState = {
    course: [],
    loading: false,
    error: null,
}

export const courses = createAsyncThunk('courseSlice/courses', async () => {
    return await courseService.fetchCourses();
});


export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(courses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(courses.fulfilled, (state, action) => {
                state.loading = false;
                state.course = action.payload;
            })
            .addCase(courses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export const { } = courseSlice.actions


export default courseSlice.reducer