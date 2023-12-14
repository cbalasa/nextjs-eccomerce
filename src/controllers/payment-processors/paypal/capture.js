const { NextResponse } = require("next/server");
import paypal from "@paypal/checkout-server-sdk";

// Creating an environment
let clientId = process.env.PAYPAL_CLIENT_ID;
let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

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
