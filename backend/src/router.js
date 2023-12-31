const express = require("express");
const tasksControllers = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");
const router = express.Router();

router.get("/tasks", tasksControllers.getAll);

router.post(
	"/tasks",
	tasksMiddleware.validateFieldTitle,
	tasksControllers.createTask
);

router.delete("/tasks/:id", tasksControllers.deleteTask);

router.put(
	"/tasks/:id",
	tasksMiddleware.validateFieldTitle,
	tasksMiddleware.validateFieldStatus,
	tasksControllers.updateTask
);

module.exports = router;
