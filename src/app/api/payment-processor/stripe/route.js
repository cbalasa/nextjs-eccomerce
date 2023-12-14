import { createPaymentIntent } from "@/controllers/payment-processors/stripe/createPaymentIntent";

export async function POST(req) {
	return createPaymentIntent(req);
}
