import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        userState: userSlice.reducer,
    }
})



