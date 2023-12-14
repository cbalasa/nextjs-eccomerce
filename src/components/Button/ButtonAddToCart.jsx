import React from "react";
import Button from "./Button";

function ButtonAddToCart(props) {
	return (
		<Button {...props} classes="bg-green-500 text-white">
			{props.children}
		</Button>
	);
}

export default ButtonAddToCart;
