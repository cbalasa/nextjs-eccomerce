import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
export const formOptions = ({ fields }) => {
	return {
		resolver: yupResolver(validationSchema(fields))
	};
};
