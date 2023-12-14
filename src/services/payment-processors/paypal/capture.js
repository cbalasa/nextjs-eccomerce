import axios from "axios";
const capture = async (payload) => {
	try {
		return await axios.post(
			`http://localhost:3000/api/payment-processor/paypal`,
			payload
		);
	} catch (error) {
		throw error;
	}
};

export { capture };
