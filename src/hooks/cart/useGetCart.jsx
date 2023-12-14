import { useDispatch } from "react-redux";
import { services } from "@/services";
import { setCartAction } from "@/lib/store/slices/cart";
import { cartSelector } from "@/lib/store/slices/cart";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const useGetCart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(cartSelector);

	useEffect(() => {
		getCart();
	}, []);

	const getCart = async () => {
		const cart = await services.cart.getCart();
		if (cart.data.cart) {
			return dispatch(setCartAction.cartReducer(cart.data.cart));
		}
	};
	return { cart };
};
