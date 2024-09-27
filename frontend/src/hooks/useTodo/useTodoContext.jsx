import { useContext } from "react";
import { TodosContext } from "../../context/todosContext";

export const useTodoContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("Post context is missing !");
  }
  return context;
};
