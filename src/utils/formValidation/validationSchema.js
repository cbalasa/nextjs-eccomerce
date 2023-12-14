import * as Yup from "yup";
import _ from "lodash";

const validationSchemaJSON = {
	email: Yup.string()
		.required("Email is required")
		.email("Please enter a valid email"),
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	country: Yup.string().required("Country is required"),
	address: Yup.string().required("Address is required")
};

const pickFields = (fields) => {
	return _.pickBy(validationSchemaJSON, function (value, key) {
		return fields.find((field) => field === key);
	});
};

const validationSchema = (fields) => {
	let fieldsToAddToSchema = pickFields(fields);
	return Yup.object().shape(fieldsToAddToSchema);
};
export { validationSchema };
