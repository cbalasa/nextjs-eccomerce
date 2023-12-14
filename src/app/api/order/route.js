import { getOrder } from "@/controllers/order/getOrder";
import { postOrder } from "@/controllers/order/postOrder";

export async function POST(req) {
	return postOrder(req);
}

export async function GET() {
	return getOrder();
}
