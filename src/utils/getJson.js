const fs = require("fs");
const path = require("path");

export const getJson = ({ folder, file }) => {
	const pathToFolder = path.join(process.cwd(), folder);
	const pathToJSON = path.join(pathToFolder, file);
	if (!fs.existsSync(pathToJSON)) {
		fs.mkdirSync(pathToFolder, { recursive: true });
		fs.writeFileSync(pathToJSON, "[]");
	}
	const json = JSON.parse(fs.readFileSync(pathToJSON));

	return json;
};
