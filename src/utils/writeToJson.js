const fs = require("fs");
const path = require("path");

export const writeToJson = ({ data, folder, file }) => {
	const pathToFolder = path.join(process.cwd(), folder);
	const pathToJSON = path.join(pathToFolder, file);
	if (!fs.existsSync(pathToJSON)) {
		fs.mkdirSync(pathToFolder, { recursive: true });
		return fs.writeFileSync(pathToJSON, JSON.stringify(data));
	}
	return fs.writeFileSync(pathToJSON, JSON.stringify(data));
};
