import NavButton from "../buttons/NavButton";

const FiltersNav = () => {
  return (
    <nav>
      <h2 className="font-bold text-xl sm:text-2xl text-green-900">Filters</h2>
      <div className="flex justify-start w-fit gap-4 items-start flex-wrap my-4">
        <NavButton btnName="All" />
        <NavButton btnName="Completed" />
        <NavButton btnName="Pending" />
      </div>
    </nav>
  );
};

export default FiltersNav;
