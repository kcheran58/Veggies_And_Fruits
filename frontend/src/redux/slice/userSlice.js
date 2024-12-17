import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, action) {
            return action.payload;
        },
        addProductInUser(state, action) {
            if (!state.cart) {
                state.cart = { products: [] };
            }
            if (!state.cart.products) {
                state.cart.products = [];
            }
            state.cart.products.push(action.payload);
        },
        deleteUser(state,action){
          state={};
        }
    }
});

export const { addUser, addProductInUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
