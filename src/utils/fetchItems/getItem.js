import { services } from "@/services";
import { startCase } from "lodash";

export const getItem = async ({ type, id }) => {
	//Makes an API call to get dynamic all types of items we have in out JSONS
	const items = await services?.[type][`get${startCase(type)}`]({ id });
	return items.data[type];
};
