import { useEffect, useState } from "react";
import { services } from "@/services";

export const useOrder = () => {
	const [order, setOrder] = useState({});

	const getOrder = async () => {
		const {
			data: { order }
		} = await services.order.getOrder();
		return setOrder(order);
	};

	const updateOrderToPaid = async () => {
		order.paid = true;
		await services.order.postOrder(order);
	};
	useEffect(() => {
		getOrder();
	}, []);

	return { order, updateOrderToPaid };
};
