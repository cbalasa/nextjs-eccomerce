import { getProduct } from "@/controllers/products";

export async function GET(req, { params: { id } }) {
	return getProduct(id);
}
