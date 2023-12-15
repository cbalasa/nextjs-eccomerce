import { useEffect, useState } from "react";
import { services } from "@/services";
import { redirect } from "next/navigation";

export const useOrder = () => {
	const [order, setOrder] = useState({});
	const [orderPaid, setOrderPaid] = useState(false);

	const getOrder = async () => {
		const {
			data: { order }
		} = await services.order.getOrder();
		return setOrder(order);
	};

	const updateOrderToPaid = async () => {
		try {
			order.paid = true;
			await services.order.postOrder(order);
			setOrderPaid(true);
		} catch (error) {
			throw error;
		}
	};
	useEffect(() => {
		getOrder();
	}, []);

	useEffect(() => {
		if (orderPaid) {
			redirect("/checkout/confirmation");
		}
	}, [orderPaid]);

	return { order, updateOrderToPaid };
};
