import { useOrder } from "@/hooks/order/useOrder";
import {
	BraintreePayPalButtons,
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useEffect } from "react";

// This values are the props in the UI

const PaymentForm = ({ currency }) => {
	// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
	// This is the main reason to wrap the PayPalButtons in a new component
	const [{ options }, dispatch] = usePayPalScriptReducer();
	const style = { label: "paypal", layout: "vertical" };

	const { order, updateOrderToPaid } = useOrder();
	useEffect(() => {
		dispatch({
			type: "resetOptions",
			value: {
				...options,
				currency: currency
			}
		});
	}, [currency]);

	const createOrder = async (data, actions) => {
		return actions.braintree
			.createPayment({
				flow: "checkout",
				amount: order.total, // Here change the amount if needed
				currency: "USD", // Here change the currency if needed
				intent: "capture",
				enableShippingAddress: true,
				shippingAddressEditable: false,
				shippingAddressOverride: {
					recipientName: "Scruff McGruff",
					line1: "1234 Main St.",
					line2: "Unit 1",
					city: "Chicago",
					countryCode: "US",
					postalCode: "60652",
					state: "IL",
					phone: "123.456.7890"
				}
			})
			.then((orderId) => {
				// Your code here after create the order
				return orderId;
			});
	};

	const onApprove = async (data, actions) => {
		try {
			const payload = await actions.braintree.tokenizePayment(data);

			//do something with payload if needed

			//then
			await updateOrderToPaid();
		} catch (error) {
			throw error;
		}
	};
	return (
		<>
			{order && (
				<BraintreePayPalButtons
					style={style}
					disabled={false}
					forceReRender={[style, order.total]}
					createOrder={createOrder}
					onApprove={onApprove}
				/>
			)}
		</>
	);
};

export default PaymentForm;
