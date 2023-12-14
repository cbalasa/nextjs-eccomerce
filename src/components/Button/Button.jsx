import React from "react";

function Button({ children, onClick, title, disabled, classes }) {
	return (
		<button
			className={`bg-gray-100 text-xs px-2 py-1 rounded-xl border-2 min-w-[48px] ${classes} disabled:bg-gray-500`}
			{...(!onClick ? { type: "submit" } : { type: "button" })}
			{...(onClick && { onClick: onClick })}
			aria-disabled={disabled}
			title={title}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;
