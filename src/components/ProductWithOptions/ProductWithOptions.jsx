import React from "react";
import ProductOptions from "./ProductOptions";
import ButtonAddToCart from "../Button/ButtonAddToCart";
import { useAddToCart } from "@/hooks/cart/useAddToCart";
import Product from "../Product/Product";

function ProductWithOptions({ product }) {
	const { addToCart, isDisabled } = useAddToCart();
	return (
		<Product product={product} height="h-screen">
			<div className="flex flex-col border-t w-full gap-8 pt-4">
				<span className="text-gray-600 ">{product.description}</span>
				<ProductOptions options={product.options} />
				<ButtonAddToCart onClick={addToCart} disabled={isDisabled()}>
					Add to cart
				</ButtonAddToCart>
			</div>
		</Product>
	);
}

export default ProductWithOptions;
