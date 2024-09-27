import { useTodoContext } from "../../hooks/useTodo/useTodoContext";
import { Loader2 } from "lucide-react";

const TodoForm = () => {
  const { todoInputRef, todoDateRef, todosFormOnSubmitHandler, isLoading } =
    useTodoContext();
  return (
    <form onSubmit={todosFormOnSubmitHandler} className="mt-10 flex flex-col">
      <div className="flex flex-col smallOne:flex-row items-center gap-3">
        <input
          ref={todoInputRef}
          type="text"
          placeholder="Enter a todo here..."
          className="text-lg smallOne:text-xl outline-none border-t-none border-x-none border-green-900 text-green-800 border-b-[0.5px] p-1 bg-[#f8f3f3] w-[71%]"
        />
        <input
          ref={todoDateRef}
          type="date"
          name="dueDate"
          className="w-[25%] p-1 sm:p-2 rounded-full text-green-900 focus:outline-none focus:ring-2 focus:ring-green-900 cursor-pointer bg-[#f8f3f3] border border-green-900"
        />
      </div>
      <button
        type="submit"
        className="w-1/3 smallOne:w-40 mx-auto px-4 py-2 smallOne:px-6 smallOne:py-2.5 rounded-full bg-green-900 mt-4 mb-10 text-[#f8f3f3] hover:bg-green-600 transition duration-300 text-md smallOne:text-lg text-nowrap flex items-center justify-center"
      >
        {isLoading && (
          <Loader2 className="animate-spin mr-1 size-4 smallOne:size-5" />
        )}
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
