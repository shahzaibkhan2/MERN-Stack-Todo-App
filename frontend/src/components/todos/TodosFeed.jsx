import { useSelector } from "react-redux";
import Todos from "./Todos";
import TableHead from "./TableHead";

const TodosFeed = () => {
  const { todos, filterations } = useSelector((state) => state.todo);

  if (filterations === "All") {
    return (
      <article className="w-full text-center text-green-900 text-sm smallOne:text-[16px] lg:text-lg">
        <table className="w-full border-collapse table-auto">
          <TableHead />
          <tbody>
            {todos.map((todo) => (
              <Todos todo={todo} key={todo?._id} />
            ))}
          </tbody>
        </table>
      </article>
    );
  } else if (filterations === "Completed") {
    return (
      <article className="w-full text-center text-green-900 text-sm smallOne:text-[16px] lg:text-lg">
        <table className="w-full border-collapse table-auto">
          <TableHead />
          <tbody>
            {todos
              ?.filter((filtered) => filtered?.completed)
              ?.map((todo) => (
                <Todos todo={todo} key={todo?._id} />
              ))}
          </tbody>
        </table>
      </article>
    );
  } else if (filterations === "Pending") {
    return (
      <article className="w-full text-center text-green-900 text-sm smallOne:text-[16px] lg:text-lg">
        <table className="w-full border-collapse table-auto">
          <TableHead />
          <tbody>
            {todos
              ?.filter((filtered) => !filtered?.completed)
              ?.map((todo) => (
                <Todos todo={todo} key={todo?._id} />
              ))}
          </tbody>
        </table>
      </article>
    );
  }
};

export default TodosFeed;
