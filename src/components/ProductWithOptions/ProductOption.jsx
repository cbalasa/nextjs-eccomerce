import { useSelectedOption } from "@/hooks/useSelectedOption";
import { startCase } from "lodash";
import React from "react";
import Button from "../Button/Button";

function ProductOption({ options, optionName }) {
	const { selectedOption, changeSelectedOption, setOptionName } =
		useSelectedOption();

	return (
		<div className="flex flex-col gap-4">
			<span className="text-sm font-medium uppercase">{optionName}</span>
			<div className="flex gap-4 flex-wrap">
				{options.map((option, index) => {
					return (
						<Button
							key={index}
							classes={` ${
								selectedOption === option
									? "border-green-500"
									: "border-gray-300"
							}`}
							onClick={() => {
								changeSelectedOption(option);
								setOptionName(optionName);
							}}
						>
							{startCase(option)}
						</Button>
					);
				})}
			</div>
		</div>
	);
}

export default ProductOption;
