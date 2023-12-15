import React from "react";
import BraintreePaymentForm from "@/components/paymentProcessors/Braintree/BraintreePaymentForm";
import PaypalPaymentMethod from "@/components/paymentProcessors/Paypal/PaypalPaymentForm";
import StripePaymentForm from "@/components/paymentProcessors/Stripe/StripePaymentForm";
function PaymentProcessors({ selectedPaymentMethod }) {
	return (
		<>
			<div className="flex w-6/12">
				<StripePaymentForm
					active={selectedPaymentMethod === "stripe"}
				></StripePaymentForm>
			</div>
			<PaypalPaymentMethod active={selectedPaymentMethod === "paypal"} />
			<BraintreePaymentForm active={selectedPaymentMethod === "braintree"} />
		</>
	);
}

export default PaymentProcessors;
