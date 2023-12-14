import Image from "next/image";
import React from "react";

function Product({ product, height, children }) {
	return (
		<div className="flex flex-1 shadow-lg rounded-lg relative items-center gap-4">
			<div className={`${height} w-7/12 relative`}>
				<Image
					src={product.picture}
					alt={product.name}
					fill={true}
					style={{ objectFit: "cover" }}
					className="bg-center "
				/>
			</div>
			<div className="flex flex-col justify-center gap-2 items-center px-2 py-2 flex-1 ">
				<span className="text-base text-center font-bold">{product.name}</span>
				<span className="text-base font-light border rounded-full bg-green-400 px-4 ">
					${product.price}
				</span>
				{children}
			</div>
		</div>
	);
}

export default Product;
