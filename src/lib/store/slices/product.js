import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
	name: "product",
	initialState: {
		product: {}
	},
	reducers: {
		productReducer: (state, { payload }) => {
			state.product = payload;
		}
	}
});

export const productSelector = (state) => state.product.product;
export const setproductAction = product.actions;

export default product;
