const Joi = require("joi");

const validate = (req, res, next) => {
	const schema = Joi.object({
		id: Joi.number().required(),
	});

	console.log(schema);
	const { value } = schema.validate(req.params);
	console.log(value);
	if (value.id !== 1) {
		return res.status(400).json({ message: "Id tidak ditemukan" });
	}

	next();
};

module.exports = {
	validate,
};
