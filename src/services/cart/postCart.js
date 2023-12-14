import axios from "axios";
const postCart = async (cart) => {
	try {
		return await axios.post(`http://localhost:3000/api/cart`, cart);
	} catch (error) {
		throw error;
	}
};

export { postCart };
