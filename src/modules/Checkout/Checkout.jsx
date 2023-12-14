"use client";
import React, { useState } from "react";
import CheckoutForm from "./components/CheckoutForm";
import CheckoutPaymentForm from "./components/CheckoutPaymentForm";

function Checkout() {
	const [showCheckoutForm, setShowCheckoutForm] = useState(true);
	return (
		<div>
			{showCheckoutForm ? (
				<CheckoutForm setShowCheckoutForm={setShowCheckoutForm} />
			) : (
				<CheckoutPaymentForm></CheckoutPaymentForm>
			)}
		</div>
	);
}

export default Checkout;
