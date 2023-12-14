import axios from "axios";
const getProducts = async () => {
	try {
		return await axios.get(`http://localhost:3000/api/products`);
	} catch (error) {
		throw error;
	}
};

export { getProducts };
