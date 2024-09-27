import { useDispatch, useSelector } from "react-redux";
import { setFilterations } from "../../store/features/todoSlice";

const NavButton = ({ btnName }) => {
  const dispatch = useDispatch();
  const { filterations } = useSelector((state) => state.todo);

  const handleBtnClick = () => {
    dispatch(setFilterations(btnName));
  };
  return (
    <button
      onClick={handleBtnClick}
      className={`w-28 smallOne:w-32 px-3 py-1 smallOne:px-4 smallOne:py-1.5 rounded-full text-[#f8f3f3] hover:bg-blue-600 transition duration-300 text-sm smallOne:text-md text-nowrap ${
        filterations === btnName ? "bg-blue-600" : "bg-blue-950"
      }`}
    >
      {btnName}
    </button>
  );
};

export default NavButton;
