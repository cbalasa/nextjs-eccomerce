import { Abel } from "next/font/google";
import React from "react";

function Input({
	label,
	errors,
	name,
	placeholder,
	validation,
	required = false,
	disabled = false,
	type = "text"
}) {
	return (
		<div className="flex w-full flex-col">
			<div className="flex">
				<span className="mb-2 font-medium uppercase text-xs">{label} </span>
				{required ? (
					<sup className="ml-1 mr-2  text-red-500 self-center text-xs">*</sup>
				) : null}
			</div>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				{...validation}
				disabled={disabled}
				className="outline-none p-2  w-full  duration-300 border border-gray-400 rounded-lg border-solid  focus:border-green-400 h-10 bg-background disabled:bg-background disabled:border-none "
			/>
			<div className="text-xs text-red-500 mt-1 ">
				{errors?.[name]?.message}
			</div>
		</div>
	);
}

export default Input;
