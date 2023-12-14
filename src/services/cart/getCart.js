import axios from "axios";
const getCart = async () => {
	try {
		return await axios.get(`http://localhost:3000/api/cart`);
	} catch (error) {
		throw error;
	}
};

export { getCart };
