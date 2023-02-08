var express = require("express");
var router = express.Router();
const { validate } = require("../modules/http/joi");
const { getAllUsers, postUser } = require("../controllers/Users.controller");

// /* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

//get all todo list
router.get("/get/:id", validate, getAllUsers);

//post todos
router.post("/submit/:id", validate, postUser);

//put todos
router.put("/edit/:id", async function (req, res, next) {
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
});

// patch todos

router.patch("/patch/:id", async function (req, res, next) {
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
});

//delete todos

router.delete("/delete/:id", async function (req, res, nex) {
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
});

module.exports = router;
