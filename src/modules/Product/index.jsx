import React from "react";
import Product from "./Product";
import { services } from "@/services";

async function index({ params: { id } }) {
	const product = await services.products.getProduct({ id });

	return <Product product={product.data.product}></Product>;
}

export default index;
