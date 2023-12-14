import { configureStore, combineReducers } from "@reduxjs/toolkit";
import product from "./slices/product";
import cart from "./slices/cart";
export const makeStore = () => {
	return configureStore({
		reducer: {}
	});
};

const rootReducer = combineReducers({
	[product.name]: product.reducer,
	[cart.name]: cart.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production"
});
