import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const isLoggedSlice = createSlice({
    name: "isLogged",
    initialState,
    reducers: {
        logIn: () => true,
        logOut: () => false
    }
});

export const { logIn, logOut } = isLoggedSlice.actions;
export default isLoggedSlice.reducer;
