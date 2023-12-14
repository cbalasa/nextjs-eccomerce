import axios from "axios";
const getOrder = async () => {
	try {
		return await axios.get(`http://localhost:3000/api/order`);
	} catch (error) {
		throw error;
	}
};

export { getOrder };
