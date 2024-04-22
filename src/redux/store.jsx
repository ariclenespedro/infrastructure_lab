import { configureStore } from "@reduxjs/toolkit";
import schoolReducer from "./school/schoolSlice";
import infrastructureReducer from "./school/infrastructure/infrastructureSlice";


export const store = configureStore({
    reducer:{
        school: schoolReducer,
        infrastructure: infrastructureReducer,
    }
})