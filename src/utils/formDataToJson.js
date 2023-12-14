const formDataToJson = (form) => {
	const payload = {};
	const formData = form.current
		? new FormData(form.current)
		: new FormData(form);

	for (const [key, value] of formData) {
		payload[key] = value;
	}
	return payload;
};

export default formDataToJson;
