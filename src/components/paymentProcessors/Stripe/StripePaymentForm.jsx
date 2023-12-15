"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function StripePaymentForm({ active }) {
	return (
		<>
			{active && (
				<Elements stripe={stripePromise}>
					<span>Fill in payment details</span>
					<PaymentForm />
				</Elements>
			)}
		</>
	);
}
