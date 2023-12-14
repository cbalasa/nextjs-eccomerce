import axios from "axios";
const getProduct = async ({ id }) => {
	try {
		return await axios.get(`http://localhost:3000/api/products/${id}`);
	} catch (error) {
		throw error;
	}
};

export { getProduct };
