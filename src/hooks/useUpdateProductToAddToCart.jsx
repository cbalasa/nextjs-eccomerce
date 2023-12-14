import { useDispatch, useSelector } from "react-redux";
import { productSelector, setproductAction } from "@/lib/store/slices/product";
export const useUpdateProductToAddToCart = () => {
	const dispatch = useDispatch();
	const existingProduct = useSelector(productSelector);
	const updateProductToAddToCart = ({ product, option, optionName }) => {
		if (product) {
			return dispatch(setproductAction.productReducer(product));
		}
		if (optionName.length) {
			const existingProductToEdit = JSON.parse(JSON.stringify(existingProduct));
			existingProductToEdit.options[optionName] = option;

			return dispatch(setproductAction.productReducer(existingProductToEdit));
		}
	};

	return { updateProductToAddToCart };
};
