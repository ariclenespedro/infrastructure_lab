import { configureStore } from "@reduxjs/toolkit";
import schoolReducer from "./school/schoolSlice";


export const store = configureStore({
    reducer:{
        school: schoolReducer,
    }
})