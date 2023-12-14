import { deleteCart } from "@/controllers/cart/deleteCart";
import { getCart } from "@/controllers/cart/getCart";
import { postCart } from "@/controllers/cart/postCart";

export async function POST(req) {
	return postCart(req);
}

export async function GET() {
	return getCart();
}

export async function DELETE() {
	return deleteCart();
}
