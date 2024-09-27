import { useContext } from "react";
import { TodosContext } from "../../context/todosContext";

// Custom useContext to avoid Excessive useContext usage
export const useTodoContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("Post context is missing !");
  }
  return context;
};
