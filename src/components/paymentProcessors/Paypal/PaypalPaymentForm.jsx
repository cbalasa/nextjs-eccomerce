"use client";

import { useOrder } from "@/hooks/order/useOrder";
import { services } from "@/services";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PaypalPaymentMethod({ active }) {
	const { order } = useOrder();

	const createOrder = async () => {
		const res = await services.paymentProcessors.paypal.capture({
			value: order.total
		});
		const confirmation = await res.data;
		return confirmation.id;
	};

	const cancel = (data) => {
		console.log("Cancelled:", data);
	};

	const approve = (data, actions) => {
		console.log("Approved:", data);
		actions.order.capture();
	};
	return (
		<>
			{active && (
				<PayPalScriptProvider
					options={{
						clientId: "test"
					}}
				>
					<PayPalButtons
						style={{ layout: "vertical", color: "silver" }}
						createOrder={createOrder}
						onCancel={cancel}
						onApprove={approve}
					/>
				</PayPalScriptProvider>
			)}
		</>
	);
}

export default PaypalPaymentMethod;
