import { AiFillDelete } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { useTodoContext } from "../../hooks/useTodo/useTodoContext";

const Todos = ({ todo }) => {
  const { toggleTodosCompleted, deleteTodo } = useTodoContext();
  return (
    <tr className="border-b border-green-900">
      <td className="p-4 text-left">{todo?.text}</td>
      <td className="p-4 text-center">
        {todo && todo?.completed === true ? "Completed" : "Pending"}
      </td>
      <td className="p-4 text-center">{todo?.dueDate || "No Date"}</td>
      <td className="p-4 flex items-center justify-center">
        <button className="flex gap-2 items-center justify-center">
          <IoMdCheckmark
            onClick={() => toggleTodosCompleted(todo?._id)}
            className="size-5 smallOne:size-6 md:size-7 text-green-600 hover:text-green-800 transition duration-300"
          />
          <AiFillDelete
            onClick={() => deleteTodo(todo?._id)}
            className="size-5 smallOne:size-6 md:size-7 text-red-600 hover:text-red-800 transition duration-300"
          />
        </button>
      </td>
    </tr>
  );
};

export default Todos;
