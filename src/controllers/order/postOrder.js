import { getOrder } from "./getOrder";
import { getJson } from "@/utils/getJson";
import { writeToJson } from "@/utils/writeToJson";
const { cookies } = require("next/headers");

const { NextResponse } = require("next/server");
const { v4: uuidv4 } = require("uuid");

export const postOrder = async (body) => {
	try {
		const orderReceived = await body.json();

		let ordersJson = await getOrder();

		let { order } = await ordersJson.json();

		if (!order) {
			orderReceived.id = uuidv4();
		}
		addUpdateOrder({ orderReceived, order });

		return NextResponse.json({ message: "Order placed" });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "error" });
	}
};

const addUpdateOrder = ({ orderReceived, order }) => {
	let orders = getJson({ folder: "db", file: "orders.json" });
	if (orders.length) {
		if (order) {
			orders = orders.map((ord) => {
				if (ord.id === order.id) {
					ord = orderReceived;
				}
				return ord;
			});
		} else {
			orders[orders.length] = orderReceived;
		}
	} else {
		orders = [orderReceived];
	}
	cookies().set("orderId", orderReceived.id);
	writeToJson({ data: orders, folder: "db", file: "orders.json" });
};
