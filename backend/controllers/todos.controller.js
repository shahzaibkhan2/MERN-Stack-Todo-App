import { Todo } from "../models/post.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Add a Todo
const addTodo = asyncHandler(async (req, res) => {
  const { text, dueDate } = req.body;
  if (!text) {
    throw new ApiError(400, "Sorry ! Text is missing. Text is required.");
  }

  const newTodo = await Todo.create({
    text,
    dueDate: dueDate || "",
  });

  await newTodo.save();

  if (!newTodo) {
    throw new ApiError(
      500,
      "Sorry ! Internal server error. Todo could not be saved in database."
    );
  }
  return res
    .status(200)
    .json(new ApiResponse(201, {}, "Todo added successfully !"));
});

// Get All Todos
const getAllTodos = asyncHandler(async (_, res) => {
  const todos = await Todo.find({}).sort({ dueDate: -1 });

  if (!todos) {
    throw new ApiError(
      500,
      "Sorry ! Internal server error. Todos could not be fetched."
    );
  }
  return res
    .status(200)
    .json(new ApiResponse(201, todos, "Todos fetched successfully !"));
});

// Mark Todos as Completed or Pending
const toggleTodosCompleted = asyncHandler(async (req, res) => {
  const { todoId } = req.params;
  const todo = await Todo.findById(todoId);
  if (!todo) {
    throw new ApiError(
      500,
      "Sorry ! Todo cannot be toggled. Maybe todo ID is missing."
    );
  }

  const toggledTodo = await Todo.findByIdAndUpdate(todoId, {
    completed: !todo.completed,
  });

  if (!toggledTodo) {
    throw new ApiError(500, "Sorry ! Todo cannot be toggled.");
  }

  await toggledTodo.save();

  const todos = await Todo.find({}).sort({ dueDate: -1 });

  if (!todos) {
    throw new ApiError(
      500,
      "Sorry ! Internal server error. Todos could not be fetched."
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(201, todos, "Todos fetched successfully !"));
});

// Delete a Todo
const deleteTodo = asyncHandler(async (req, res) => {
  const { todoId } = req.params;
  const todo = await Todo.findByIdAndDelete(todoId);
  if (!todo) {
    throw new ApiError(
      500,
      "Sorry ! Todo cannot be deleted. Maybe todo ID is missing."
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(201, todo, "Todo deleted successfully !"));
});

// Controllers Exports
export { addTodo, getAllTodos, toggleTodosCompleted, deleteTodo };
