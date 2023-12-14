import { useEffect, useState } from "react";
import { useUpdateProductToAddToCart } from "@/hooks/useUpdateProductToAddToCart";

export const useSelectedOption = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const [optionName, setOptionName] = useState("");

	const { updateProductToAddToCart } = useUpdateProductToAddToCart();

	const changeSelectedOption = (option) => {
		if (selectedOption === option) {
			return setSelectedOption("");
		}
		return setSelectedOption(option);
	};

	useEffect(() => {
		updateProductToAddToCart({ option: selectedOption, optionName });
	}, [selectedOption, optionName]);

	return { selectedOption, changeSelectedOption, setOptionName };
};
