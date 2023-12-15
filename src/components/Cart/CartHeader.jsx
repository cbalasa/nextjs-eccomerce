"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import shoppingCart from "@/assets/icons/shopping-cart.png";
import { useGetCart } from "@/hooks/cart/useGetCart";
import { useOpenCloseCartModal } from "@/hooks/cart/useOpenCloseCartModal";

function CartHeader() {
	const { cart } = useGetCart();
	const { openCloseCartModal } = useOpenCloseCartModal();
	return (
		<div
			className="relative p-2 border rounded-lg cursor-pointer"
			onClick={openCloseCartModal}
		>
			<Image src={shoppingCart} alt="shopping cart" width={16} height={16} />
			<span className="absolute -top-1 text-xs -right-2 px-1.5 bg-blue-500 text-white font-medium rounded-md">
				{cart?.products?.length}
			</span>
		</div>
	);
}

export default CartHeader;
