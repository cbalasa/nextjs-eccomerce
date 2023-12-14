import { getJson } from "@/utils/getJson";
import { writeToJson } from "@/utils/writeToJson";

const { NextResponse } = require("next/server");
const { cookies } = require("next/headers");

export const deleteCart = async () => {
	try {
		const cartId = cookies().get("cartId")?.value;
		const carts = await getJson({ folder: "db", file: "carts.json" });
		const filteredCarts = carts?.filter((cart) => cart.id != cartId);

		writeToJson({ data: filteredCarts, folder: "db", file: "carts.json" });
		return NextResponse.json({ message: "No cart" });
	} catch (error) {
		console.log("err", error);
	}
};
