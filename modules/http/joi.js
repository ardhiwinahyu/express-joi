const Joi = require("joi");

const validate = (req, res, next) => {
	const schema = Joi.object({
		id: Joi.number().required(),
	});

	const { value } = schema.validate(req.params);
	if (value.id !== 1) {
		return res.status(400).json({ msg: "Id tidak ditemukan" });
	}

	next();
};

module.exports = {
	validate,
};
