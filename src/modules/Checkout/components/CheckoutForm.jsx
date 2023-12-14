"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useAddToCart } from "@/hooks/cart/useAddToCart";
import { cartSelector } from "@/lib/store/slices/cart";
import { services } from "@/services";
import formDataToJson from "@/utils/formDataToJson";
import { formOptions } from "@/utils/formValidation/formValidation";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function CheckoutForm({ setShowCheckoutForm }) {
	const fields = ["email", "country", "firstName", "lastName", "address"];

	const { register, formState, handleSubmit } = useForm(
		formOptions({ fields })
	);
	const { errors } = formState;
	const myForm = useRef();

	const cart = useSelector(cartSelector);
	const { deleteCart } = useAddToCart();
	const submit = async () => {
		try {
			const payload = formDataToJson(myForm);

			const order = {};
			order.information = {};
			order.information = {
				email: payload.email,
				firstName: payload.firstName,
				lastName: payload.lastName
			};
			order.address = {};
			order.address = {
				country: payload.country,
				address: payload.address
			};
			order.total = cart.total;
			order.products = cart.products;
			order.paid = false;
			await services.order.postOrder(order);
			await deleteCart();
			setShowCheckoutForm(false);
		} catch (error) {}
	};

	return (
		<form
			ref={myForm}
			onSubmit={handleSubmit(submit)}
			className="flex flex-col gap-4"
		>
			<div className="flex gap-2 flex-col">
				<span className="text-lg font-medium">Contact</span>
				<Input
					label="Email address"
					required={true}
					name="email"
					errors={errors}
					validation={register("email")}
				/>
			</div>
			<div className="flex gap-2 flex-col">
				<span className="text-lg font-medium">Shipping Address</span>
				<div className="flex w-full">
					<Input
						label="Country"
						required={true}
						name="country"
						errors={errors}
						validation={register("country")}
					/>
				</div>
				<div className="flex w-full gap-4">
					<div className="flex w-6/12">
						<Input
							label="First name"
							required={true}
							name="firstName"
							errors={errors}
							validation={register("firstName")}
						/>
					</div>
					<div className="flex w-6/12">
						<Input
							label="Last name"
							required={true}
							name="lastName"
							errors={errors}
							validation={register("lastName")}
						/>
					</div>
				</div>
				<div className="flex w-full">
					<Input
						label="Address"
						required={true}
						name="address"
						errors={errors}
						validation={register("address")}
					/>
				</div>
			</div>
			<Button>Submit</Button>
		</form>
	);
}

export default CheckoutForm;
