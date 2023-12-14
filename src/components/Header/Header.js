import React from "react";
import Image from "next/image";
import CartHeader from "../Cart/CartHeader";

function Header() {
	return (
		<div className="h-12 mb-2 p-2 flex items-center justify-between text-sm font-medium border-b border-t border-gray-800">
			<ul>
				<li>Home</li>
			</ul>
			<CartHeader />
		</div>
	);
}

export default Header;
