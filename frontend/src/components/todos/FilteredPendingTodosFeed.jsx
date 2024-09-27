import { useSelector } from "react-redux";
import TableHead from "./TableHead";
import Todos from "./Todos";

const FilteredPendingTodosFeed = () => {
  const { todos } = useSelector((state) => state.todo);

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
};

export default FilteredPendingTodosFeed;