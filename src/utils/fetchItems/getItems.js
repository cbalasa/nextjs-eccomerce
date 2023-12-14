import { services } from "@/services";
import { startCase } from "lodash";

export const getItems = async ({ type }) => {
	//Makes an API call to get dynamic all types of items we have in out JSONS
	const items = await services?.[type][`get${startCase(type)}`]();
	return items.data[type];
};
