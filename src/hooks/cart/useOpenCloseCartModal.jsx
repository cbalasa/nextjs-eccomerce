import { useDispatch, useSelector } from "react-redux";
import { openModalSelector, setCartAction } from "@/lib/store/slices/cart";

export const useOpenCloseCartModal = () => {
	const dispatch = useDispatch();
	const openModal = useSelector(openModalSelector);

	const openCloseCartModal = async () => {
		return dispatch(setCartAction.openModalReducer(!openModal));
	};
	return { openCloseCartModal };
};
