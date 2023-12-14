import { useDispatch, useSelector } from "react-redux";
import { productSelector, setproductAction } from "@/lib/store/slices/product";
import { services } from "@/services";
import { setCartAction } from "@/lib/store/slices/cart";

export const useAddToCart = () => {
	const dispatch = useDispatch();
	const existingProduct = useSelector(productSelector);
	const isDisabled = () => {
		if (existingProduct?.options) {
			const optionsKeys = Object.keys(existingProduct.options);

			return !optionsKeys.every(
				(key) =>
					typeof existingProduct.options[key] === "string" &&
					existingProduct.options[key].length > 0
			);
		}
	};
	const addToCart = async () => {
		const {
			data: { cart }
		} = await services.cart.postCart(existingProduct);

		return dispatch(setCartAction.cartReducer(cart));
	};

	const deleteCart = async () => {
		const {
			data: { cart }
		} = await services.cart.deleteCart(existingProduct);

		return dispatch(setCartAction.cartReducer({}));
	};
	return { addToCart, isDisabled, deleteCart };
};
