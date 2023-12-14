/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				"blue-gray": "#eff3f8"
			},
			zIndex: {
				60: 60
			}
		}
	},
	plugins: []
};
