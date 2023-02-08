var express = require("express");
var router = express.Router();
const { validate } = require("../modules/http/joi");
const { getAllUsers, postUser, putUser, patchUser, deleteUser } = require("../controllers/Users.controller");

// /* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

//get all todo list
router.get("/get/:id", validate, getAllUsers);

//post todos
router.post("/submit/:id", validate, postUser);

//put todos
router.put("/edit/:id", validate, putUser);

// patch todos
router.patch("/patch/:id", validate, patchUser);

//delete todos

router.delete("/delete/:id", validate, deleteUser);

module.exports = router;
