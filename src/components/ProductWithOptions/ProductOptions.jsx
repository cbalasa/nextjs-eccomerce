import React from "react";
import ProductOption from "./ProductOption";
function ProductOptions({ options }) {
	const printOptions = (options) => {
		const optionsKeys = Object.keys(options);
		return optionsKeys.map((optionKey, index) => {
			return (
				<ProductOption
					key={index}
					options={options[optionKey]}
					optionName={optionKey}
				/>
			);
		});
	};
	return (
		<div className="flex w-full flex-col gap-8">
			{options && printOptions(options)}
		</div>
	);
}

export default ProductOptions;
