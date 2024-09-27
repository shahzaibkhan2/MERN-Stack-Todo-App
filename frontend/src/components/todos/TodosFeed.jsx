import { useSelector } from "react-redux";
import FilteredAllTodosFeed from "./FilteredAllTodosFeed";
import FilteredCompletedTodosFeed from "./FilteredCompletedTodosFeed";
import FilteredPendingTodosFeed from "./FilteredPendingTodosFeed";

const TodosFeed = () => {
  const { filterations } = useSelector((state) => state.todo);

  if (filterations === "All") {
    return <FilteredAllTodosFeed />;
  } else if (filterations === "Completed") {
    return <FilteredCompletedTodosFeed />;
  } else if (filterations === "Pending") {
    return <FilteredPendingTodosFeed />;
  }
};

export default TodosFeed;
