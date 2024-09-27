import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { apiUri } from "../constants/apiUri";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteTodo, setTodos } from "../store/features/todoSlice";

export const TodosContext = createContext(null);

const TodosContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  // <---------------- States ------------------>

  const [isLoading, setIsLoading] = useState(false);

  // <---------------- useRefs ------------------>
  const todoInputRef = useRef(null);
  const todoDateRef = useRef(null);

  // <---------------- Handlers and Functions ------------------>

  // Add a Todo
  const todosFormOnSubmitHandler = async (event) => {
    event.preventDefault();
    let todoInputRefVal = todoInputRef.current
      ? todoInputRef.current.value
      : "";
    let todoDateRefVal = todoDateRef.current ? todoDateRef.current.value : "";

    setIsLoading(true);

    try {
      const response = await axios.post(`${apiUri.baseUri}/${apiUri.todoUri}`, {
        text: todoInputRefVal,
        dueDate: todoDateRefVal,
      });

      if (response.data.success) {
        getAllTodos();
        toast.success("Todo added successfully !");
        todoInputRef.current.value = "";
        todoDateRef.current.value = "";
      } else {
        toast.error("Sorry ! Todo data did not processed.");
        todoInputRef.current.value = "";
        todoDateRef.current.value = "";
      }
    } catch (error) {
      toast.error("Todo addition failed due to some error.");
      console.log(error.message);
      todoInputRef.current.value = "";
      todoDateRef.current.value = "";
    } finally {
      setIsLoading(false);
    }
  };

  // Get All Todos
  const getAllTodos = async () => {
    try {
      const response = await axios.get(
        `${apiUri.baseUri}/${apiUri.allTodosUri}`
      );

      if (response.data.success) {
        dispatch(setTodos(response?.data?.data));
      } else {
        toast.error("Sorry ! Todo data did not processed.");
      }
    } catch (error) {
      toast.error("Todos fetch failed due to some error in the server.");
      console.log(error.message);
    }
  };

  // Toggle Todos (Mark Completed or Pending)
  const toggleTodosCompleted = async (todoId) => {
    try {
      const response = await axios.get(
        `${apiUri.baseUri}/${apiUri.toggleTodoUri}/${todoId}`
      );

      if (response.data.success) {
        dispatch(setTodos(response?.data?.data));
        toast.success("Todo toggled successfully !");
      } else {
        toast.error("Sorry ! Todo did not toggle.");
      }
    } catch (error) {
      toast.error("Todo toggle failed due to some error in the server.");
      console.log(error.message);
    }
  };

  // Toggle Todos (Mark Completed or Pending)
  const deleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(
        `${apiUri.baseUri}/${apiUri.deleteTodoUri}/${todoId}`
      );

      if (response.data.success) {
        dispatch(setDeleteTodo(response?.data?.data));
        toast.success("Todo deleted successfully !");
        getAllTodos();
      } else {
        toast.error("Sorry ! Todo did not delete.");
      }
    } catch (error) {
      toast.error("Todo deletion failed due to some error in the server.");
      console.log(error.message);
    }
  };

  // <----------------------- useEffects ----------------------->

  useEffect(() => {
    getAllTodos();
  }, []);

  //   <---------------- Home Context Values --------->
  const postContextValues = {
    todoInputRef,
    todoDateRef,
    todosFormOnSubmitHandler,
    toggleTodosCompleted,
    deleteTodo,
    isLoading,
  };
  return (
    <TodosContext.Provider value={postContextValues}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
