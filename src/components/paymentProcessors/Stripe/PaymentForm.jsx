"use client";

import Button from "@/components/Button/Button";
import { useOrder } from "@/hooks/order/useOrder";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PaymentForm() {
	const stripe = useStripe();
	const elements = useElements();
	const { order, updateOrderToPaid } = useOrder();
	const [paymentSuccess, setPaymentSuccess] = useState(false);
	useEffect(() => {
		if (paymentSuccess) {
			redirect("/checkout/confirmation");
		}
	}, [paymentSuccess]);

	const onSubmit = async (e) => {
		e.preventDefault();
		const cardElement = elements?.getElement("card");

		try {
			if (!stripe || !cardElement) return null;

			const { data } = await axios.post("/api/payment-processor/stripe", {
				data: { amount: order.total }
			});
			const clientSecret = data;

			await stripe?.confirmCardPayment(clientSecret, {
				payment_method: { card: cardElement }
			});
			await updateOrderToPaid();
			setPaymentSuccess(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={onSubmit} className="flex gap-4 flex-col relative w-full">
			<CardElement />
			<div className="w-6/12  m-auto flex">
				<Button classes="bg-green-400 text-white font-medium  m-auto self-auto">
					Submit
				</Button>
			</div>
		</form>
	);
}
