import axios from "axios";
const deleteCart = async () => {
	try {
		return await axios.delete(`http://localhost:3000/api/cart`);
	} catch (error) {
		throw error;
	}
};

export { deleteCart };
