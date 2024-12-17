import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import isLoggedSlice from "../slice/isLogged";
export const store = configureStore({
    reducer: {
       currentUser:userReducer,
       isLogged:isLoggedSlice
    },
    devTools: true
});
