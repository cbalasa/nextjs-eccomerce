import { capture } from "@/controllers/payment-processors/paypal/capture";

export async function POST(req) {
	return capture(req);
}
