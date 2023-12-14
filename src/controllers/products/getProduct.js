const { NextResponse } = require("next/server");
const fs = require("fs");
const path = require("path");

export const getProduct = (id) => {
	const pathToJSON = path.join(process.cwd(), "db/products.json");
	if (fs.existsSync(pathToJSON)) {
		const products = JSON.parse(fs.readFileSync(pathToJSON));
		const product = products.filter((product) => product.id === id)[0];
		return NextResponse.json({ product });
	}
};
