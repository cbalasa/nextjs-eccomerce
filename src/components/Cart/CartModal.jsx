"use client";
import { cartSelector, openModalSelector } from "@/lib/store/slices/cart";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import { useOpenCloseCartModal } from "@/hooks/cart/useOpenCloseCartModal";
import Image from "next/image";
import Link from "next/link";
function CartModal() {
	const openModal = useSelector(openModalSelector);
	const { openCloseCartModal } = useOpenCloseCartModal();
	const cart = useSelector(cartSelector);

	return (
		<>
			{openModal && (
				<div className="flex flex-col gap-4 top-0 right-0 z-60 h-screen fixed bg-white md:w-[300px] w-full p-4  overflow-auto no-scrollbar ">
					<div className="flex flex-col">
						<div className="flex w-full py-2">
							<span className="text-center  w-full">Cart</span>
							<Button
								onClick={openCloseCartModal}
								classes="bg-transparent border-0 text-sm font-bold"
							>
								X
							</Button>
						</div>
						<div className="flex flex-col gap-2">
							{cart?.products.map((product, index) => {
								return (
									<div
										key={index}
										className="flex items-center gap-2 border-b py-2"
									>
										<div className="h-12 w-4/12 overflow-hidden relative">
											<Image
												src={product.picture}
												alt={product.name}
												width={60}
												height={10}
											/>
										</div>
										<div className="flex flex-1">
											<div className="flex flex-col gap-2">
												<span className="text-xs">{product.name}</span>
											</div>
											<span className="text-xs font-medium">
												{product.currency}
												{product.price}
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex flex-col gap-4 w-full mt-4 text-sm font-medium self-end ">
						<div className="flex justify-between border-b ">
							<span>Taxes</span>
							<span>0</span>
						</div>
						<div className="flex justify-between border-b ">
							<span>Shiping</span>
							<span>FREE</span>
						</div>
						<div className="flex justify-between border-b ">
							<span>total</span>
							<span>{cart.total}</span>
						</div>
					</div>
					<Link
						className="bg-green-500 text-white font-medium  text-xs px-2 py-1 rounded-xl border-2 text-center"
						href="/checkout/information"
						onClick={openCloseCartModal}
					>
						Proceed to checkout
					</Link>
				</div>
			)}
		</>
	);
}

export default CartModal;
