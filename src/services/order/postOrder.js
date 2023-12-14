import axios from "axios";
const postOrder = async (order) => {
	try {
		return await axios.post(`http://localhost:3000/api/order`, order);
	} catch (error) {
		throw error;
	}
};

export { postOrder };
