const { NextResponse } = require("next/server");
import paypal from "@paypal/checkout-server-sdk";

// Creating an environment
let clientId =
	"ATLp1SpNhVML05Zd1fYmp7rnWlla-wSKnMT8Zsc_8GJsSBFIvUYMffRX9VZ6rkKtkqSHQIAlmX_Lm21A";
let clientSecret =
	"EJX0VVbNcJtXLU36I46rm052oAlKuL7IchF39UfpJT2pFWtHuFNeqJbHnjsfzUZMlCiySO8bhGxgt0Xp";

let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export const capture = async (body) => {
	try {
		const { value } = await body.json();
		let request = new paypal.orders.OrdersCreateRequest();

		request.requestBody({
			intent: "CAPTURE",
			purchase_units: [
				{
					amount: {
						currency_code: "USD",
						value: value
					}
				}
			]
		});

		const response = await client.execute(request);

		return NextResponse.json({
			id: response.result.id
		});
	} catch (error) {
		console.log("err", error);
	}
};
