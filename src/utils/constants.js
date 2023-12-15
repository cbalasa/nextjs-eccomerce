import stripeLogo from "@/assets/icons/stripe.png";
import paypalLogo from "@/assets/icons/paypal.png";
import braintreeLogo from "@/assets/icons/braintree.png";

export const PAYMENT_OPTIONS = [
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
