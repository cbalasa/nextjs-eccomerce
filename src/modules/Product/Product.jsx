"use client";
import { useUpdateProductToAddToCart } from "@/hooks/useUpdateProductToAddToCart";
import ProductWithOptions from "@/components/ProductWithOptions/ProductWithOptions";
import React, { useEffect } from "react";

function Product({ product }) {
	const { updateProductToAddToCart } = useUpdateProductToAddToCart();

	useEffect(() => {
		updateProductToAddToCart({ product });

		return () => {
			updateProductToAddToCart({ product: {} });
		};
	}, []);

	return <ProductWithOptions product={product} />;
}

export default Product;
