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

const postUser = async function (req, res, next) {
	try {
		const submitPost = await postTodos();
		const data = submitPost.data;

		res.send({
			status: true,
			data: data,
		});
	} catch (error) {
		console.log("tes", error);
		res.send({
			status: false,
			message: error.message,
		});
	}
};

const putUser = async function (req, res, next) {
	try {
		const id = req.params.id;

		const putPost = await putTodos(id);
		const putRespond = putPost.data;

		res.send({
			status: true,
			data: putRespond,
		});
	} catch (error) {
		console.log(error);
		res.send({
			status: false,
			message: error.message,
		});
	}
};

const patchUser = async function (req, res, next) {
	try {
		const { id } = req.params;
		const patchData = await patchTodos(id);

		const data = patchData.data;
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

const deleteUser = async function (req, res, nex) {
	try {
		const id = req.params.id;

		const todosRespond = await deleteTodos(id);
		const data = await todosRespond.data;

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
	postUser,
	putUser,
	patchUser,
	deleteUser,
};
