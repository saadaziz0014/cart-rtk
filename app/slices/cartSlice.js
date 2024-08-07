import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let id = action.payload.id;
            let findIndex = state.findIndex((item) => item.id === id);
            if (findIndex !== -1) {
                state[findIndex].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            let id = action.payload;

            localStorage.setItem("cart", JSON.stringify(state.filter((item) => item.id !== id)));
            return state.filter((item) => item.id !== id);

        },
        decreaseQuantity: (state, action) => {
            let id = action.payload;
            let findIndex = state.findIndex((item) => item.id === id);
            if (state[findIndex].quantity > 1) {
                state = state[findIndex].quantity -= 1;
            } else if (state[findIndex].quantity === 1) {
                state = state.filter((item) => item.id !== id);
            }

            localStorage.setItem("cart", JSON.stringify(state));
        },
        clearAll: (state) => {
            state = [];

            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearAll } = cartSlice.actions;
export default cartSlice.reducer;