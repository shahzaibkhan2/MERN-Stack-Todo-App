import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  toggleTodosCompleted,
} from "../controllers/todos.controller.js";

const router = Router();

router.route("/add-todo").post(addTodo);
router.route("/get-all-todos").get(getAllTodos);
router.route("/toggle-todo/:todoId").get(toggleTodosCompleted);
router.route("/delete-todo/:todoId").delete(deleteTodo);

export default router;
