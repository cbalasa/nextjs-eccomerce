import { services } from "@/services";
import { getCart } from "./getCart";
import { indexOf } from "lodash";
import { log } from "console";
import { getJson } from "@/utils/getJson";
import { writeToJson } from "@/utils/writeToJson";

const { NextResponse } = require("next/server");
const fs = require("fs");
const path = require("path");
const { cookies } = require("next/headers");
const { v4: uuidv4 } = require("uuid");

export const postCart = async (body) => {
	try {
		const product = await body.json();
		product.quantity = 1;

		let cartJson = await getCart();
		let { cart } = await cartJson.json();
		if (cart) {
			cart = addProductToCart({ product, cart });
			addCart({ cart });
		} else {
			cart = createCart({ product });
			addCart({ cart });
		}
		return NextResponse.json({ cart });
	} catch (error) {
		return NextResponse.json({ message: "error" });
	}
};

const addProductToCart = ({ product, cart }) => {
	cart.products[cart.products.length] = product;
	cart.total = calculateCartTotal({ cart });
	return cart;
};

const createCart = ({ product }) => {
	const id = uuidv4();
	const cart = {};
	cart.id = id;
	cart.products = [product];
	cart.total = calculateCartTotal({ cart });
	cookies().set("cartId", id);
	return cart;
};

const calculateCartTotal = ({ cart }) => {
	return cart.products.map(({ price }) => price).reduce((a, b) => a + b, 0);
};

const addCart = ({ cart }) => {
	let carts = getJson({ folder: "db", file: "carts.json" });
	if (carts.length) {
		carts = carts.map((crt) => {
			if (crt.id === cart.id) {
				crt = cart;
			}
			return crt;
		});
	} else {
		carts = [cart];
	}
	writeToJson({ data: carts, folder: "db", file: "carts.json" });
};
