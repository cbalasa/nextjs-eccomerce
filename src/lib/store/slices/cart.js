import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
	name: "cart",
	initialState: {
		cart: {},
		openModal: false
	},
	reducers: {
		cartReducer: (state, { payload }) => {
			state.cart = payload;
		},
		openModalReducer: (state, { payload }) => {
			state.openModal = payload;
		}
	}
});

export const cartSelector = (state) => state.cart.cart;
export const openModalSelector = (state) => state.cart.openModal;
export const setCartAction = cart.actions;

export default cart;
