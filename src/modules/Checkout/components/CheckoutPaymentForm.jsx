"use client";

import React, { useState } from "react";
import { PAYMENT_OPTIONS } from "@/utils/constants";
import Image from "next/image";
import PaymentProcessors from "@/components/paymentProcessors/PaymentProcessors";
function CheckoutPaymentForm() {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

	const isSelected = (option) => {
		return option === selectedPaymentMethod;
	};

	return (
		<div className="flex flex-col text-sm gap-4 items-center w-full">
			<div className="flex w-6/12 flex-col items-center font-medium">
				<span>Select the payment method</span>
				<div className="flex gap-4 justify-between w-full">
					{PAYMENT_OPTIONS.map((option, index) => {
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
				<PaymentProcessors selectedPaymentMethod={selectedPaymentMethod} />
			)}
		</div>
	);
}

export default CheckoutPaymentForm;
