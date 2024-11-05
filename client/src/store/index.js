import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import taskReducer from './taskSlice'
import courseReducer from './courseSlice'

export const store= configureStore({
    reducer:{
        user: userReducer,
        task: taskReducer,
        course: courseReducer,
    }
});