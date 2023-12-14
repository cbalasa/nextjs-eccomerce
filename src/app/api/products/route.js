import { getProducts } from "@/controllers/products";

export async function GET() {
	return getProducts();
}
