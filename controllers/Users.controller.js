const { getTodos, postTodos, putTodos, patchTodos, deleteTodos } = require("../modules/http/axios");

const getAllUsers = async function (req, res, next) {
	try {
		const todosRespond = await getTodos();
		const data = todosRespond.data;

		res.send({
			status: true,
			data: data,
		});
	} catch (error) {
		res.send({
			status: false,
			message: error.message,
		});
	}
};

module.exports = {
	getAllUsers,
};
