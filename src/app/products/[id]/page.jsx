import React from "react";
import { services } from "@/services";
import Product from "@/modules/Product/Product";

async function index({ params: { id } }) {
	const product = await services.products.getProduct({ id });

	return <Product product={product.data.product}></Product>;
}

export default index;
