"use client";
import { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaymentForm from "./PaymentForm";

// Custom component to wrap the PayPalButtons and handle currency changes

export default function BraintreePaymentForm({ active }) {
	const [clientToken, setClientToken] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await (
				await fetch(
					"https://react-paypal-js-storybook.fly.dev/api/braintree/generate-client-token",
					{ method: "POST" }
				)
			).json();
			setClientToken(response?.client_token || response?.clientToken);
		})();

		return () => {
			setClientToken(null);
		};
	}, []);

	return (
		<>
			{active && (
				<>
					{clientToken ? (
						<div>
							<PayPalScriptProvider
								options={{
									clientId: process.env.BRAINTREE_CLIENT_ID,
									components: "buttons",
									// dataUserIdToken: "your-tokenization-key-here",
									dataClientToken: clientToken,
									intent: "capture",
									vault: false
								}}
							>
								<PaymentForm currency={"USD"} />
							</PayPalScriptProvider>
						</div>
					) : (
						<h1>Loading token...</h1>
					)}
				</>
			)}
		</>
	);
}
