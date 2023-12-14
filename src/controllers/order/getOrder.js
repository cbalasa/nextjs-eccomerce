const { NextResponse } = require("next/server");
import { getJson } from "@/utils/getJson";
const { cookies } = require("next/headers");

export const getOrder = async () => {
	try {
		const orderId = cookies().get("orderId")?.value;
		const orders = await getJson({ folder: "db", file: "orders.json" });
		const order = orders?.filter((order) => order.id == orderId)?.[0];

		return NextResponse.json({ order });
	} catch (error) {
		console.log("err", error);
	}
};
