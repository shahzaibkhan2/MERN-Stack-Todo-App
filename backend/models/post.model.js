import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export { Todo };
