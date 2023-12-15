"use client";
import Hero from "@/components/Hero/Hero";
import Product from "@/components/Product/Product";
import Link from "next/link";
import React from "react";

function DisplayProducts({ products }) {
	return (
		<div className="flex flex-col min-h-screen gap-4">
			<Hero />
			<div className="flex justify-between w-full lg:flex-row flex-col gap-4">
				{products.map((product, index) => {
					return (
						<Link
							key={index}
							href={`/products/${product.id}`}
							className="flex w-full"
						>
							<Product product={product} height="h-96"></Product>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default DisplayProducts;
