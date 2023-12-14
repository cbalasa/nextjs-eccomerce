"use client";
import BraintreePaymentForm from "@/components/paymentProcessors/Braintree/BraintreePaymentForm";
import PaypalPaymentMethod from "@/components/paymentProcessors/Paypal/PaypalPaymentForm";
import StripePaymentForm from "@/components/paymentProcessors/Stripe/StripePaymentForm";
import React, { useState } from "react";
import stripeLogo from "@/assets/icons/stripe.png";
import paypalLogo from "@/assets/icons/paypal.png";
import braintreeLogo from "@/assets/icons/braintree.png";
import Image from "next/image";
function CheckoutPaymentForm() {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
	const paymentOptions = [
		{
			picture: stripeLogo,
			value: "stripe"
		},
		{
			picture: paypalLogo,
			value: "paypal"
		},
		{
			picture: braintreeLogo,
			value: "braintree"
		}
	];

	const isSelected = (option) => {
		return option === selectedPaymentMethod;
	};

	return (
		<div className="flex flex-col text-sm gap-4 items-center w-full">
			<div className="flex w-6/12 flex-col items-center font-medium">
				<span>Select the payment method</span>
				<div className="flex gap-4 justify-between w-full">
					{paymentOptions.map((option, index) => {
						return (
							<div
								key={index}
								onClick={() => setSelectedPaymentMethod(option.value)}
								className={`flex items-center justify-center w-full cursor-pointer ${
									isSelected(option.value) &&
									"border border-green-500 rounded-lg"
								} `}
							>
								<Image src={option.picture} alt={option.value} width={64} />
							</div>
						);
					})}
				</div>
			</div>
			{selectedPaymentMethod && (
				<>
					<span>Fill in payment details</span>
					<div className="flex w-6/12">
						<StripePaymentForm
							active={selectedPaymentMethod === "stripe"}
						></StripePaymentForm>
					</div>
					<PaypalPaymentMethod active={selectedPaymentMethod === "paypal"} />
					<BraintreePaymentForm
						active={selectedPaymentMethod === "braintree"}
					/>
				</>
			)}
		</div>
	);
}

export default CheckoutPaymentForm;
