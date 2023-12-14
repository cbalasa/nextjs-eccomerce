const { NextResponse } = require("next/server");
const fs = require("fs");
const path = require("path");
const { cookies } = require("next/headers");

export const getCart = async () => {
	try {
		const pathToJSON = path.join(process.cwd(), "db/carts.json");
		if (fs.existsSync(pathToJSON)) {
			const cartId = cookies().get("cartId")?.value;
			const carts = JSON.parse(fs.readFileSync(pathToJSON));

			const cart = carts.filter((cart) => cart.id == cartId)[0];
			return NextResponse.json({ cart: cart });
		}

		return NextResponse.json({ message: "No cart" });
	} catch (error) {
		console.log("err", error);
	}
};
