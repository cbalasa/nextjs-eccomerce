const { NextResponse } = require("next/server");
const fs = require("fs");
const path = require("path");

export const getProducts = () => {
	const pathToJSON = path.join(process.cwd(), "db/products.json");
	if (fs.existsSync(pathToJSON)) {
		const products = JSON.parse(fs.readFileSync(pathToJSON));
		return NextResponse.json({ products });
	}
};
